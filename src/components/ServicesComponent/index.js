import React from "react";
import { Row, Col } from "antd";

const ServicesComponent = ({ style }) => {
  return (
    <Row gutter={[16, 16]} justify="space-around" style={{ ...style }}>
      <Col span={8}>
        <div>
          <div>Online classes</div>
        </div>
      </Col>

      <Col span={8}>
        <div>
          <div> Workshops</div>
        </div>
      </Col>
      <Col span={8}>
        <div>
          <div>Art Purchases</div>
        </div>
      </Col>
    </Row>
  );
};

export default ServicesComponent;
