import React from "react";
import { useParams } from "react-router-dom";
import "./PackageDetail.css"
import Carousel from "../../components/carousel/Carousel";
import PackageDesc from "../../components/packageDesc/PackageDesc";

const PackageDetail = (props: any) => {
  const { id } = useParams();
  debugger;
  return (
    <>
      <div className="">
        <Carousel></Carousel>
        <PackageDesc></PackageDesc>
      </div>
    </>
  );
};

export default PackageDetail;
