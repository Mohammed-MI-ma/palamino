import React from "react";
import style from "./FullHeightComponent.module.css"; // Import CSS file for styling

const FullHeightComponent = ({ children }) => {
  return <div className={style.fullHeight}>{children}</div>;
};

export default FullHeightComponent;
