import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { CiSettings } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaRegFrownOpen } from "react-icons/fa";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { MdDeveloperMode } from "react-icons/md";
import { FloatButton } from "antd";
function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);

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

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Modal
        title={<CiSettings size={24} />}
        visible={open}
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
      </Modal>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<MdDeveloperMode />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  );
}

export default App;
