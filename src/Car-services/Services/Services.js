import React, { useEffect, useState } from "react";
import "../../CssPage/CssPage.css";
import "../../CssPage/Responsive.css";
import ShowService from "../ShowService/ShowService";
//import useServices from "./../useServices/useServices";

const Services = () => {
  //const [services] = useServices({});
  const [services, setServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(12);

  useEffect(() => {
    fetch(`http://localhost:7000/cars?page=${pages}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [pages, size]);

  useEffect(() => {
    fetch("http://localhost:7000/carsCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  return (
    <div>
      <h1 className="heading">Our Services</h1>
      <div className="services_area">
        {services.map((service) => (
          <ShowService key={service._id} service={service}></ShowService>
        ))}
      </div>
      <div className="pagination">
        
        {[...Array(pageCount).keys()].map((page) => (
          <button className={pages === page ? 'selected' : ""}
          onClick={() => setPages(page)}>{page + 1}</button>
        ))}

        {/* <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="13">13</option>
          <option value="15">15</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select> */}
      </div>
    </div>
  );
};

export default Services;
