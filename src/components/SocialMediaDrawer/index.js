import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContactUsDrawer } from "../../reducers/applicationService/applicationSlice";
import style from "./SocialMediaDrawer.module.css";
import SocialMediaComponent from "../SocialMediaComponent";
const SocialMediaDrawer = () => {
  const d = useDispatch();
  const open = useSelector(
    (state) => state.application.isContactUsDrawerOpened
  );
  const onClose = () => {
    d(setContactUsDrawer(false));
  };

  // Define a state variable to hold the width
  const [drawerWidth, setDrawerWidth] = useState(getDrawerWidth());

  // Define a function to dynamically set the width based on screen size
  function getDrawerWidth() {
    // Example: Set width to 100% for small screens and 50% for larger screens
    return window.innerWidth < 600
      ? "100vw"
      : window.innerWidth < 768
      ? "50%"
      : window.innerWidth < 992
      ? "250px"
      : "250px";
  }

  // Update the width when the window is resized
  useEffect(() => {
    function handleResize() {
      setDrawerWidth(getDrawerWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Drawer
      bodyStyle={{ padding: "0px" }}
      className={style.drawerBaseStyle}
      placement={"left"}
      closable={true}
      onClose={onClose}
      open={open}
      key={"left"}
      width={drawerWidth}
      closeIcon={<></>}
    >
      <SocialMediaComponent />
    </Drawer>
  );
};

export default SocialMediaDrawer;
