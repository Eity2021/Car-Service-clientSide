import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import useServices from './../../useServices/useServices';

const Experts = () => {

    const [experts,setExpert] = useState([]);

    useEffect(() => {
        fetch('expert.json')
        .then(res => res.json())
        .then(data => setExpert(data))
    },[])

    return (
        <div>
            <div>
                <h1 className='text-center'>Our Experts</h1>
            </div>
           <div className='experts_area'>
           
            {
                experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
           
           </div>
        </div>
    );
};

export default Experts;