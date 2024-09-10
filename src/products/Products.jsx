import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import Chart from "../components/chart/Chart.jsx";
import { productData } from "../demoData.js";
import { Publish } from "@mui/icons-material";
const Products = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/src/assets/premium_photo-1711051474965-5b781f4fd280.avif"
              alt=""
              className="productInfoImg"
            />

            <span className="productName">Apple Air</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">456</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">4256</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" name="" id="" placeholder="Apple Airdops" />
            <label>In Stock </label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="/src/assets/premium_photo-1711051474974-607d59a0b997.avif"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish  className="publish"/>
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
