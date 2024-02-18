import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Spin } from "antd";
import { CiSettings } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaRegFrownOpen } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { FloatButton } from "antd";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { loadFonts, loadImages } from "./services/functions/functions";
import ImageConfig from "./config.dev";
import { FontsConfig } from "./fontsConfig";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import PaintingsComponent from "./components/PaintingsComponent";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([loadFonts(FontsConfig), loadImages(ImageConfig)]);
        setAppIsReady(true);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        setLoading(false);
      }
    }

    prepare();
  }, []);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  if (!appIsReady) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" visible={loading} overlayColor="white" fullscreen />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />

      <HeroSection />

      <div
        style={{
          height: "650px",
          width: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
      {/*
      <Modal
        title={<CiSettings size={24} />}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={
          <div className="modal-button">
            <VscAccount />
            <span>{t("CreateNewAccount")}</span>
          </div>
        }
        cancelText={
          <div className="modal-button">
            <FaRegFrownOpen />
            <span>{t("NoThanks")}</span>
          </div>
        }
      >
        <p style={{ fontFamily: "var(--font-primary)" }}>
          {t("modalContentSettingOffline")}
        </p>
      </Modal>*/}
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<MdDeveloperMode />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  );
}

export default App;
