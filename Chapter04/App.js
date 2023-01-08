import React from "react";
import ReactDOM from "react-dom/client";
const restaurantList = require("./restaurant-list");

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt-text="logo"
        src="https://www.originalsunrisecafe.com/uploads/4/9/6/5/4965104/editor/sunrise-logo-white.png?1585511853"
      ></img>
    </a>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qey4uyhqmnhi4unruxa8",
  name: "Burger King",
  cuisines: ["American, Indian"],
  rating: "5 *",
};

//const RestaurantCard = (props) => {
const RestaurantCard = (props) => {
  console.log(props.restaurant.data);
  const { cloudinaryImageId, name, cuisines, locality } = props.restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>Location : {locality}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard restaurant={restaurant} key={restaurant.data.id} />
        );
      })}
    </div>
  );
};
const Footer = () => {
  return;
  <h3> Copyright 2023 -Sunrise Cafe</h3>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(root);
root.render(<AppLayout />);
