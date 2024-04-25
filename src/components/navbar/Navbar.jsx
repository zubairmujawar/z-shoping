import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="w-full p-2 bg-orange-400 sticky top-0 flex flex-col md:flex-row lg:justify-evenly lg:px-3 items-center">
      <h1 className="font-bold text-white text-2xl">Z-Shoping</h1>
      <ul className="list-none text-center flex justify-evenly items-center">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/favorite">
            Cart
          </Link>
        </li>
        
      </ul>
      <input
          type="text"
          placeholder="search food"
          className="p-1 px-2 left-5 rounded-sm w-[18rem] m-3 md:m-0"
        />
    </nav>
  );
};

export default Navbar;
