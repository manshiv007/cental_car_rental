import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const nav= useNavigate()
  useEffect(()=>{
    const authenticate=sessionStorage.getItem("auth")
    if(!authenticate){
      nav("/login")        
    }
  },[])
  const navigate= useNavigate()
  
  const handleLogout = () =>{
    sessionStorage.clear()
    nav("/login")
  }

  return (
    
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "offwhite",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "purple", fontWeight: "bolder" }}>
              CAR RENTAL SYSTEM
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "ADD CAR", path: "/admin/crudcar" },
                { name: "LIST RENTER", path: "/admin/renter" },
                { name: "LIST HIRER", path: "/admin/hirer" },
                { name: "CAR LIST", path: "/admin/carlist" },
                { name: "BOOKING", path: "/admin/booking" },
                { name: "ADD BRAND", path: "/brand" },
              
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
                      borderRadius: "5px",
                      fontWeight: "bolder",
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
        <main className="col-md-10 p-4" style={{ backgroundColor: "white" }}>
          <div
            style={{
              backgroundImage: "url('/assets/img/dash.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "80%",
              height: "95vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft:"130px",
            }}
          ></div>
          </main>
        </div>
        
      </div>
    
  );
};

export default AdminDashboard;
