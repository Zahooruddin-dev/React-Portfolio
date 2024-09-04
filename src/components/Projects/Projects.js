import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import random from '../../Assets/Projects/random-joke.png';
import tenzies from '../../Assets/Projects/tenzies.png';
import qr from '../../Assets/Projects/qr.png';
import passwordGen from '../../Assets/Projects/passwordGen.png';
import crop from '../../Assets/Projects/crop.png';
import Snap from '../../Assets/Projects/Snap.png';
import resturant from '../../Assets/Projects/resturant.png';
import typing from '../../Assets/Projects/typing.png';
import randomPicker from '../../Assets/Projects/randomPicker.png';
import ChromeExtension from '../../Assets/Projects/ChromeExtension.png';
import ticTacToe from '../../Assets/Projects/tik-tok-tak.png';
import keep from '../../Assets/Projects/keep.png';
import meme from '../../Assets/Projects/meme-maker.png';
import scrollProject from '../../Assets/Projects/scroll.png';
import mern from '../../Assets/Projects/mern-blog.png';
import gym from '../../Assets/Projects/gym.png';
import wiki from '../../Assets/Projects/wiki.png';

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
							imgPath={scrollProject}
							isBlog={false}
							title='Scroll Page'
							description='A simple one page Scroll Web App with useabiltiy in mind.'
							ghLink='https://github.com/Zahooruddin-dev/Scroll-Page-querySelector-PRACTICE-JS-VANILA--project-future-Reuse'
							demoLink='https://scroll-one-page-js-vanila-project-future-reuse.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={gym}
							isBlog={false}
							title='Mizuka Workout geneartor'
							description='React web app where you can genearte a workout according to your needs after answering all the questions we need to generate those work outs for you.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Gym-React'
							demoLink='https://mizuka-gym-react.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={typing}
							isBlog={false}
							title='Typing Website'
							description='A simple typing website that I was made while my Go to site monkeyType was down using Vanila JS. '
							ghLink='https://github.com/Zahooruddin-dev/Typing-game?tab=readme-ov-file'
							demoLink='https://mizukatype.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Search'
							description='A site made using wikipedia API to search Wikipedia articles and stuff easily'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://vercel.com/zahooruddindevs-projects/wikipedia-search-js-vanila'
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
							imgPath={tenzies}
							isBlog={false}
							title='T E N Z I E S'
							description='React Implementation This is a web-based version of the classic dice game, Tenzies, built using React. The objective of the game is to roll ten dice until they all show the same number. Players can hold specific dice between rolls to strategically match all dice as quickly as possible.'
							ghLink='https://github.com/Zahooruddin-dev/Tenzies-REACT'
							demoLink='https://tenzies-react-phi.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mern}
							isBlog={false}
							title='MERN BLOG APP'
							description='A simple MERN blog web app for learning'
							ghLink='https://github.com/Zahooruddin-dev/MERN-Blog'
							demoLink='https://mern-blog-five-rho.vercel.app/add-blog'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={randomPicker}
							isBlog={false}
							title='Random Picker'
							description='A site that I made so we could randomly pick between three choices and not have to think about it.'
							ghLink='https://github.com/Zahooruddin-dev/Random-picker'
							demoLink='https://random-picker-five.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={ticTacToe}
							isBlog={false}
							title='Tik Tac Toe'
							description='A simple web app game Tic tac toe which is clean and easily playable on both mobile and PC'
							ghLink='https://github.com/Zahooruddin-dev/ticktok'
							demoLink='https://ticktoking.netlify.app/'
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
							imgPath={ChromeExtension}
							isBlog={false}
							title='Chrome Extension'
							description='A input taker and current tab copy extension and storing it in local storage'
							ghLink='https://github.com/Zahooruddin-dev/Chrome-extenesion'
							demoLink='https://chrome-extenesion.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={meme}
							isBlog={false}
							title='Meme Maker'
							description='You can genearte meme Images by genearting new pictures and putting top and bottom Text.'
							ghLink='https://github.com/Zahooruddin-dev/meme-generaor'
							demoLink='https://meme-generaor.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={keep}
							isBlog={false}
							title='K E E P '
							description='A simple notes app'
							ghLink='https://github.com/Zahooruddin-dev/GoogleKeepNotes-Vanila-JS-Practice'
							demoLink='https://google-keep-notes-vanila-js-practice.vercel.app/'
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
