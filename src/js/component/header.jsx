import React from "react";

const Header = () => {
	return (
        <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Start Bootstrap</a>
          <div className="links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>
	);
};

export default Header;