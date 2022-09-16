import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <button onClick={() => navigate('/settings')} className="btn btn-outline-success ml-2">
            Settings
          </button>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button onClick={() => navigate('/register')} className="btn btn-sm btn-outline-danger ml-2">
            Register
          </button>
          <button onClick={() => navigate('/login')} className="btn btn-sm btn-outline-success ml-2">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
