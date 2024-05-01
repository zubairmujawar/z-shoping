import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NoPage from "./pages/nopage/NoPage";
import Productinfo from "./pages/productinfo/Productinfo";
import ScrollTop from "./components/scrolltop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allproducts/AllProducts";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/productinfo" element={<Productinfo />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/updateproduct" element={<UpdateProductPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
