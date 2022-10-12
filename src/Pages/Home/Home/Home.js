import React from "react";
import { useLoaderData } from "react-router-dom";
import SideComponent from "../SideComponent/SideComponent";
import MiddleComponent from "../MiddleComponent/MiddleComponent";
import Sidebar from "../Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const datas = useLoaderData();
  return (
    <Container fluid>
      <Row>
        <Col class="d-none d-lg-block" lg={2}>
          <Sidebar></Sidebar>
        </Col>

        <Col lg={7}>
          <div>
            {datas.data.map((data) => (
              <MiddleComponent data={data} key={data._id}></MiddleComponent>
            ))}
          </div>
        </Col>

        <Col lg={3}>
          <SideComponent></SideComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
