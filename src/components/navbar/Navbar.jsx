import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import toast from "react-hot-toast";
const Navbar = () => {
  // get the user from localstorage
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  // logout Function
  const logOutFunction = () => {
    localStorage.clear("users");
    navigate("/signup");
    // toast.success("Logout successful");
  };

  return (
    <nav className="w-full p-2  bg-orange-400 sticky top-0 flex flex-col md:flex-row lg:justify-evenly lg:px-3 items-center">
      <h1 className="font-bold text-white text-2xl font-[poppins]">
        Z-Shoping
      </h1>
      <ul className="list-none text-center font-medium gap-4 flex justify-evenly items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              `pb-2 ${isActive && "underline font-bold text-white "}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `pb-2 ${isActive && "underline font-bold text-white "}`
            }
            to="/allproducts"
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `pb-2 ${isActive && "underline font-bold text-white "}`
            }
            to="/cartpage"
          >
            Cart
          </NavLink>
        </li>
        {user?.role === "user" && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive && "underline font-bold text-white "}`
              }
              to="/user-dashboard"
            >
              My orders
            </NavLink>
          </li>
        )}
        {user?.role === "admin" && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive && "underline font-bold text-white "}`
              }
              to="/admin-dashboard"
            >
              Admin
            </NavLink>
          </li>
        )}
      </ul>
      <input
        type="text"
        placeholder="search items"
        className="p-1 px-2 left-5 rounded-sm w-[18rem] m-3 md:m-0"
      />
      {user && <p className="font-medium">Hello "{user.name}"</p>}
      <button
        className="bg-white hover:bg-orange-300 text-black font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-white rounded-lg"
        onClick={logOutFunction}
      >
        {user ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
