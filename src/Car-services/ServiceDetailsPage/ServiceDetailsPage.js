import React from "react";
import { Link, useParams } from "react-router-dom";
import useDetailsPage from "./../useDetailsPage/useDetailsPage";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const [detailsCars] = useDetailsPage(serviceId);
   
  return (
    <div className="details-page-area">
      <div className="detailsPage-Img">
        <img className="Img" src={detailsCars.img} alt="" />
      </div>
      <div className="details-page-info">
        <h1 className="detailsName">{detailsCars.name}</h1>
        <p className="detailsDes">{detailsCars.description}</p>
        <p className="detailsPrice">Price : <span className="servicePrice">{detailsCars.price}$ </span></p>
    
        <div>
          <Link to={`/makeAppointment/${serviceId}`}>
            <button className="makeAppoint">Make Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
