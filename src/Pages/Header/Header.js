import React, { useState } from "react";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { FaBars, FaPlus, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MediaButtons from "../../components/MediaButtons/MediaButtons";
import Sidebar from "../Home/Sidebar/Sidebar";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="white" className="mb-5 shadow-sm">
      <Container>
        <Navbar.Brand className="text-black">
          <Link to={`/`} className="text-decoration-none">
            <Button variant="primary">News</Button>
            <span> Portal</span>
          </Link>
        </Navbar.Brand>

        <>
          <Button variant="primary" className="d-lg-none" onClick={handleShow}>
            <FaBars />
          </Button>

          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>News Portal</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mb-lg-0 mb-3">
                {" "}
                <Button className="me-2 text-white fw-bold" variant="danger">
                  <FaPlus className="me-2" />
                  Advertise
                </Button>
                <Button variant="outline-dark">
                  <FaUserCircle className="fw-bold" />
                </Button>
              </div>
              {show && (
                <div>
                  <Sidebar />
                  <MediaButtons />
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
    </Navbar>
  );
};

export default Header;
