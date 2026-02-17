import React from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create Profile</h2>
          <p>Setting up your secure health ID</p>
        </div>
        
        <form className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
           
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select className="form-select">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" />
          </div>

          

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create strong password" />
          </div>

          <button type="submit" className="signup-btn">COMPLETE SETUP</button>

          <p className='signup-footer'>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;