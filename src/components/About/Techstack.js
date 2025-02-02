import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
	DiJavascript1,
	DiReact,
	DiGit,
	DiCss3,
	DiHtml5,
} from 'react-icons/di';
import {
	SiFirebase,
	SiC,
	SiUnity,
	SiCsharp,
	SiGamedeveloper,
	SiFreelancer,
} from 'react-icons/si';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
			<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col> 
			<Col xs={4} md={2} className='tech-icons'>
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
        <SiFreelancer />
      </Col> 
			<Col xs={4} md={2} className='tech-icons'>
				<SiC />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiCsharp />
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<SiUnity />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiGamedeveloper />
			</Col>			<Col xs={4} md={2} className='tech-icons'>
				<DiGit />
			</Col>
		</Row>
	);
}

export default Techstack;
