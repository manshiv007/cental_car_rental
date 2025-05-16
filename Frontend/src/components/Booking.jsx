import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleFetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/api/getallbooking");
      if (response.data.success) {
        setBookings(response.data.data);
        setShowBookings(true);
      } else {
        setError("Failed to fetch bookings");
      }
    } catch (err) {
      setError("Error fetching booking data");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };
  const sidebarButtonStyle = {
    width: "100%",
    backgroundColor: "purple",
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
            backgroundColor: "#F8F8F8",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "purple", fontWeight: "bolder" }}>
              CAR RENTAL SYSTEM
            </h4>
            <ul className="list-unstyled">
              {[
                { name: "CRUD CAR", path: "/admin/crudcar" },
                { name: "LIST RENTER", path: "/admin/renter" },
                { name: "LIST HIRER", path: "/admin/hirer" },
                { name: "CAR LIST", path: "/admin/carlist" },
                { name: "BOOKING", path: "/admin/booking" },
                { name: "BRANDMANAGER", path: "/brand" },
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <button
                    className="sidebar-link"
                    onClick={() => navigate(item.path)}
                    style={sidebarButtonStyle}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-warning w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        {/* Main Content */}
        <div className="col-10 p-4" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
          <h2 className="text-center mb-4">Booking List</h2>
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-success px-4 py-2" onClick={handleFetchBookings}>
              View All Bookings
            </button>
          </div>
          {loading && <div className="text-center">Loading bookings...</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}
          {showBookings && (
            <div className="row">
              {bookings.length === 0 ? (
                <div className="col-12 text-center text-muted">No bookings found.</div>
              ) : (
                bookings.map((booking) => (
                  <div key={booking._id} className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "12px",color:"black" }}>
                      <div className="card-body">
                        <h5 className="card-title text-primary mb-3">{booking.carId?.name}</h5>
                        <p className="card-text">
                          <strong>Brand:</strong> {booking.brandId?.name} <br />
                          <strong>Description:</strong> {booking.brandId?.description} <br />
                          <strong>Booked By:</strong> {booking.hirerId?.name} (
                          {booking.hirerId?.email}) <br />
                          <strong>Payment Mode:</strong> {booking.paymentMode} <br />
                          <strong>Account Name:</strong> {booking.accountHolderName} <br />
                          <strong>Account No:</strong> {booking.accountNumber} <br />
                          <strong>CVV:</strong> {booking.cvv}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList
