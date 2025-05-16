import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3001/api/forgot-password", { email });
      toast.success(res.data.message || "Password reset instructions sent to your email.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
        
        
      <ToastContainer />
      <form onSubmit={handleReset} style={formStyle}>
        <h2 style={{ marginBottom: "20px", color: "#fff", }}>Reset Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          style={inputStyle}
        />
        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('/assets/img/carb4.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
};

const formStyle = {
  maxWidth: "400px",
  width: "100%",
  padding: "30px",
  borderRadius: "15px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  color: "#fff",
  textAlign: "center",
  
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
  backgroundColor: "#1E90FF",
  color: "#fff",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  
};

export default ForgotPassword;
