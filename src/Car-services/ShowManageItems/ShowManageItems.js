import React from "react";

const ShowManageItems = ({ service, setServices, services }) => {
  const { _id, name, description, img, price } = service;

  const manageDeleteHandle = (id) => {
    const confirm = window.confirm("Are you sure");

    if (confirm) {
      const url = `http://localhost:8000/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remain = services.filter((service) => service._id !== id);
          setServices(remain);
          alert("Delete Confirm");
        });
    }
  };
  return (
    <div>
      <div className="info_container">
        <div className="service">
          <div className="service-img">
            <img src={img} alt="" />
            <div className="service-container">
              <div className="service-button">
                <button>Book Now</button>
              </div>
            </div>
            <button
              className="Manage_delete"
              onClick={() => manageDeleteHandle(_id)}
            >
              X
            </button>
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
    </div>
  );
};

export default ShowManageItems;
