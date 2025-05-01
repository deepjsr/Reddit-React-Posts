import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = ({ data }) => {
  const { title, selftext_html, url, score } = data;

  return (
    <Card className="shadow-sm card-custom h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {selftext_html ? (
          <div
            className="card-description text-muted"
            dangerouslySetInnerHTML={{ __html: selftext_html }}
          />
        ) : (
          <div className="card-description text-muted fst-italic">
            No description available.
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="outline-primary"
            size="sm"
            href={url}
            target="_blank"
          >
            Visit
          </Button>
          <span className="badge bg-success">Score: {score}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
