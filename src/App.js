import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"

function App() {
  return (
    <Router className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} /> 
          <Route path="/user/:userId" element={<User />} />
          <Route path="/products" element={<ProductList />} /> 
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
