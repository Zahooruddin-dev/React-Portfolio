import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiUnity,
  SiGithub,
  SiChatbot,
  SiScrimba,
  SiStackoverflow,
  SiGoogle,
  SiMozilla,
  SiGamedeveloper,
  SiMdnwebdocs,
  SiNetlify,
  SiRender,
  SiGmail
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     {/*  <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
 
      
   
    
            <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGamedeveloper />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMdnwebdocs />
      </Col><Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScrimba />
      </Col> <Col xs={4} md={2} className="tech-icons">
        <SiChatbot />
      </Col> 
    <Col xs={4} md={2} className="tech-icons">
        <SiGmail />
      </Col>    
      
      
    </Row>
  );
}

export default Toolstack;
