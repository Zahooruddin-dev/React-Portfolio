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
import dashboard from '../../Assets/Projects/dashboard.png';
import ChromeExtension from '../../Assets/Projects/ChromeExtension.png';
import ticTacToe from '../../Assets/Projects/tik-tok-tak.png';
import keep from '../../Assets/Projects/keep.png';
import meme from '../../Assets/Projects/meme-maker.png';
import scrollProject from '../../Assets/Projects/scroll.png';
import yoga from '../../Assets/Projects/yoga.png';
import sweeps from '../../Assets/Projects/sweeps.png';
import wiki from '../../Assets/Projects/wiki.png';
import mizukatypes from '../../Assets/Projects/mizuka-types.png';
import mp3 from '../../Assets/Projects/mp31.png';
import gem from '../../Assets/Projects/gem.png';
import reactPorjects from '../../Assets/Projects/react-projects.png';
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
							description='Developed a Typing Web Application using ReactJS, featuring advanced functionality through Custom Hooks and Styled-components. Integrated persistent settings with Local Storage, allowing users to customize themes, access multiple game modes (word, sentence, free typing), and participate in timed challenges ranging from 15 to 90 seconds. Enhanced the user experience by adding Ultra-Zen Mode and Focused Mode for distraction-free typing sessions, ensuring a sleek, responsive design for all devices.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={sweeps}
							isBlog={false}
							title='Fresh Sweep'
							description='Built a sleek and user-friendly platform, Fresh Sweep, utilizing modern web technologies to offer cleaning services with ease. Designed to allow users to book appointments and make direct calls, providing a seamless and intuitive experience. Integrated a fully functional form powered by EmailJS to handle service inquiries efficiently. Focused on responsive design and clean aesthetics to ensure accessibility across all devices. Emphasized usability and polished functionality to cater to a wide audience while maintaining a professional and approachable interface.'
							ghLink='https://github.com/Zahooruddin-dev/Clean-Dream'
							demoLink='https://clean-dream.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={dashboard}
							isBlog={false}
							title='Dashboard'
							description='Built a sleek and modern Admin Dashboard using ReactJS and CSS, focusing on creating reusable components and intuitive design. Implemented key data management features using Reacts state and props, allowing for dynamic updates without the need for complex libraries. Designed the interface to be fully responsive, ensuring accessibility across devices. Emphasized a beginner-friendly approach while maintaining a professional and polished look through well-structured components and efficient CSS styling techniques.'
							ghLink='https://github.com/Zahooruddin-dev/Dashbaord-React'
							demoLink='https://dashbaord-react-three.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={yoga}
							isBlog={false}
							title='Yoga Studio'
							description='Built a sleek and modern Yoga Studio website using ReactJS, designed to showcase services and create a serene user experience. Integrated a booking and contact form to facilitate easy scheduling and inquiries, powered by responsive and user-friendly components. Emphasized a calming and professional design aesthetic, ensuring accessibility across all devices. Utilized Reacts state and props to manage dynamic content effectively, creating a seamless and polished interface. Focused on delivering a functional yet elegant solution that reflects the tranquil nature of the studios offerings.'
							ghLink='https://github.com/Zahooruddin-dev/Yoga-Studio'
							demoLink='https://yoga-studio-pi.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={gem}
							isBlog={false}
							title='Gemini Clone (Login needed)'
							description='
								GEMINI Clone is a React-based web app that simulates content generation using the Gemini API. With secure authentication and a login page, users can generate text, view recent responses, and save results locally for easy access. The app offers a seamless and responsive user experience across devices. Deployed on Vercel for reliability, GEMINI Clone efficiently handles real-time requests with robust error management and local storage integration, ensuring both performance and scalability.'
							ghLink='https://github.com/Zahooruddin-dev/Gemini-React'
							demoLink='https://mizukagemini.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={reactPorjects}
							isBlog={false}
							title='Multi React Single Page Projects'
							description='Developed an interactive React project that features a collection of UI components to enhance user experience. Utilized JavaScript and React for dynamic state management and responsive design across devices. Key components include a counter, accordion, tabs, modal dialogs, filterable galleries, and sticky headers. Implemented intuitive navigation and user-friendly buttons for actions like loading more content and returning to the top of the page. This project demonstrates advanced React techniques and serves as a practical resource for creating engaging web applications.'
							ghLink='https://github.com/Zahooruddin-dev/React.js-Projects-Singal-pade'
							demoLink='https://vercel.live/link/react-js-projects-singal-pade.vercel.app?via=project-dashboard-alias-list&p=1'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mp3}
							isBlog={false}
							title='Youtube Video to MP3'
							description='This is a web-based version of the classic Tenzies dice game, implemented using React. The goal of the game is to roll ten dice and match them all to the same number. Players can selectively hold certain dice between rolls, using strategy to reach the goal efficiently. The game provides real-time updates, a visually dynamic interface, and responsive design for an engaging user experience.'
							ghLink='https://github.com/Zahooruddin-dev/Youtube-Video-MP3-Converter-React'
							demoLink='https://mizukamp3.vercel.app/'
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
							imgPath={crop}
							isBlog={false}
							title='Crop image'
							description=' Developed an image crop generator that provides users with a robust tool for cropping images. Implemented using JavaScript and modern web technologies, the tool offers intuitive cropping functionality with real-time previews. Features include adjustable crop areas, aspect ratio settings, and dynamic resizing. Enhanced user experience with responsive design and smooth performance, ensuring effective image editing across various devices.'
							ghLink='https://github.com/Zahooruddin-dev/Crop-Image'
							demoLink='https://crop-image-flax.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Search'
							description='Developed a dynamic web application enabling users to search Wikipedia in multiple languages, including English, Spanish, French, German, Italian, Portuguese, Arabic, and Urdu. The application enhances the search experience with features such as autocomplete suggestions, search history, and popular search queries, ensuring a user-friendly and efficient interface for multilingual searches.'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://wikipedia-search-js-vanila.vercel.app/'
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
					{/* 
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={random}
							isBlog={false}
							title='Random Joke Generator'
							description='Created a random joke generator using JavaScript and API integration. The application fetches jokes from a public API, ensuring a diverse range of humor. Users receive a new joke with each interaction, with smooth UI/UX and responsive design for an engaging experience. Implemented features include random joke retrieval, error handling, and user-friendly interface.'
							ghLink='https://github.com/Zahooruddin-dev/Random-joke-'
							demoLink='https://joke-gamma.vercel.app/'
						/>
					</Col> */}
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

		*/}
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
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
