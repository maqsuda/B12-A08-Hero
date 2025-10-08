import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ErrorPage></ErrorPage>
      <Footer></Footer>
    </div>
  );
};

export default Error;
