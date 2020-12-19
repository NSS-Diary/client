import React from "react";
import nss_logo from "../../images/nss_logo.png";
import "./Navbar.css";
import MenuItems from "./MenuItems";
const Navbar = ({ title, user }) => {
  if (title === "Login") {
    return (
      <div>
        {/* <Head as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Head.Content>Login</Head.Content>
        </Head> */}
        Login
      </div>
    );
  } else if (title === "Home") {
    return (
      <>
        <div className="h_centre">
          <div className="img-head">
            <img src={nss_logo} alt="Nss Logo" width={70} />
            <p className="h_h3 shadow-light-blue">NSS DIARY</p>
          </div>
          <MenuItems user={user} />
        </div>
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill=" #12232e"
              fillOpacity="1"
              d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,53.3C672,43,768,53,864,64C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </>
    );
  }
};

export default Navbar;
