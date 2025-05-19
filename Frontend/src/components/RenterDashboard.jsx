import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RenterDashboard = () => {
  const navigate = useNavigate();
  const [showBookingOptions, setShowBookingOptions] = useState(false);

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const userType = sessionStorage.getItem("userType");

    if (!userId || userType !== "renter") {
      navigate("/login"); // change to your actual login route
    }
  }, [navigate]);

  // ✅ Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userType");
    navigate("/login"); // make sure this matches your route
  };

  const sidebarButtonStyle = {
    width: "100%",
    backgroundColor: "#FF69B4",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "500",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#FEF6F8",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "deeppink", fontWeight: "bold" }}>
              CAR RENTER
            </h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <button
                  className="sidebar-link"
                  onClick={() => navigate("/renterbooking")}
                  style={sidebarButtonStyle}
                >
                  BOOKING
                </button>
              </li>
            </ul>
          </div>

          {/* ✅ Logout Button */}
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>

        {/* Main Content */}
        <div className="col-10 p-0">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=1600&q=80&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <h1 className="text-white">Welcome to Renter Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterDashboard;
