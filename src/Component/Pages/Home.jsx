import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Categories from "../Sliders/Categories";
import LiveDeal from "../Sliders/LiveDeal";

const Home = () => {
  return (
    <Container>
      <Row className="top-bottom-padding">
        <Col className="main-sale" md={6} xs={12}>
          <div className="fixdeals-wrapper ">
            <img
              src="https://baljeetbrar.github.io/design_one/images/livedeal1.webp"
              alt="Live Deal, "
              className="full-width"
            />
          </div>
        </Col>
        <Col className="live-deals-wrapper" md={6} xs={12}>
          <LiveDeal />
        </Col>
      </Row>
      <Row>
        <Col className="best-deals-wrapper">
          <div className="intro-tag-box d-flex justify-content-center ">
            <h1 className="primary-font text-bold">
              Best Online Deals, Free Stuff and Top Cashback Offers
            </h1>
            <span className="overlay-border-simple"></span>
          </div>
          <div className="best-online-deals-wrapper">
            <Categories />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
