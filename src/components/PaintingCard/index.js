// PaintingCard.jsx
import React from "react";
import styles from "./PaintingCard.module.css";

const PaintingCard = ({ imageSrc, title, numPaintings }) => {
  const cardWidth = `${100 / numPaintings}%`; // Calculate the width dynamically

  return (
    <div className={styles.card} style={{ flex: `0 0 ${cardWidth}` }}>
      <img src={imageSrc} alt={title} className={styles.image} />
    </div>
  );
};

export default PaintingCard;
