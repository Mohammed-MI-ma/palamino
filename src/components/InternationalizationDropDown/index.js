import React from "react";
import { GrLanguage } from "react-icons/gr";
import { ReactSVG } from "react-svg";
import fr from "../../assets/images/fr.svg";
import gb from "../../assets/images/gb.svg";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Import the i18n instance to change the language

import style from "./InternationalizationDropDown.module.css"; // Import styles
import { Dropdown } from "antd";

const InternationalizationDropDown = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      icon: <ReactSVG src={gb} />,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {t("english")}
        </a>
      ),
    },
    {
      key: "2",
      icon: <ReactSVG src={fr} />,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          {t("french")}
        </a>
      ),
    },
  ];
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Dropdown.Button
      menu={menuProps}
      icon={<GrLanguage size={"16px"} style={{ cursor: "pointer" }} />}
    ></Dropdown.Button>
  );
};

export default InternationalizationDropDown;
