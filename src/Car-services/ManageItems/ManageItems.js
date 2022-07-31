import React from 'react';
import ShowManageItems from '../ShowManageItems/ShowManageItems';
import useServices from '../useServices/useServices';

const ManageItems = () => {
    const [services, setServices] = useServices({});

    const manageDeleteHandle = (id) => {
        console.log(id);
         const confirm = window.confirm("Are you sure");
    
        if(confirm){
           
          const  url = `http://localhost:8000/cars/${id}`;
          fetch(url , {
            method : "DELETE",
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const remain = services.filter(service => service._id !== service.id);
    
          })
        }
      }
    return (
        <div>
        <h1 className="heading">Manage Items</h1>
        <div className="services_area">
          {services.map((service) => (
            <ShowManageItems key={service._id} service={service} 
            setServices={setServices} services={services}
            ></ShowManageItems>
           
          ))}
        </div>
       
      </div>
    );
};

export default ManageItems;