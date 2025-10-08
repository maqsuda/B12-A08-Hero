import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import imageHero from "/src/assets/hero.png";
const Banner = () => {
  return (
    <div className="bg-[#f7f0f0] mx-auto ">
      <h1 className="text-4xl md:text-7xl text-center pt-10 font-bold">
        We Build <br /> <span className="text-[#632ee3]">Productive</span> Apps
      </h1>
      <p className="text-center pt-5 px-2">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact
      </p>
      <div className="flex justify-center pt-5 gap-5">
        <button className="border-1 border-gray-400 flex gap-2 px-5 py-2 items-center">
          <span className="text-[#47bcff]">
            {" "}
            <FaGooglePlay />
          </span>
          Google Play
        </button>

        <button className="border-1 border-gray-400 flex gap-2 px-5 py-2 items-center">
          <span className="text-[#0073f6]">
            <FaAppStoreIos />
          </span>
          App Store
        </button>
      </div>

      <div className="flex justify-center pt-10 px-2">
        <img src={imageHero}></img>
      </div>
    </div>
  );
};

export default Banner;
