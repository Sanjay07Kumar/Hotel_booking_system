import React from "react";
import "./Login.css";
function LoginPage() {
  return (   
    <div className="login-container">
        <div class="upper"></div>
      <div className="login-box">
        <h2>Login to your account</h2>
        <form>
          <div className="form-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;