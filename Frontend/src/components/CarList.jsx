import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const nav = useNavigate();

  useEffect(() => {
    const authenticate = sessionStorage.getItem("auth");
    if (!authenticate) {
      nav("/login");
    }
  }, []);

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/getcars");
      if (response.data.success) {
        setCars(response.data.cars);
      } else {
        setError("Failed to fetch cars");
      }
    } catch (err) {
      setError("Something went wrong while fetching car list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#F0F2F5",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <div>
            <h4
              className="text-center mb-4"
              style={{ color: "#6A0DAD", fontWeight: "700", fontSize: "1.5rem" }}
            >
              CAR RENTAL SYSTEM
            </h4>
            <ul className="nav flex-column">
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
                    onClick={() => navigate(item.path)}
                    style={{
                      width: "100%",
                      backgroundColor: "#6A0DAD",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-warning w-100 mt-3" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>

        {/* Main Content */}
        <main
          className="col-md-10 offset-md-2 p-4"
          style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#4B0082", fontWeight: "600", fontSize: "2.2rem", letterSpacing: "1px" }}
          >
            Available Cars
          </h2>

          {loading && <div className="text-center">Loading cars...</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          {!loading && !error && (
            <div className="row">
              {cars.length === 0 ? (
                <div className="col-12 text-center text-muted">No cars found.</div>
              ) : (
                cars.map((car) => (
                  <div className="col-md-4 mb-4" key={car._id}>
                    <div className="card shadow-sm" style={{ borderRadius: "12px" }}>
                      <img
                        src={`http://localhost:3001/uploads/${car.image}`}
                        className="card-img-top"
                        alt={car.name}
                        style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                      />
                      <div className="card-body">
                        <h3 className="card-title" style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                          {car.name}
                        </h3>
                        <h5 className="card-text" style={{ fontWeight: "500", color: "#444" }}>
                          ₹{car.price}
                        </h5>
                        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                          {car.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CarList;
