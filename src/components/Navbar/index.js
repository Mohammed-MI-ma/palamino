import React, { useState } from "react";
import { Avatar, Switch, message } from "antd";
import { MdOutlineModeNight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import NavbarItems from "../NavbarItems";
import InternationalizationDropDown from "../InternationalizationDropDown";
import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { RxAvatar } from "react-icons/rx";
import { LOGO } from "../../images";
import { FaRegCopyright } from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation();

  // State to manage the switch checked status and message API
  const [isChecked, setIsChecked] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Function to handle switch toggle
  const onChange = (checked) => {
    // Configuration for the success message based on switch state
    const config = isChecked
      ? {
          content: "Mode sombre activé", // Message content for light mode
          rtl: true, // Right-to-left direction for message display
        }
      : {
          content: "Mode clair activé", // Message content for dark mode
          rtl: true, // Right-to-left direction for message display
        };

    // Show success message and update switch state
    messageApi.success(config);
    setIsChecked(checked);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        {/* Logo */}
        <div className={style.logo}>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            {" "}
            <span>
              {/* Add your logo here */}
              {t("brandTitle")}
              <sup>
                <FaRegCopyright size={10} />
              </sup>
            </span>
            <span style={{ fontSize: "10px" }}>
              {/* Add your logo here */}
              Unleash Your Creativity
            </span>
          </div>{" "}
          <div style={{ visibility: "hidden" }}>
            {" "}
            {/* Add your logo here */}
            {t("brandTitle")}
          </div>
        </div>
        <div
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* Navbar items */}
          <div className={style.navbarItems}>
            <NavbarItems />
          </div>
          {/* Tools section */}
          <div className={style.tools}>
            {/* Message context holder */}
            {contextHolder}
            {/* Switch component for toggling light/dark mode */}

            <Switch
              title="Toggle light/dark mode"
              onChange={onChange}
              checkedChildren={<CiLight size={"20px"} />}
              unCheckedChildren={<MdOutlineModeNight size={"20px"} />}
              checked={isChecked}
            />
            {/* Internationalization drop-down component */}
            <InternationalizationDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
