import React from "react";
import { Card } from "react-bootstrap";

const OtherNews = ({ data }) => {
  const { title, image_url } = data;
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Text className="fw-bold">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OtherNews;
