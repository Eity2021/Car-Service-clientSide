import { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setServices] = useState([]);

     
    useEffect(() => {
        fetch('http://localhost:8000/cars')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return [services,setServices];
};

export default useServices;