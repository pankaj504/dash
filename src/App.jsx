import React from "react";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./components/homepage/Homepage";
import { HashRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserList from "./components/userList/UserList";
import UserPage from "./components/UserPAge/UserPage";
import NewUsr from "./newUserPage/NewUsr";
import Products from "./products/Products";
import ProductList from "./productList/ProductList";
import NewProduct from "./newProduct/NewProduct";
const App = () => {
  return (
    <HashRouter basename="/">
      <Topbar />
      <div className="dash">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/newUser" element={<NewUsr />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productsId" element={<Products />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
