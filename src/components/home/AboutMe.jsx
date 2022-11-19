import React from "react";

import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { Jumbotron } from "./migration";

import Resume from "../../assets/resume.pdf";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const NavButtons = () => (
  <Row className="justify-content-md-center gap-3">
    <Col>
      <a
        className="btn btn-outline-dark btn-lg"
        href={process.env.PUBLIC_URL + "/#/experiences"}
        rel="noreferrer noopener"
        role="button"
        aria-label="Experiences">
        Experiences
      </a>
    </Col>
    <Col >
      <a
        className="btn btn-outline-dark btn-lg"
        href={process.env.PUBLIC_URL + "/#/projects"}
        rel="noreferrer noopener"
        role="button"
        aria-label="Projects">
        Projects
      </a>
    </Col>
    <Col>
      <a
        className="btn btn-outline-dark btn-lg"
        href={Resume}
        target="_blank"
        rel="noreferrer"
        role="button"
        aria-label="Resume Download">
        Resume
      </a>
    </Col>
  </Row >
);


const AboutMe = React.forwardRef(
  ({ heading, message, link, imgSize }, ref) => {
    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic, setShowPic] = React.useState(Boolean(link));

    React.useEffect(() => {
      const handleRequest = async () => {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try {
          const response = await axios.get(instaLink + link + instaQuery);
          setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
        } catch (error) {
          setShowPic(false);
          console.error(error.message);
        }
      };

      if (link && !pictureLinkRegex.test(link)) {
        handleRequest();
      } else {
        setProfilePicUrl(link);
      }
    }, [link]);

    return (
      <Row>
        <Col
          style={{ background: `#dddddd` }}
          className="d-none d-lg-block py-5" lg={5}
        >
          <Jumbotron
            fluid
            className="title bg-transparent min-vh-100 d-flex align-content-center align-items-center "
          >
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </Jumbotron>
        </Col>
        <Col className={`col-lg-${showPic ? "7" : "12"} px-3`}>
          <Jumbotron
            fluid
            className="bg-white m-0 min-vh-100 d-flex "
          >
            <h2 ref={ref} className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead pb-3 text-center">{message}</p>
            <div className="lead text-center">
              <NavButtons />
            </div>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
);

export default AboutMe;
