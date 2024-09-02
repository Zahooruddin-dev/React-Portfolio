import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import random from '../../Assets/Projects/random-joke.png';
import emotion from '../../Assets/Projects/emotion.png';
import qr from '../../Assets/Projects/qr.png';
import passwordGen from '../../Assets/Projects/passwordGen.png';
import crop from '../../Assets/Projects/crop.png';
import Snap from '../../Assets/Projects/Snap.png';
import resturant from '../../Assets/Projects/resturant.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Snap}
							isBlog={false}
							title='Snap'
							description='A modern social media app to capture, share, and explore content, built with TypeScript, React, and Tailwind CSS. Offers seamless post creation, editing, and account management, all while providing a responsive and engaging user experience. Deployed on Vercel for fast and reliable access.'
							ghLink='https://github.com/Zahooruddin-dev/snapping'
							demoLink='https://snapped.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={passwordGen}
							isBlog={false}
							title='Password Generator'
							description='Random Joke Generator is a fun and interactive web app designed to fetch random jokes. Built with modern web technologies, it features a joke history, clipboard copying, and sharing options. The app also includes a theme toggling feature, allowing users to switch between light and dark modes.'
							ghLink='https://github.com/Zahooruddin-dev/Password-Generator-'
							demoLink='https://password-generator-beta-rust-14.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={resturant}
							isBlog={false}
							title='Resturant-Walk-the-wok'
							description='An interactive restaurant website designed for online booking and showcasing the unique dining experience at Walk the Wok. Built with JS, the site allows customers to view the menu, make reservations, and explore the ambiance through an engaging interface.'
							ghLink='https://github.com/Zahooruddin-dev/Resturant-Walk-the-wok'
							demoLink='https://walkthewok.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={crop}
							isBlog={false}
							title='Crop image'
							description=' A simple tool for cropping images. Allows users to select and adjust the crop area 
  with real-time preview. Ideal for resizing and preparing images for various layouts.'
							ghLink='https://github.com/Zahooruddin-dev/Crop-Image'
							demoLink='https://crop-image-flax.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={qr}
							isBlog={false}
							title='QR Code Generator'
							description='QR Generator
              A user-friendly web application for generating QR codes quickly and efficiently, built using React and popular libraries. Customize your QR codes with various options and download them for easy sharing.'
							ghLink='https://github.com/Zahooruddin-dev/QR-Generator-using-libraries-REACT'
							demoLink='https://qr-mizuka.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={random}
							isBlog={false}
							title='Random Joke Generator'
							description='A fun and interactive web application for generating random jokes. Users can fetch jokes, copy them to the clipboard, view a history of recent jokes, and share them via the Web Share API. The app also includes a theme toggle for light and dark modes.'
							ghLink='https://github.com/Zahooruddin-dev/Random-joke-'
							demoLink='https://joke-gamma.vercel.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
