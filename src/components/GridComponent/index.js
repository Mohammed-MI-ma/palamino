// GridComponent.jsx
import React from "react";
import PaintingCard from "../PaintingCard";
import styles from "./GridComponent.module.css";

const GridComponent = ({ paintings, style }) => {
  // Calculate the maximum number of cards that can fit within the screen width
  const maxCards = Math.floor(window.innerWidth / 200); // Assuming each card has a width of 200px

  // Slice the paintings array to get the subset of paintings to display
  const displayedPaintings = paintings.slice(0, maxCards);

  return (
    <div className={styles.gridContainer} style={{ ...style }}>
      <div className={styles.grid}>
        {displayedPaintings.map((painting) => (
          <PaintingCard
            key={painting.id}
            imageSrc={painting.imageSrc}
            title={painting.title}
          />
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
