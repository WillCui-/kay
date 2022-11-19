import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import Resume from "../../assets/resume.pdf";

const Experience = React.forwardRef(
  ({ experiences }, ref) => {
    return (
      <section className="section">
        <Container>
          <Jumbotron id="experiences" className="bg-white">
            <h2 ref={ref} className="display-4 mb-5 text-center">
              {experiences.heading}
            </h2>
            <p className="text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={Resume}
                target="_blank"
                rel="noreferrer"
                role="button"
                aria-label="Resume Download">
                Download Resume
              </a>
            </p>
            <Row>
              {
                experiences.data.map((data, index) => {
                  return <ExperienceCard key={index} data={data} />
                })
              }
            </Row>
          </Jumbotron>
        </Container>
      </section>
    );
  }
);

export default Experience;