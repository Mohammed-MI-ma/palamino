import { Button, Flex } from "antd";
import React from "react";
import styled from "styled-components";
import { GiPaintBrush } from "react-icons/gi";
import RowSocialMedia from "../RowSocialMedia";

const Header = styled.header`
  position: relative;
  font-size: 16px;
  background-color: #008cb0;
  color: white;
  padding: 20px;
  font-family: var(--font-MontserratSemiBold);
`;

const TriangleFrame = styled.div`
  transform: scale(0.75);
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  width: calc(100%);
  height: calc(100%);
`;

const TriangleTop = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-bottom: 30px solid gold;
`;

const TriangleRight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;

  border-bottom: 30px solid transparent;
  border-left: 30px solid gold;
`;

const Footer = styled.footer`
  font-size: 16px;
  background-color: #008cb0;
  color: gold;
  padding: 35px;
  font-family: var(--font-MontserratSemiBold);
`;

const Body = styled.div`
  font-size: 16px;
  font-familly: var(--font-secondary);
  background: white;
  height: 100%;
`;

const SocialMediaComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "-webkit-fill-available",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Header>
        <div
          style={{ fontFamily: "var(--font-MontserratRegular)", margin: "0" }}
        >
          SOCIAL
        </div>
        <div style={{ fontSize: "40px", color: "gold" }}> MEDIA </div>
        <div>Palamino's</div>
        <TriangleFrame>
          <TriangleTop />
          <TriangleRight />
        </TriangleFrame>
      </Header>
      <Body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <RowSocialMedia />
        <RowSocialMedia />
        <RowSocialMedia />
      </Body>
      <Footer>
        <div>
          PALAMINO'S <GiPaintBrush color={"white"} />
        </div>
        <div
          style={{
            fontSize: "8px",
            color: "white",
            fontFamily: "var(--font-MontserratRegular)",
          }}
        >
          thank you for visiting our web application
        </div>
      </Footer>
    </div>
  );
};

export default SocialMediaComponent;
