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
import mizukatypes from '../../Assets/Projects/mizuka-types.png';

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
							imgPath={mizukatypes}
							isBlog={false}
							title='Mizuka Types 2.0'
							description='Mizuka Typing is an elegant and interactive typing experience built using React. The application offers multiple modes such as word typing, sentence typing, free typing, and more, with features like sound effects, focused mode, ultra-zen mode, and local storage persistence for user settings.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={passwordGen}
							isBlog={false}
							title='Password Generator'
							description='Developed a versatile password generator tool with customizable options for length, complexity, and character types. Utilized modern JavaScript for dynamic interactions and real-time password generation, ensuring user-friendly customization of passwords while adhering to best practices in security. Implemented robust error handling and validation to enhance user experience and reliability.'
							ghLink='https://github.com/Zahooruddin-dev/Password-Generator-'
							demoLink='https://password-generator-beta-rust-14.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={qr}
							isBlog={false}
							title='QR Code Generator'
							description='Built a QR code generator that enables users to create high-resolution, customizable QR codes. Leveraged JavaScript and third-party libraries to ensure dynamic generation and real-time previews. Included features for encoding various data types, such as URLs and plain text, and offered styling options to adjust color and size. Ensured seamless user experience with intuitive design and robust error handling.'
							ghLink='https://github.com/Zahooruddin-dev/QR-Generator-using-libraries-REACT'
							demoLink='https://qr-mizuka.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={gym}
							isBlog={false}
							title='Mizuka Workout geneartor'
							description='Developed the Mizuka Workout app to offer personalized workout plans and track fitness progress. Utilized JavaScript and React as well as a responsive design to ensure a seamless user experience across devices. Key features include dynamic workout schedules, real-time progress tracking, and intuitive user interface. Implemented data visualization for performance metrics and integrated motivational reminders to enhance user engagement.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Gym-React'
							demoLink='https://mizuka-gym-react.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Search'
							description='This dynamic web application allows users to search Wikipedia in multiple languages, providing an enhanced search experience with features like autocomplete suggestions, search history, and popular searches. The application supports various languages, including English, Spanish, French, German, Italian, Portuguese, Arabic, and Urdu.'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://wikipedia-search-js-vanila.vercel.app/'
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
							imgPath={random}
							isBlog={false}
							title='Random Joke Generator'
							description='Created a random joke generator using JavaScript and API integration. The application fetches jokes from a public API, ensuring a diverse range of humor. Users receive a new joke with each interaction, with smooth UI/UX and responsive design for an engaging experience. Implemented features include random joke retrieval, error handling, and user-friendly interface.'
							ghLink='https://github.com/Zahooruddin-dev/Random-joke-'
							demoLink='https://joke-gamma.vercel.app/'
						/>
					</Col>
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
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mern}
							isBlog={false}
							title='MERN BLOG APP'
							description='A simple MERN blog web app for learning'
							ghLink='https://github.com/Zahooruddin-dev/MERN-Blog'
							demoLink='https://mern-blog-five-rho.vercel.app/add-blog'
						/>
					</Col> */}{' '}
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={typing}
							isBlog={false}
							title='Typing Website'
							description='A simple typing website that I was made while my Go to site monkeyType was down using Vanila JS. '
							ghLink='https://github.com/Zahooruddin-dev/Typing-game?tab=readme-ov-file'
							demoLink='https://mizukatype.vercel.app/'
						/>
					</Col> */}
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={randomPicker}
							isBlog={false}
							title='Random Picker'
							description='A site that I made so we could randomly pick between three choices and not have to think about it.'
							ghLink='https://github.com/Zahooruddin-dev/Random-picker'
							demoLink='https://random-picker-five.vercel.app/'
						/>
					</Col> */}
					{/* 					<Col md={4} className='project-card'>
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
					</Col> */}
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={ChromeExtension}
							isBlog={false}
							title='Chrome Extension'
							description='A input taker and current tab copy extension and storing it in local storage'
							ghLink='https://github.com/Zahooruddin-dev/Chrome-extenesion'
							demoLink='https://chrome-extenesion.vercel.app/'
						/>
					</Col> */}
					{/* 
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={meme}
							isBlog={false}
							title='Meme Maker'
							description='You can genearte meme Images by genearting new pictures and putting top and bottom Text.'
							ghLink='https://github.com/Zahooruddin-dev/meme-generaor'
							demoLink='https://meme-generaor.vercel.app/'
						/>
					</Col> */}
					{/* <Col md={4} className='project-card'>
						<ProjectCard
							imgPath={keep}
							isBlog={false}
							title='K E E P '
							description='A simple notes app'
							ghLink='https://github.com/Zahooruddin-dev/GoogleKeepNotes-Vanila-JS-Practice'
							demoLink='https://google-keep-notes-vanila-js-practice.vercel.app/'
						/>
					</Col>
 */}
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={crop}
							isBlog={false}
							title='Crop image'
							description=' Developed an image crop generator that provides users with a robust tool for cropping images. Implemented using JavaScript and modern web technologies, the tool offers intuitive cropping functionality with real-time previews. Features include adjustable crop areas, aspect ratio settings, and dynamic resizing. Enhanced user experience with responsive design and smooth performance, ensuring effective image editing across various devices.'
							ghLink='https://github.com/Zahooruddin-dev/Crop-Image'
							demoLink='https://crop-image-flax.vercel.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
