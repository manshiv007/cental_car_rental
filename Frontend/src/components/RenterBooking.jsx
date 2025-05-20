import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RenterBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔐 Authentication check
  useEffect(() => {
    const auth = sessionStorage.getItem("auth");
    const userId = sessionStorage.getItem("userId");
    const userType = sessionStorage.getItem("userType");

    if (!auth || !userId || userType !== "renter") {
      navigate("/login");
    }
  }, [navigate]);

  // 📦 Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/getallbooking");
        setBookings(res.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Failed to fetch bookings.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // 🔄 Update booking status
  const handleStatusChange = async (bookingId, status) => {
    try {
      const res = await axios.post("http://localhost:3001/api/updatebookingstatus", {
        bookingId,
        status,
      });

      if (res.data.success) {
        setBookings(prev =>
          prev.map(b => (b._id === bookingId ? { ...b, status } : b))
        );
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Something went wrong while updating booking status.");
    }
  };

  // 🚪 Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="d-flex">
      {/* 🧭 Sidebar */}
      <aside
        className="d-flex flex-column justify-content-between"
        style={{
          backgroundColor: "#FEF6F8",
          padding: "20px",
          height: "100vh",
          borderRight: "1px solid #ddd",
          width: "250px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <div>
          <h4 className="text-center mb-4" style={{ color: "brown", fontWeight: "bolder" }}>
            CAR RENTER
          </h4>
          <ul className="list-unstyled">
            <li className="mb-3">
              <button
                className="btn btn-warning w-100"
                onClick={() => navigate("/renterbooking")}
              >
                BOOKING
              </button>
            </li>
          </ul>
        </div>

        <button className="btn btn-danger w-100" onClick={handleLogout}>
          LOG OUT
        </button>
      </aside>

      {/* 📄 Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: "250px", padding: "20px" }}>
        <h2 className="mb-4">Renter Bookings</h2>

        {loading ? (
          <p>Loading bookings...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="card mb-3 p-3 shadow">
              <p><strong>Car:</strong> {booking.carId?.name || <span className="text-danger">Not Assigned</span>}</p>
              <p><strong>Brand:</strong> {booking.brandId?.name || "N/A"}</p>
              <p><strong>Hirer:</strong> {booking.hirerId?.name || "N/A"}</p>
              <p><strong>Email:</strong> {booking.hirerId?.email || "N/A"}</p>
              <p><strong>Payment Mode:</strong> {booking.paymentMode || "N/A"}</p>
              <p><strong>Status:</strong> <span className="text-capitalize">{booking.status}</span></p>

              {booking.status?.toLowerCase() === "pending" && (
                <div className="mt-2">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleStatusChange(booking._id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleStatusChange(booking._id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RenterBooking;
