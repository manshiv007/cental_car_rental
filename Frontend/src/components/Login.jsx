import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", userType: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.userType) {
      toast.warn("Please select the user type");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/login", formData);
      console.log(res.data)
      const { success, message, token, user } = res.data;

      if (!success) {
        toast.error(message || "Login failed.");
        setLoading(false);
        return;
      }

      if (formData.userType !== user.userType) {
        toast.error("User type does not match with your account.");
        setLoading(false);
        return;
      }

      toast.success("Login successfully");

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("auth", true);
      sessionStorage.setItem("userId", user.id);
      sessionStorage.setItem("userType", user.userType);

      switch (user.userType) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "renter":
          navigate("/renterdashboard");
          break;
        case "hirer":
          navigate("/hirer/booking");
          break;
        default:
          toast.warn("Invalid user type.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Error occurred during login.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Blurry background image */}
      <div
        style={{
          backgroundImage: "url('/assets/img/carb3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Login Form Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
          margin: "auto",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ToastContainer />
        <h2 style={{ marginBottom: "20px", color: "#fff" }}>User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            autoFocus
            style={inputStyle}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              style={{ ...inputStyle, paddingRight: "70px" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                color: "#00f",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password Link */}
          <p style={{ textAlign: "right", marginTop: "-10px", marginBottom: "15px" }}>
            <span
              onClick={() => navigate("/forgotpassword")}
              style={{ cursor: "pointer", color: "#00f", textDecoration: "underline" }}
            >
              Forgot Password?
            </span>
          </p>

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            style={{ ...inputStyle, backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="renter">Renter</option>
            <option value="hirer">Hirer</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            style={{
              ...buttonStyle,
              backgroundColor: loading ? "#999" : "#1E90FF",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            style={{ ...buttonStyle, backgroundColor: "crimson", marginTop: "10px" }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "0px",
  color: "#fff",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.2s ease-in-out",
};

export default Login;
