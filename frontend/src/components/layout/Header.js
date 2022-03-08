import React, { Fragment } from 'react';
import '../../App.css';

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="https://www.vasiti.com/logo.svg" alt="Homepage_Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active nav-product" href="#">
              Products
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
            <a className="nav-item nav-link" href="#">
              Media
            </a>
            <a className="nav-item nav-link" href="#">
              Stories
            </a>
            <a className="nav-item nav-link" href="#">
              <button type="button" className="btn get-started">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
