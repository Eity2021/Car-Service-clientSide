import React from 'react';
import useServices from './../useServices/useServices';
const Services = () => {

    const [services] = useServices([]);

    return (
        <div>
            <h1>this is services : {services.length}</h1>

        </div>
    );
};

export default Services;