import React from "react";
import { Button } from "antd";
import classNames from "classnames/bind";
import style from "./ButtonShadowed.module.css";

const ButtonShadowed = ({ children, style: customStyle, ...rest }) => {
  const combinedStyles = {
    ...customStyle,
    boxShadow: "5px 5px 0px black", // Default shadow
    borderRadius: "0px",
  };

  return (
    <Button
      className={classNames(style.button, style.custom)}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonShadowed;
