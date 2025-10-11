import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === parseInt(id));
  const { title, ratingAvg, downloads, image, reviews, description, ratings } =
    singleApp;

  return (
    <div className="w-11/12 mx-auto pb-10">
      <div className="grid grid-cols-4">
        <div className=" col-span-1 justify-center items-center">
          <img className="w-[300px]" src={image}></img>
        </div>
        <div className="col-span-3">
          <h2 className="font-bold text-2xl ">{title}</h2>
          <div className="flex pb-6">
            <div className=" p-6">
              <span className="text-emerald-300">
                <FaDownload />
              </span>
              <h3>Downloads</h3>
              <p className="font-bold text-2xl py-5">{downloads / 100000}M</p>
            </div>

            <div className=" p-6">
              <span className="text-[#ff8811]">
                <IoStar />
              </span>
              <h3>Average Ratings</h3>
              <p>{ratingAvg}</p>
            </div>

            <div className=" p-6">
              <span className="text-[#632ee3]">
                <BiSolidLike />
              </span>
              <h3>Total Reviews</h3>

              <p>{reviews}</p>
            </div>
          </div>
          <button className="bg-[#00d390] p-2">Install Now (291 MB)</button>
        </div>
      </div>
      <div>
        <h1 className="py-5 font-bold text-2xl">Ratings</h1>
        <div className="p-10 ">
          <BarChart width={730} height={250} data={ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ff8811" />
            <Bar dataKey="name" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <h3 className="text-2xl font-bold py-4">Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default AppDetails;
