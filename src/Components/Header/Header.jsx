import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import BuiltForYou from "../../Pages/BuiltForYou/BuiltForYou";
import TrendingApps from "../../Pages/TrendingApps/TrendingApps";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BuiltForYou></BuiltForYou>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Header;
