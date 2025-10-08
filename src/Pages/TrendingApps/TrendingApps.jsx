import React, { Suspense } from "react";

const TrendingApps = () => {
  const trendPromise = fetch("/heroData.json").then((res) => res.json());
  console.log(trendPromise);
  return (
    <div className="pt-10 text-center bg-[#f1f5e8]">
      <h2 className="text-5xl font-bold">Trending Apps</h2>
      <p className="py-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div>
        <Suspense fallback="<span>Loading .....</span>">
          {/* <TrendingApp trendPromise={trendPromise}></TrendingApp> */}
        </Suspense>
      </div>
    </div>
  );
};

export default TrendingApps;
