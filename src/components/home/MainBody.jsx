import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const TitleContent = React.forwardRef((props, ref) => {
  return (
    <Container className="text-center">
      <h1 ref={ref} className="display-1">
        {props.title}
      </h1>
      <Typist>
        <div className="lead typist">
          {props.message}
        </div>
      </Typist>
      <div className="p-5">
        {props.icons.map((icon, index) => (
          <a
            key={`social-icon-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.url}
            aria-label={`My ${icon.image.split("-")[1]}`}
          >
            <i className={`${icon.image}  fa-3x socialicons`} />
          </a>
        ))}
      </div>
      <a
        className="btn btn-outline-light btn-lg"
        href={process.env.PUBLIC_URL + "/#/about"}
        role="button"
        aria-label="Learn more about me"
      >
        More about me
      </a>
    </Container>
  )
});

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <>
        <Row>
          <Col lg={8}>
            <Jumbotron
              fluid
              id="home"
              style={{
                background: `linear-gradient(136deg,${gradient})`,
                backgroundSize: "1200% 1200%",
              }}
              className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
              <TitleContent
                title={title}
                message={message}
                icons={icons}
                ref={ref}
              />
            </Jumbotron>
          </Col>
          <Col className={`d-none d-lg-block px-5`} lg={4}>
            <Jumbotron
              fluid
              style={{ background: `white` }}
              className="title d-flex align-items-center"
            >
              <Carousel
                axis="vertical"
                autoPlay
                interval={5000}
                infiniteLoop
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
              >
                <div>
                  <img src={require("../../assets/img/vitamink/vk1.jpeg")} alt="" />
                </div>
                <div>
                  <img src={require("../../assets/img/vitamink/vk2.jpeg")} alt="" />
                </div>
                <div>
                  <img src={require("../../assets/img/vitamink/vk3.jpeg")} alt="" />
                </div>
              </Carousel>
            </Jumbotron>
          </Col>
        </Row>
        <Row className={`d-block d-lg-none`}>
          <Jumbotron
            fluid
            style={{ background: `white` }}
            className="title align-content-center align-items-center"
          >
            <Carousel
              axis="horizontal"
              autoPlay
              interval={1000}
              infiniteLoop
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
              <div>
                <img src={require("../../assets/img/vitamink/vk1.jpeg")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/img/vitamink/vk2.jpeg")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/img/vitamink/vk3.jpeg")} alt="" />
              </div>
            </Carousel>
          </Jumbotron>
        </Row>
      </>
    );
  }
);

export default MainBody;
