import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import SingleProducts from "./components/SingleProducts";
import Footer from "./components/Footer";
import SerachBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import PlaceHolder from "./pages/PlaceHolder";
import MyOrders from "./pages/MyOrders";
import Orders from "./pages/Orders";
import ScrollToTop from "./ScrolltoYop";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <SerachBar />
      <ToastContainer className={"mt-10 ml-11"} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProducts />} />

        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/placeholder" element={<PlaceHolder />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
