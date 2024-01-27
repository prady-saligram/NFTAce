import React from "react";
import icon from "./safasffa-32x32.PNG";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <img src={icon} alt="icon" className="w-32" />
        <Link to="/" className="navbar-brand ml-2">
          NFTAce
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul
            style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
            className="navbar-nav ml-auto"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mint" className="nav-link">
                Mint NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/marketplace" className="nav-link">
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-nfts" className="nav-link">
                My NFTs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/queries" className="nav-link">
                Queries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/charity" className="nav-link">
                Charity
              </Link>
            </li>
          </ul>
        </div>

    </nav>
  );
};

export default Navbar;
