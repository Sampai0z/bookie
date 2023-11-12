// src/components/Card.jsx
// import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, text, imageUrl }) => {
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      {imageUrl && (
        <BootstrapCard.Img variant="top" src={imageUrl} alt={title} />
      )}
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {subtitle && (
          <BootstrapCard.Subtitle className="mb-2 text-muted">
            {subtitle}
          </BootstrapCard.Subtitle>
        )}
        {text && <BootstrapCard.Text>{text}</BootstrapCard.Text>}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Card;
