import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BrandCarousel from "../../../components/BrandCarousel/BrandCarousel";
import MediaButtons from "../../../components/MediaButtons/MediaButtons";

import OtherNews from "./OtherNews";

const SideComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then((res) => res.json())
      .then((results) => setData(results.data.slice(0, 3)));
  }, []);
  return (
    <div>
      <div className="d-none d-lg-block">
        <MediaButtons />
      </div>
      <h6 className="text-start">Editorials</h6>
      {data?.map((data) => (
        <OtherNews data={data} key={data._id}></OtherNews>
      ))}
      <Button variant="primary">Load All</Button>
      <div className="mt-5">
        
        <BrandCarousel/>
      </div>
    </div>
  );
};

export default SideComponent;
