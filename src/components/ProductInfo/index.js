import React from "react";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  QRCode,
  Rate,
  Row,
  Statistic,
} from "antd";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import CountUp from "react-countup";

import styles from "./ProductInfo.module.css";
import { motion } from "framer-motion";

const ProductInfo = () => {
  const { t } = useTranslation(); // Get the t function for translation
  const formatter = (value) => <CountUp end={value} separator="," />;
  const [text, setText] = React.useState("https://ant.design/");

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "var(--bs-body-font-size)",
            fontFamily: "var(--font-primary)",
          }}
        >
          Informations sur le chef-d'œuvre
        </div>
      </div>

      <div className={styles.productName}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "var(--bs-body-font-size)",
              fontFamily: "var(--font-primary)",
            }}
          >
            {t("productName")}
          </div>
        </div>

        <div>
          <Button
            type="primary"
            shape="circle"
            style={{ backgroundColor: "black" }}
          >
            <CiHeart size={"small"} />
          </Button>
          &nbsp;
          <Button
            type="primary"
            shape="circle"
            style={{ backgroundColor: "black" }}
          >
            <CiShoppingCart size={"small"} />
          </Button>
        </div>
      </div>

      <div className={styles.productDescription}>{t("productDescription")}</div>
      <div className={styles.productPricing}>
        <ConfigProvider
          theme={{
            // Your global tokens/theme configurations
            token: {
              // colorText: "white",
              //  colorTextDescription: "white",
              // Define your global tokens here
            },
          }}
        >
          <Statistic
            title="Prix en DIRHAM MAROCAIN (MAD)"
            value={t("productPricing")}
            precision={2}
            formatter={formatter}
          />{" "}
        </ConfigProvider>
      </div>

      <div className={styles.productStars}>
        <Rate
          defaultValue={5}
          disabled
          style={{ color: "white", scale: "0.75" }}
          allowHalf
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row
          gutter={[24, 24]}
          style={{ textAlign: "left", marginBottom: "12px" }}
        >
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Artist
            </div>
            <div
              style={{
                fontFamily: "MontserratRegular",
              }}
            >
              Palamino Mekki
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Dimensions
            </div>
            <div style={{ fontFamily: "MontserratRegular" }}>100 x 80 cm</div>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Row
          gutter={[24, 24]}
          style={{ textAlign: "left", marginBottom: "12px" }}
        >
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Medium{" "}
            </div>
            <div style={{ fontFamily: "MontserratRegular" }}>oil</div>
          </Col>
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Year of Creation{" "}
            </div>
            <div>2020</div>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Row
          gutter={[24, 24]}
          style={{ textAlign: "left", marginBottom: "12px" }}
        >
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Techniques
            </div>
            <div>brushwork, palette knife</div>
          </Col>
          <Col span={12}>
            <div
              style={{
                fontFamily: "MontserratRegular",
                borderBottom: "1px solid white",
              }}
            >
              Color Palette
            </div>
            <div>Blue, white, red, orange</div>
          </Col>
        </Row>
      </motion.div>
      <QRCode value={text || "-"} />
    </div>
  );
};

export default ProductInfo;
