import React, { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
        const userId = sessionStorage.getItem("userId");
      console.log(userId);
  },[])

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      toast.error("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      toast.error("New passwords do not match");
      return;
    }

    try {
      const userId = sessionStorage.getItem("userId");
      console.log(userId);

      const response = await axios.post("http://localhost:3001/api/changepassword", {
        userId,
        oldPassword,
        newPassword,
      });

      console.log("API Response:", response);

      if (response.data.success) {
        setMessage("Password changed successfully");
        toast.success("Password changed successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const errMsg = response.data.message || "Failed to change password";
        setError(errMsg);
        toast.error(errMsg);
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || "An error occurred while changing password";
      console.error("Error:", errMsg);
      setError(errMsg);
      toast.error(errMsg);
    }
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="row">
        <aside className="col-md-2 d-flex flex-column justify-content-between bg-light p-3 shadow-sm vh-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">CAR RENTAL SYSTEM</h4>
            <ul className="nav flex-column">
              {[
                { name: "View Car", path: "/viewcarhirer" },
                { name: "MAKE BOOKING", path: "/makebooking" },
                { name: "BOOKING HISTORY", path: "/bookinghistory" },
                { name: "CHANGE PASSWORD", path: "/changepassword" },
              ].map((item) => (
                <li key={item.name} className="nav-item mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    className="btn btn-outline-danger w-100 fw-semibold"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-danger fw-bold w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        <main className="col-md-10 p-5 bg-white">
          <div className="container">
            <h2 className="text-center text-primary mb-4">Change Password</h2>
            {message && <div className="alert alert-success text-center">{message}</div>}
            {error && <div className="alert alert-danger text-center">{error}</div>}
            <form
              onSubmit={handleChangePassword}
              className="mx-auto shadow p-4 rounded"
              style={{ maxWidth: "500px" }}
            >
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Change Password
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChangePassword;

