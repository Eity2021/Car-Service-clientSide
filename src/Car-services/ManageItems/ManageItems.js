import React from 'react';
import ShowManageItems from '../ShowManageItems/ShowManageItems';
import useServices from '../useServices/useServices';

const ManageItems = () => {
    const [services, setServices] = useServices({});

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