import React from "react";
import Banner from "../Banner/Banner";
import BuiltForYou from "../../Pages/BuiltForYou/BuiltForYou";
import TrendingApps from "../../Pages/TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BuiltForYou></BuiltForYou>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
