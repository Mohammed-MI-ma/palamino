import React from "react";
import GridComponent from "../GridComponent";
import PaintingCard from "../PaintingCard";
import { IMAGE_1, IMAGE_3 } from "../../images";
const PaintingsComponent = ({ style }) => {
  // Sample data for painting cards
  const paintings = [
    { id: 1, imageSrc: IMAGE_3, title: "Landscape Painting" },
    { id: 2, imageSrc: IMAGE_3, title: "Portrait Painting" },
    { id: 3, imageSrc: IMAGE_3, title: "Landscape Painting" },

    { id: 1, imageSrc: IMAGE_3, title: "Landscape Painting" },
    { id: 2, imageSrc: IMAGE_3, title: "Portrait Painting" },

    // Add more painting data as needed
  ];

  return (
    <GridComponent paintings={paintings} style={style}>
      {paintings ? (
        paintings.map((painting) => (
          <PaintingCard
            key={painting.id}
            imageSrc={painting.imageSrc}
            title={""}
          />
        ))
      ) : (
        <p>No paintings found.</p>
      )}
    </GridComponent>
  );
};

export default PaintingsComponent;
