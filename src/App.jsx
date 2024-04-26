import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NoPage from "./pages/nopage/NoPage";
import Productinfo from './pages/productinfo/Productinfo'
import ScrollTop from "./components/scrolltop/ScrollTop";
import CartPage from './pages/cart/CartPage'
import AllProducts from "./pages/allproducts/AllProducts";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/productinfo" element={<Productinfo/>}/>
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/allproducts" element={<AllProducts/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
