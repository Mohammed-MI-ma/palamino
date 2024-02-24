import React, { useEffect, useRef } from "react";

//_ICONS

//_COMPONENTS
import HeroSection from "../../components/HeroSection";

const HomeContainer = () => {
  //_HOOKS

  //_USE_EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection handleButtonClick={handleButtonClick} />{" "}
      {/* Section beneath the hero section */}
      <div ref={sectionRef}>{/* Content of the section */}</div>
      <div
        ref={sectionRef}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
    </>
  );
};

export default HomeContainer;
