import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
    const {serviceId} = useParams();
    const [detailsCars, setDetailsCars] = useState([]);

    useEffect(() => {
   
        const url = `http://localhost:8000/cars/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailsCars(data))
    },[serviceId])
    return (
        <div>
            <h1>this is service page ID: {detailsCars.name}</h1>
        </div>
    );
};

export default ServiceDetailsPage;