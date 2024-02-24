import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Avatar, Modal, Tooltip, Tour } from "antd";
import { MdOutlineMusicNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { trackVisitedPage } from "../../reducers/applicationService/applicationSlice";
import { POSTER } from "../../images";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MusicContainer = styled.div`
  /* Styles for the container */
`;

const MusicComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const visitedPages = useSelector((state) => state.application.visitedPages);

  const handleAlertClose = () => {
    dispatch(trackVisitedPage("/home"));
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const ref1 = useRef(null);
  const { t } = useTranslation();

  const [open, setOpen] = useState(false); // Start the tour by default
  const steps = [
    {
      title: t("The Harmony Hub: Introducing Our Music Player Component"),
      description: t(
        "The Music Player component is a delightful addition to Palamino's e-commerce web app, showcasing his profound love for music, particularly blues and jazz. This component allows users to immerse themselves in the soothing sounds of Palamino's favorite genres while browsing, painting, or simply enjoying the ambiance. With a simple click on the music icon, users can toggle the music on or off, giving them full control over their audio experience. Whether you're exploring Palamino's latest artwork, shopping for paintings, or chatting with the artist, the Music Player adds a touch of harmony to your journey. Plus, for those who prefer a quieter browsing experience, the option to deactivate the sound is just a click away, providing a customizable and enjoyable user experience."
      ),
      cover: <img alt="tour.png" src={POSTER} />,
      target: () => ref1.current,
    },
  ];
  useEffect(() => {
    const delay = setTimeout(() => {
      if (!visitedPages.includes("/home")) {
        setOpen(true);
        handleAlertClose();
      }
    }, 2000); // Adjust the delay time as needed (in milliseconds)

    return () => clearTimeout(delay); // Clear the timeout to avoid memory leaks
  }, [visitedPages]);

  return (
    <>
      <span
        ref={ref1}
        style={{
          transform: "translate(100%,-25%)",
          position: "absolute",
          right: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        <Tooltip title="Palamino invites you to immerse yourself in the world of blues and jazz music while exploring our web app. Feel free to deactivate this option if you prefer">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <Avatar
              shape="square"
              size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
              icon={<MdOutlineMusicNote />}
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                showModal();
              }}
            />
          </motion.div>

          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Tooltip>
      </span>
      <Tour
        placement={"right"}
        key={open} // Add key to force re-rendering
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        disabledInteraction
      />
    </>
  );
};

export default MusicComponent;
