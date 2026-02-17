import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Menu, X, Bell } from 'lucide-react';
import './Navbar.css';
import NotificationPanel from './NotificationPanel';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <HeartPulse className="icon-logo" />
            <span className="logo-text">Meditech <span className='logo-text-span'>AI</span></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <Link to="/check" className="nav-link">Symptom Checker</Link>
          <Link to="/reminders" className="nav-link">Reminders</Link>
          <Link to="/profile" className="nav-link">My Health</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Bell
            className="icon-bell"
            onClick={() => setIsNotificationOpen(true)}
          />
        

        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="nav-menu-mobile">
          <Link to="/check" onClick={() => setIsOpen(false)}>Symptom Checker</Link>
          <Link to="/reminders" onClick={() => setIsOpen(false)}>Reminders</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>My Health</Link>
          <Link to="/login" className="mobile-login-btn" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}

      {/* Right-side Notification Panel */}
      <NotificationPanel
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </nav>
  );
};

export default Navbar;