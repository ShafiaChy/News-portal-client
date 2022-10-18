import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SideComponent from "../SideComponent/SideComponent";
import MiddleComponent from "../MiddleComponent/MiddleComponent";
import Sidebar from "../Sidebar/Sidebar";

import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  const datas = useLoaderData();

  // Filter By View
  const [filter, setFilter] = useState("Filter");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    if (filter === "High-Low View") {
      const sortByView = datas.data.sort(function (a, b) {
        return b.total_view - a.total_view;
      });
      setFilterData(sortByView);
    }
  }, [filter, datas]);

  return (
    <Container>
      <Row className="mb-4">
        <Col className="d-flex">
          <div className="d-flex">Breaking News<FaAngleRight/></div>

          <Marquee className="d-flex" gradient={false}>
            <ul className="d-flex mt-3">
              {datas.data.map((newsTitle) => (
                <li className="me-4 text-danger">{newsTitle.title}</li>
              ))}
            </ul>
          </Marquee>
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-lg-block" lg={2}>
          <Sidebar></Sidebar>
        </Col>

        <Col lg={7}>
          <div>
            <div>
              {/* Dropdown Menu */}
              <div className="mb-2">
                <DropdownButton
                  size="sm"
                  variant="white"
                  id="dropdown-basic-button"
                  title={filter}
                >
                  <Dropdown.Item onClick={() => setFilter("High-Low View")}>
                    High-Low View
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div>
              {filterData.length
                ? filterData.map((data) => (
                    <MiddleComponent
                      data={data}
                      key={data._id}
                    ></MiddleComponent>
                  ))
                : datas.data.map((data) => (
                    <MiddleComponent
                      data={data}
                      key={data._id}
                    ></MiddleComponent>
                  ))}
            </div>
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
