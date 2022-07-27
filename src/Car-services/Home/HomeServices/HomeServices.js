import React from "react";
import useServices from "./../../useServices/useServices";
import "../../../CssPage/CssPage.css";
import "../../../CssPage/Responsive.css";
import ShowService from "../../ShowService/ShowService";
import { Link } from "react-router-dom";


const HomeServices = () => {
  const [services] = useServices([]);
 
  return (
    <div >
      <div>
        <h1  className="heading">Our Services</h1>
      </div>
      <div className="services_area">
        {services.slice(0,4).map((service) => (
          <ShowService key={service._id} service={service}  ></ShowService>
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
