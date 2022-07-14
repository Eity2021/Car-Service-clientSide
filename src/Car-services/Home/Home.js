import React from "react";
import Banner from "./Banner/Banner";
import Experts from "./Experts/Experts";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="Home-padding">
      <Banner></Banner>
      <HomeServices></HomeServices>
      <Experts></Experts>
    </div>
  );
};

export default Home;
