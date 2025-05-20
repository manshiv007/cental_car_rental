import React, { useEffect } from "react";

import { useNavigate} from "react-router-dom";

const HirerDashboard = () => {
  
  const nav= useNavigate()
    useEffect(()=>{
      const authenticate=sessionStorage.getItem("auth")
          if(!authenticate){
            nav("/login")        
          }
      },[])
  const navigate = useNavigate()
    
  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/login");
  };
  

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "white",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
           
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "#c80815", fontWeight: "bolder" }}>
              CAR RENTAL SYSTEM
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "View Car", path: "/viewcarhirer" },
                { name: "MAKE BOOKING", path: "/makebooking" },
                { name: "BOOKING HISTORY", path: "/bookinghistory" },
                { name: "CHANGE PASSWORD", path: "/changepassword" },
               
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    style={{
                      width: "100%",
                      backgroundColor: " #c80815",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      fontWeight: "500",
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
        <main className="col-md-10 p-4" style={{ backgroundColor: "#FFFFFF" }}>
      
          <div
            style={{
              backgroundImage: "url('/assets/img/f2.jpg')", 
              marginLeft:"30px",
              borderRadius:"30px",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor:"black",
              width: "95%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
            



          ></div>
       
          </main>
        </div>
        
      </div>
    
  );
};

export default HirerDashboard
