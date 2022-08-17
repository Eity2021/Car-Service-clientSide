import  { useEffect, useState } from 'react';

const useDetailsPage = (serviceId) => {
    const [detailsCars, setDetailsCars] = useState([]);
 
    useEffect(() => {
        const url = `http://localhost:7000/cars/${serviceId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setDetailsCars(data));
      }, [serviceId]);

    return [detailsCars,setDetailsCars]
};

export default useDetailsPage;