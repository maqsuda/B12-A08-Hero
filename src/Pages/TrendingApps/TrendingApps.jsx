import React, { Suspense } from "react";
import TrendingApp from "./TrendingApp";

const TrendingApps = () => {
  //   useEffect( fetch("/heroData8.json")
  // .then(res => res.json())
  // .then(data=>console.log(data)));

  //  const allAppData = use(allAppPromise);
  //   console.log(allAppData.length);

  return (
    <div className="pt-10 text-center bg-[#f1f5e8]">
      <h2 className="text-5xl font-bold">Trending Apps</h2>
      <p className="py-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* {allAppData.map((app) => (
          <App key={app.id} app={app}></App>
        ))} */}
      </div>
    </div>
  );
};

export default TrendingApps;
