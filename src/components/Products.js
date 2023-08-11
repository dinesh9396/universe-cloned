// Product.js
import React from "react";
// import { mockProducts } from "./data/MockProducts";

const Product = ({ product }) => {
  return (
    <div className="col-sm-6">
      <div className="card text-center">
        <img
        //   src={product.imageUrl}
        //   className="card-img-top"
        //   alt={product.name}
        />
        <div className="card-body custom-card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn btn-primary">
            <i className="fas fa-cart-plus"></i> Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
