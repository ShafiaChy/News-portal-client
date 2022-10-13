import React from "react";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
const MiddleComponent = ({ data }) => {
  const { _id, rating, author, title, image_url, details, total_view } = data;
  return (
    <Card className="text-start mb-5 border-0 shadow-lg">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <Image
              className="rounded-circle me-2"
              style={{ height: "60px" }}
              src={author.img}
            />
          </div>
          <div className="mt-3">
            <p className="fw-bolder mb-0">{author?.name || "N/a"}</p>
            <p className="text-muted">{author?.published_date || "N/a"}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaRegBookmark className="mx-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bolder">
          <h4 className="text-center">{title}</h4>
        </Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="text-muted mt-2">
          {details.slice(0, 300)}...
          <Link to={`/news/${_id}`} className="text-decoration-none">
            Read More
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <p class="card-text fw-bold">
          <HiStar className="text-warning" />
          <span className="ms-2">{rating?.number}</span>
        </p>
        <p class="card-text fw-bold">
          <FaEye />
          <span className="ms-2">{total_view}</span>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default MiddleComponent;
