import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import random from '../../Assets/Projects/random-joke.png';
import yt from '../../Assets/Projects/yt.jpg';
import photographer from '../../Assets/Projects/photographer.jpg';
import passwordGen from '../../Assets/Projects/passwordGen.png';
import crop from '../../Assets/Projects/crop.jpg';
import mizua from '../../Assets/Projects/mizua.jpg';
import resturant from '../../Assets/Projects/resturant.png';
import foam from '../../Assets/Projects/foramexperts.jpg';
import dashboard from '../../Assets/Projects/dashboard.png';
import czech from '../../Assets/Projects/czech-cafe.jpg';
import grower from '../../Assets/Projects/grower.jpg';
import Mizs from '../../Assets/Projects/mizscribe.png';
import sweeps from '../../Assets/Projects/sweeps.png';
import wiki from '../../Assets/Projects/wiki.png';
import mizukatypes from '../../Assets/Projects/mizuka-types.png';
import gem from '../../Assets/Projects/gem.png';
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
							imgPath={foam}
							isBlog={false}
							title='Foam Experts'
							description='Developed a comprehensive service and appointment booking platform using React.js, focusing on user-centric design and functionality. Features included dynamic service packages, seamless appointment scheduling, and an intuitive service home interface. Integrated responsive design principles, ensuring accessibility across all devices. Leveraged React hooks and styled-components for modular, maintainable code. Enhanced user experience with persistent settings, real-time updates, and streamlined navigation, delivering a sleek and efficient solution for service-based businesses.'
							ghLink='https://github.com/Zahooruddin-dev/FoamexDetaliing'
							demoLink='https://foamex-detaliing.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizukatypes}
							isBlog={false}
							title='Mizuka Types '
							description='Developed a Typing Web Application using ReactJS, featuring advanced functionality through Custom Hooks and Styled-components. Integrated persistent settings with Local Storage, allowing users to customize themes, access multiple game modes (word, sentence, free typing), and participate in timed challenges ranging from 15 to 90 seconds. Enhanced the user experience by adding Ultra-Zen Mode and Focused Mode for distraction-free typing sessions, ensuring a sleek, responsive design for all devices.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizua}
							isBlog={false}
							title='M I Z U A'
							description='Developed a dynamic landing page for Mizua Restaurant using React.js, emphasizing a user-friendly design and interactive features. The platform included a seamless table reservation system with a pop-up modal for booking, providing real-time table availability updates. The responsive design ensured an optimal user experience across devices, while leveraging React hooks and styled-components for maintainable, scalable code. The application offers an efficient, visually appealing solution for restaurant booking, with a clean layout, easy navigation, and accessible features tailored to customers needs.'
							ghLink='https://github.com/Zahooruddin-dev/mizua'
							demoLink='https://mizua.vercel.app//'
						/>
					</Col>
			
		{' '}
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={photographer}
							isBlog={false}
							title='Photographer'
							description='Developed a modern photographer portfolio and booking platform using React.js, emphasizing a visually appealing and user-friendly experience. Features included an interactive "About Me" section, a dynamic portfolio showcasing photography projects, and seamless "Contact Me" and "Hire Me" pages. Integrated responsive design principles to ensure the site is fully functional and visually appealing on all devices. Leveraged React hooks and styled-components to create modular and maintainable code. Enhanced user experience with intuitive navigation, persistent user preferences, and real-time appointment booking, delivering a polished and professional platform tailored for photographers.'
							ghLink='https://github.com/Zahooruddin-dev/Photographer'
							demoLink='https://photographer-bay-alpha.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Mizs}
							isBlog={false}
							title='MizScribe'
							description='Developed a cutting-edge web-based transcription and translation app using ReactJS, featuring fully local AI-powered speech processing. Implemented web workers to run machine learning models directly in the browser, enabling real-time transcription and multilingual translation without external servers or APIs. Designed an intuitive recording and file upload system, allowing users to convert audio into text seamlessly. Ensured complete user privacy by keeping all processing on-device. Optimized React’s state management for efficient handling of audio data and dynamic interactions, delivering a fast, secure, and fully offline transcription experience.'
							ghLink='https://github.com/Zahooruddin-dev/Mizscribe'
							demoLink='https://mizscribe.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={czech}
							isBlog={false}
							title='Czech Cafe'
							description='Built a sleek and user-friendly platform for a Czech café, focusing on showcasing the menu and providing a smooth user experience. Designed with modern web technologies to support features like an interactive menu display and an optional ordering system (added upon client request). To avoid spam orders, the demo version in my portfolio does not include an active ordering system. Ensured responsive design for accessibility across all devices while maintaining a polished, professional aesthetic'
							ghLink='https://github.com/Zahooruddin-dev/Czech-Cafe'
							demoLink='https://czech-cafe.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={yt}
							isBlog={false}
							title='YT Service Provider'
							description='Developed a visually captivating showcase website for a YouTube service provider specializing in Minecraft-themed designs and branding solutions. Built with a focus on clean aesthetics and intuitive navigation to highlight the range of services offered. The platform serves as a portfolio, showcasing past projects and creative capabilities, while ensuring a seamless browsing experience. Emphasized responsive design to cater to diverse devices and audiences, creating an engaging and professional digital presence tailored to attract content creators and gaming enthusiasts.'
							ghLink='https://github.com/Zahooruddin-dev/Clinet-Portfolio-'
							demoLink='https://clinet-portfolio.vercel.app/'
						/>
					</Col>
					{/* <Col md={4} className='project-card'>
						<ProjectCard
							imgPath={sweeps}
							isBlog={false}
							title='Fresh Sweep'
							description='Built a sleek and user-friendly platform, Fresh Sweep, utilizing modern web technologies to offer cleaning services with ease. Designed to allow users to book appointments and make direct calls, providing a seamless and intuitive experience. Integrated a fully functional form powered by EmailJS to handle service inquiries efficiently. Focused on responsive design and clean aesthetics to ensure accessibility across all devices. Emphasized usability and polished functionality to cater to a wide audience while maintaining a professional and approachable interface.'
							ghLink='https://github.com/Zahooruddin-dev/Clean-Dream'
							demoLink='https://clean-dream.vercel.app/'
						/>
					</Col> */}
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={grower}
							isBlog={false}
							title='G R O W E R'
							description='Developed an elegant and responsive React-based platform to showcase consulting services for growers. Designed to streamline appointment scheduling and provide essential resources for clients. Integrated a user-friendly interface with features like a dynamic booking form powered by EmailJS for inquiries and seamless communication. Emphasized intuitive navigation, clean aesthetics, and cross-device compatibility to ensure accessibility and a professional user experience. Focused on delivering a polished and approachable digital presence tailored to the needs of the consulting company.'
							ghLink='https://github.com/Zahooruddin-dev/Grower'
							demoLink='https://grower-sandy.vercel.app/'
						/>
					</Col>
					*/
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={dashboard}
							isBlog={false}
							title='Dashboard UI'
							description='Built a sleek and modern Admin Dashboard using ReactJS and CSS, focusing on creating reusable components and intuitive design. Implemented key data management features using Reacts state and props, allowing for dynamic updates without the need for complex libraries. Designed the interface to be fully responsive, ensuring accessibility across devices. Emphasized a beginner-friendly approach while maintaining a professional and polished look through well-structured components and efficient CSS styling techniques.'
							ghLink='https://github.com/Zahooruddin-dev/Dashbaord-React'
							demoLink='https://dashbaord-react-three.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={resturant}
							isBlog={false}
							title='Walk the wok'
							description='Crafted an interactive and visually appealing restaurant website for Walk the Wok, designed to enhance the online booking experience and showcase the unique dining ambiance. Built using JavaScript, the platform features a dynamic menu display, reservation options, and an engaging interface that immerses customers in the restaurants vibe. Focused on providing a seamless user experience, with intuitive navigation and responsive design, ensuring accessibility across all devices. Highlighted the brands identity by combining aesthetics with functionality, making it easy for customers to explore the offerings and secure their reservations effortlessly.'
							ghLink='https://github.com/Zahooruddin-dev/Resturant-Walk-the-wok'
							demoLink='https://walkthewok.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={crop}
							isBlog={false}
							title='Aspect Ratio Editor'
							description=' Developed an image crop generator that provides users with a robust tool for cropping images. Implemented using JavaScript and modern web technologies, the tool offers intuitive cropping functionality with real-time previews. Features include adjustable crop areas, aspect ratio settings, and dynamic resizing. Enhanced user experience with responsive design and smooth performance, ensuring effective image editing across various devices.'
							ghLink='https://github.com/Zahooruddin-dev/Crop-Image'
							demoLink='https://crop-image-flax.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Simplified'
							description='Developed a dynamic web application enabling users to search Wikipedia in multiple languages, including English, Spanish, French, German, Italian, Portuguese, Arabic, and Urdu. The application enhances the search experience with features such as autocomplete suggestions, search history, and popular search queries, ensuring a user-friendly and efficient interface for multilingual searches.'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://wikipedia-search-js-vanila.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={gem}
							isBlog={false}
							title='G E M I N I'
							description='
								GEMINI Clone is a React-based web app that simulates content generation using the Gemini API. With secure authentication and a login page, users can generate text, view recent responses, and save results locally for easy access. The app offers a seamless and responsive user experience across devices. Deployed on Vercel for reliability, GEMINI Clone efficiently handles real-time requests with robust error management and local storage integration, ensuring both performance and scalability.'
							ghLink='https://github.com/Zahooruddin-dev/Gemini-React'
							demoLink='https://mizukagemini.vercel.app/'
						/>
					</Col>
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={reactPorjects}
							isBlog={false}
							title='Multi Project'
							description='Developed an interactive React project that features a collection of UI components to enhance user experience. Utilized JavaScript and React for dynamic state management and responsive design across devices. Key components include a counter, accordion, tabs, modal dialogs, filterable galleries, and sticky headers. Implemented intuitive navigation and user-friendly buttons for actions like loading more content and returning to the top of the page. This project demonstrates advanced React techniques and serves as a practical resource for creating engaging web applications.'
							ghLink='https://github.com/Zahooruddin-dev/React.js-Projects-Singal-pade'
							demoLink='https://vercel.live/link/react-js-projects-singal-pade.vercel.app?via=project-dashboard-alias-list&p=1'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mp3}
							isBlog={false}
							title='YT music downloader'
							description='This is a web-based version of the classic Tenzies dice game, implemented using React. The goal of the game is to roll ten dice and match them all to the same number. Players can selectively hold certain dice between rolls, using strategy to reach the goal efficiently. The game provides real-time updates, a visually dynamic interface, and responsive design for an engaging user experience.'
							ghLink='https://github.com/Zahooruddin-dev/Youtube-Video-MP3-Converter-React'
							demoLink='https://mizukamp3.vercel.app/'
						/>
					</Col> */}
					{/* <Col md={4} className='project-card'>
						<ProjectCard
							imgPath={passwordGen}
							isBlog={false}
							title='Pass Encrypt '
							description='Developed a versatile password generator tool with customizable options for length, complexity, and character types. Utilized modern JavaScript for dynamic interactions and real-time password generation, ensuring user-friendly customization of passwords while adhering to best practices in security. Implemented robust error handling and validation to enhance user experience and reliability.'
							ghLink='https://github.com/Zahooruddin-dev/Password-Generator-'
							demoLink='https://password-generator-beta-rust-14.vercel.app/'
						/>
					</Col> */}
					{/* 
				}
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
