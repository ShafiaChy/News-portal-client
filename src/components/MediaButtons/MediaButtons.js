import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaNewspaper, FaRegNewspaper, FaTwitch, FaWhatsapp, FaYoutube } from "react-icons/fa";

const MediaButtons = () => {
  return (
    <>
      <ButtonGroup className="w-100" vertical>
        <Button className="mb-2" variant="outline-primary">
          <span>
            <FaGoogle />
          </span>{" "}
          Login via Google
        </Button>
        <Button variant="outline-dark">
          <span>
            <FaGithub />
          </span>{" "}
          Login via Github
        </Button>
      </ButtonGroup>
      <div>
        <p className="mt-3 mb-0">Find Us On</p>
        <ListGroup className="">
          <ListGroup.Item className="bg-light mb-2">
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaTwitch /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaNewspaper /> Privacy Policy
          </ListGroup.Item>
          <ListGroup.Item className="bg-light mb-2">
            <FaRegNewspaper /> Terms & Condition
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default MediaButtons;
