import React from "react";
import Product from "./Products";
import Testimonials from "./Testimonials";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "DiaryBlog",
      description: "Create a new DiaryBlog",
      //   imageUrl: "path_to_some_image.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "TypeIt",
      description: "Pen your opinion here",
      //   imageUrl: "path_to_another_image.jpg",
      price: 29.99,
    },
  ];
  return (
    <div>
      <h2>Welcome to Universe </h2>
      <p>Web Components that just works !</p>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="testimonials">
          <h2>Don't Take Our Words See Who Are Using Ore Web Products</h2>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
