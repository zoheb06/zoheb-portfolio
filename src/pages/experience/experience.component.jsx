import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import SSS from "../../assets/img/experience/sss.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={SSS} alt="SSS logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"> Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Role:</strong> Developer & Production Support
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems. Also worked as <strong>Production Support</strong> providing system maintenance, performing CRUD operations on databases along with extensive support during Critical Care Period.
                    <br />
                    <strong>Technology:</strong> PHP, Javascript and MYSQL
                    <br />
                    <strong>Duration:</strong> June 2019 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
