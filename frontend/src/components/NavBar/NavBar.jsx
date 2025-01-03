import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logo from "../../Assets/Logo.png";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img src={Logo} alt="Logo" className='logo' />
          </Link>
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Home</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/about/" style={{ textDecoration: "none", color: "white" }}>
            <b>About Me</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/products/" style={{ textDecoration: "none", color: "white" }}>
            <b>Products</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/donate/" style={{ textDecoration: "none", color: "white" }}>
            <b>Donate</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/blogs/" style={{ textDecoration: "none", color: "white" }}>
            <b>Blog</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/cart/" style={{ textDecoration: "none", color: "white" }}>
            <b>Cart</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
