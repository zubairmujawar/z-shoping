import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  return (
    <nav className="w-full p-2  bg-orange-400 sticky top-0 flex flex-col md:flex-row lg:justify-evenly lg:px-3 items-center">
      <h1 className="font-bold text-white text-2xl">Z-Shoping</h1>
      <ul className="list-none text-center flex justify-evenly items-center">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/allproducts">
            All Products
          </Link>
        </li>
        <li>
          <Link className="link" to="/cartpage">
            Cart
          </Link>
        </li>
        <li>
          <Link className="link" to="/userdashboard">
            User dashboard
          </Link>
        </li>
        <li>
          <Link className="link" to="/admin-dashboard">
            Admin dashboard
          </Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="search food"
        className="p-1 px-2 left-5 rounded-sm w-[18rem] m-3 md:m-0"
      />
      <Link className="link" to="/login">
        <button className="bg-white p-2 rounded-sm ">Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
