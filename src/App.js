import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Custom components
import Navbar from "./components/Navbar"; // Custom navbar component
import SocialMediaDrawer from "./components/SocialMediaDrawer"; // Custom social media drawer component

// Utility functions and configurations
import { loadFonts, loadImages } from "./services/functions/functions"; // Utility functions for loading fonts and images
import { FontsConfig } from "./fontsConfig"; // Configuration for fonts
import ImageConfig from "./config.dev"; // Configuration for images

// Material Design icons
import { MdDeveloperMode } from "react-icons/md";

// Ant Design components
import { FloatButton, ConfigProvider, Spin } from "antd";
import frFR from "antd/locale/fr_FR"; // French locale for Ant Design
import enUS from "antd/locale/en_US"; // English locale for Ant Design

// Styling
import "./App.css"; // CSS styles for the App component
import HomeContainer from "./pages/Home";

function App() {
  const browserLanguage = navigator.language.split("-")[0];

  //__HOOKS
  const [appIsReady, setAppIsReady] = useState(false);
  const [locale, setLocale] = useState(browserLanguage === "fr" ? frFR : enUS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadFonts(FontsConfig), loadImages(ImageConfig)]);
        setAppIsReady(true);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    setLocale(browserLanguage === "fr" ? frFR : enUS);
  }, [browserLanguage]);

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
    <ConfigProvider locale={locale}>
      <div className="App">
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${browserLanguage}/home`} />}
            />
            {/* English routes */}
            <Route path="/en/home" element={<HomeContainer />} />
            {/* French routes */}
            <Route path="/fr/home" element={<HomeContainer />} />{" "}
          </Routes>
        </BrowserRouter>
        <ConfigProvider
          theme={{
            components: {
              Drawer: {
                padding: "0px",
              },
            },
          }}
        >
          <SocialMediaDrawer />
        </ConfigProvider>
        <FloatButton.Group shape="circle" style={{ right: 24 }}>
          <FloatButton icon={<MdDeveloperMode />} />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
      </div>
    </ConfigProvider>
  );
}

export default App;
