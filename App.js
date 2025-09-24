import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.nicepng.com/png/detail/299-2993275_food-order-icon-food-order-logo.png"
          alt="logoimage"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restaurantContainer">
        <div className="restaurantCard"></div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return <Header />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
