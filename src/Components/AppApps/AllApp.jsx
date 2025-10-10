import React, { use } from "react";
import { CiSearch } from "react-icons/ci";
import App from "../App/App";

const AllApp = ({ allAppPromise }) => {
  const allAppData = use(allAppPromise);

  return (
    <div className="mx-auto ml-5">
      <div className="text-center pt-[40px] md:pt-[80px]">
        <h1 className="text-5xl font-bold">Our All Applications</h1>

        <p className="text-[#627382] text-xl pt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row pt-10 justify-between items-center mb-5 md:mb-10">
        <div>
          <p>
            <span>( {allAppData.length} )</span>App Found
          </p>
        </div>

        <div className="mt-2">
          <div className="flex gap-2 text-center items-center">
            <CiSearch className="input-icon absolute mr-5" />

            <input
              type="text"
              placeholder="    Search App"
              className="input-field border-1 border-gray-300 px-2 py-2 w-[300px] md:w-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {allAppData.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default AllApp;
