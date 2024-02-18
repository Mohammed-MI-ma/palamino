import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FullHeightComponent from "../FullHeightComponent";
import { IMAGE_1, MEKKI } from "../../images";
import { Button, Carousel, ConfigProvider, Image, Tooltip } from "antd";
import style from "./HeroSection.module.css";

import { IoIosArrowDown } from "react-icons/io";
import ButtonShadowed from "../Button";

const HeroSection = () => {
  const slideStyle = {
    height: "calc(100vh - 4.0625rem)",
    color: "white",
    display: "flex",
    position: "relative",
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            colorBgContainer: "black",
          },
        },
      }}
    >
      <Carousel dotPosition="right" easing autoplaySpeed={6000} autoplay>
        <div style={{ height: "calc(100vh - 4.0625rem)" }}>
          <div style={slideStyle}>
            <div
              className={style.leftContainer}
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip placement="topRight" title={"text"}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    fontFamily: "MontserratSemiBold",
                    fontSize: "12px",
                    transform: `rotate(90deg) translate( calc(0% - 4.0625rem), -50%) `, // Adjusted transform to center vertically
                    transformOrigin: "bottom left", // Changing the pivot point to bottom left
                    color: "white",
                  }}
                >
                  CONTACTEZ NOUS{" "}
                  <span
                    style={{
                      position: "absolute",
                      transform: "translate(10%,-50%) ",
                      color: "white",
                      borderBottom: "3px solid white",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>{" "}
              </Tooltip>
            </div>

            <div className={style.rightContainer}></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                color: "black",
                zIndex: 29999,
                top: "50%",
                display: "flex",
                left: "50%",
                gap: "25vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: "translate(-50%,-50%)",
                fontFamily: "MontserratSemiBold",
              }}
            >
              <Image src={MEKKI} preview={false}></Image>
              <motion.span
                initial={{ opacity: 0, scale: 0, y: -100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Button
                  type="primary"
                  shape="circle"
                  style={{ background: "black", maxWidth: "32px" }}
                >
                  <IoIosArrowDown />
                </Button>{" "}
              </motion.span>

              <button
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              ></button>
              <ButtonShadowed
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              >
                {" "}
                Explorer maintenant
              </ButtonShadowed>
            </motion.div>
          </div>
        </div>
        <div style={{ height: "calc(100vh - 4.0625rem)" }}>
          <div style={slideStyle}>
            <div
              className={style.leftContainer}
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip placement="topRight" title={"text"}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    fontFamily: "MontserratSemiBold",
                    fontSize: "12px",
                    transform: `rotate(90deg) translate( calc(0% - 4.0625rem), -50%) `, // Adjusted transform to center vertically
                    transformOrigin: "bottom left", // Changing the pivot point to bottom left
                    color: "white",
                  }}
                >
                  CONTACTEZ NOUS{" "}
                  <span
                    style={{
                      position: "absolute",
                      transform: "translate(10%,-50%) ",
                      color: "white",
                      borderBottom: "3px solid white",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>{" "}
              </Tooltip>
            </div>

            <div className={style.rightContainer}></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                color: "black",
                zIndex: 29999,
                top: "50%",
                display: "flex",
                left: "50%",
                gap: "25vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: "translate(-50%,-50%)",
                fontFamily: "MontserratSemiBold",
              }}
            >
              <Image src={MEKKI} preview={false}></Image>
              <motion.span
                initial={{ opacity: 0, scale: 0, y: -100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Button
                  type="primary"
                  shape="circle"
                  style={{ background: "black", maxWidth: "32px" }}
                >
                  <IoIosArrowDown />
                </Button>{" "}
              </motion.span>

              <button
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              ></button>
              <ButtonShadowed
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              >
                {" "}
                Explorer maintenant
              </ButtonShadowed>
            </motion.div>
          </div>
        </div>
        <div style={{ height: "calc(100vh - 4.0625rem)" }}>
          <div style={slideStyle}>
            <div
              className={style.leftContainer}
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip placement="topRight" title={"text"}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    fontFamily: "MontserratSemiBold",
                    fontSize: "12px",
                    transform: `rotate(90deg) translate( calc(0% - 4.0625rem), -50%) `, // Adjusted transform to center vertically
                    transformOrigin: "bottom left", // Changing the pivot point to bottom left
                    color: "white",
                  }}
                >
                  CONTACTEZ NOUS{" "}
                  <span
                    style={{
                      position: "absolute",
                      transform: "translate(10%,-50%) ",
                      color: "white",
                      borderBottom: "3px solid white",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>{" "}
              </Tooltip>
            </div>

            <div className={style.rightContainer}></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                color: "black",
                zIndex: 29999,
                top: "50%",
                display: "flex",
                left: "50%",
                gap: "25vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: "translate(-50%,-50%)",
                fontFamily: "MontserratSemiBold",
              }}
            >
              <Image src={MEKKI} preview={false}></Image>
              <motion.span
                initial={{ opacity: 0, scale: 0, y: -100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Button
                  type="primary"
                  shape="circle"
                  style={{ background: "black", maxWidth: "32px" }}
                >
                  <IoIosArrowDown />
                </Button>{" "}
              </motion.span>

              <button
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              ></button>
              <ButtonShadowed
                style={{
                  border: "1px solid black",
                  position: "absolute",
                  right: "-20px",
                  bottom: "12.5vh",
                }}
              >
                Explorer maintenant
              </ButtonShadowed>
            </motion.div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </ConfigProvider>
  );
};

export default HeroSection;
