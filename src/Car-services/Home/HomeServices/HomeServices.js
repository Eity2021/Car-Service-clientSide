import React from "react";
import HomeService from "../HomeService/HomeService";
import useServices from "./../../useServices/useServices";
import "../../../CssPage/CssPage.css";
import "../../../CssPage/Responsive.css";
import { Link } from 'react-router-dom';


const HomeServices = () => {
  const [services] = useServices([]);
  return (
    <div>
      <div>
        <h1  className="heading">Our Services</h1>
      </div>
      <div className="services_area">
        {services.slice(0,4).map((service) => (
          <HomeService key={service.id} service={service}></HomeService>
        ))}
      </div>
     <div className="HomeServiceButton">
     <Link to="/service" >
      <button className="serviceButton">All services</button>
      </Link>
     </div>
    </div>
  );
};

export default HomeServices;
