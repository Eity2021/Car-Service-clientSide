import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CssPage/CssPage.css";
import "../../CssPage/Responsive.css"
const ShowService = ({service}) => {
  const { _id,name, description, img, price } = service;
  
   const navigate = useNavigate();
   const handleServiceButton = (id) =>{
    navigate(`/service/${id}`)
   }
  return (
    <div className="info_container">
      <div className="service">
        <div className="service-img">
          <img src={img} alt="" />
          <div className="service-container">
            <div className="service-button">
              <button  onClick={() => handleServiceButton(_id) }>Book Now</button>
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

export default ShowService;
