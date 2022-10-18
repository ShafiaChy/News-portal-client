import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../Home/Sidebar/Sidebar";
import SideComponent from "../Home/SideComponent/SideComponent";

const News = () => {
  const data = useLoaderData();
  const singleData = data.data[0];
  return (
    <Container>
      <Row>
        <Col className="d-none d-lg-block" lg={2}>
          <Sidebar></Sidebar>
        </Col>

        <Col lg={7}>
          <div class="card mb-5 shadow">
            <img src={singleData.image_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title mb-3 text-center">{singleData.title}</h5>
              <div className="d-flex justify-content-around">
                <p class="card-text">
                  <span className="fw-bold">Author: </span>
                  {singleData.author?.name}
                </p>
                <p class="card-text">
                  <span className="fw-bold">Published Date: </span>
                  {singleData.author?.published_date}
                </p>
                <p class="card-text fw-bold">
                  <HiStar className="text-warning" />
                  {singleData.rating?.number}
                </p>
              </div>
              <p class="card-text">{singleData.details}</p>
            </div>
          </div>
        </Col>

        <Col lg={3}>
          <SideComponent />
        </Col>
      </Row>
      
    </Container>
  );
};

export default News;
