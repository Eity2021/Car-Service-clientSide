import React from "react";
import "../../CssPage/CssPage.css";
import "../../CssPage/Responsive.css"
import ShowService from "../ShowService/ShowService";
import useServices from "./../useServices/useServices";
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const [services] = useServices({});
 const navigate = useNavigate();
  const handleServiceButton = (id) =>{
    navigate(`/service/${id}`)
  }
  return (
    <div>
      <h1 className="heading">Our Services</h1>
      <div className="services_area">
        {services.map((service) => (
          <ShowService key={service.id} service={service} handleServiceButton={handleServiceButton}></ShowService>
        ))}
      </div>
    </div>
  );
};

export default Services;
