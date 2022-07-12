import React from "react";
import ShowService from "../ShowService/ShowService";
import useServices from "./../useServices/useServices";
const Services = () => {
  const [services] = useServices([]);

  return (
    <div>
      <h1>this is services : {services.length}</h1>
      <div className="services_area">
        {services.map((service) => (
          <ShowService key={service.id} service={service}></ShowService>
        ))}
      </div>
    </div>
  );
};

export default Services;
