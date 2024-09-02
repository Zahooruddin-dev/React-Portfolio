import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Zahooruddin </span>
            from <span className="purple"> Hyderabad, Pakistan.</span>
            <br />
            I have been a freelancer since 2018 and learning Front-end Web Development in React.
            <br />
            I have completed High school (HSSC) in Maths and Computer science from AKU-EB.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching F1
            </li>
            <li className="about-activity">
              <ImPointRight /> analyzing lap times
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Failure is not the opposite of success it's just a part of it"{" "}
          </p>
          <footer className="blockquote-footer">Ariana Huffington</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
