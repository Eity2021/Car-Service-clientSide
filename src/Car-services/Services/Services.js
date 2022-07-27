import React from "react";
import "../../CssPage/CssPage.css";
import "../../CssPage/Responsive.css"
import ShowService from "../ShowService/ShowService";
import useServices from "./../useServices/useServices";

const Services = () => {
  const [services] = useServices({});

  return (
    <div >
      <h1 className="heading">Our Services</h1>
      <div className="services_area">
        {services.map((service) => (
          <ShowService key={service._id} service={service} ></ShowService>
        ))}
      </div>
    </div>
  );
};

export default Services;
