import React from "react";
import "../../../CssPage/CssPage.css";
import "../../../CssPage/Responsive.css";


const HomeService = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className="info_container">
      <div className="service">
        <div className="service-img">
          <img src={img} alt="" />
          <div className="service-container">
            <div className="service-button">
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="service-info">
          <h3 className="info_name">{name}</h3>
          <p className="info_des">{description}</p>
          <p className="info_price">
            Price : <span className="price">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
