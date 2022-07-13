import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';


const Home = () => {
    return (
        <div className='Home-padding'>
            <Banner></Banner>
           <Experts></Experts>
        </div>
    );
};

export default Home;