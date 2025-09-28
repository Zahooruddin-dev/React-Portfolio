import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Aethos from '../../Assets/Projects/aethos.png';
import photographer from '../../Assets/Projects/photographer.jpg';
import mizua from '../../Assets/Projects/mizua.jpg';
import resturant from '../../Assets/Projects/resturant.jpg';
import foam from '../../Assets/Projects/foramexperts.jpg';
import dashboard from '../../Assets/Projects/dashboard.jpg';
import hair from '../../Assets/Projects/hair.png';
import Mizs from '../../Assets/Projects/mizscribe.jpg';
import MultiLLm from '../../Assets/Projects/multllm.png';
import wiki from '../../Assets/Projects/wiki.png';
import emp from '../../Assets/Projects/emp.png';
import mizukatypes from '../../Assets/Projects/mizuka-types.png';
import quizai from '../../Assets/Projects/quizai.webp';
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
							title='Mizuka Types'
							description='A React-based typing application designed to improve speed and accuracy through engaging practice modes and customizable experiences. It offers word, sentence, and free typing challenges with adjustable timers from 15–90 seconds, alongside Ultra-Zen and Focused Modes for distraction-free training. Users can personalize themes, track progress with persistent local settings, and enjoy a fully responsive design that adapts across devices. Built to combine productivity and fun, Mizuka Types supports both casual learners and serious typists seeking improvement.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={quizai}
							isBlog={false}
							title='Quiz AI'
							description='A SaaS quiz platform enabling teachers and students to create, share, and complete interactive quizzes. Teachers can upload text or PDFs to auto-generate MCQs, edit questions, and distribute online or as downloadable PDF/DOCX files. Features class sharing, instant grading, and a responsive design.'
							demoLink='https://quiz-mizuka.vercel.app/dashboard'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={MultiLLm}
							isBlog={false}
							title='MULTI LLM AI ASSISTANT'
							description='An AI platform built with React that seamlessly integrates multiple leading language models, including DeepSeek, OpenAI, Gemini, and Claude. Users can effortlessly switch between models, compare responses side by side, and analyze outputs in real time for greater insight. The system is designed with an intuitive interface, live updates, and a flexible architecture that supports experimentation, productivity, and research use cases. Built for developers, students, and AI enthusiasts alike, it provides a powerful environment to explore strengths of diverse LLMs.'
							ghLink='https://github.com/Zahooruddin-dev/MULTI-LLM-CHATBOT'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Aethos}
							isBlog={false}
							title='Aethos (Fusion AI Model)'
							description='An advanced chat application powered by the Fusion AI model, featuring multilingual support and context-aware responses. Integrates Firebase authentication with PDF generation capabilities. Built with React for optimal performance and user experience across devices.'
							ghLink='https://github.com/Zahooruddin-dev/Aethos'
							/* 							demoLink='https://clinet-portfolio.vercel.app/'
							 */
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={emp}
							isBlog={false}
							title='Emphatic Listner'
							description='An AI-powered empathetic chat platform using React.js and Google Gemini API. Features voice input/output, sentiment analysis, and quick commands for summarization. Includes customizable presets and local storage for chat history persistence.'
							ghLink='https://github.com/Zahooruddin-dev/Empathic-listener/tree/main'
							demoLink='https://empathic-listener-liard.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizua}
							isBlog={false}
							title='M I Z U A'
							description='A modern restaurant landing page built with React.js, featuring an interactive table reservation system and real-time availability updates. Implements styled-components and React hooks for a responsive, user-friendly dining experience.'
							ghLink='https://github.com/Zahooruddin-dev/mizua'
							demoLink='https://mizua.vercel.app//'
						/>
					</Col>{' '}
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={foam}
							isBlog={false}
							title='Foam Experts'
							description='A service booking platform developed in React.js with dynamic package selection and appointment scheduling. Features a responsive design, real-time updates, and streamlined navigation for efficient service management.'
							ghLink='https://github.com/Zahooruddin-dev/FoamexDetaliing'
							demoLink='https://foamex-detaliing.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={photographer}
							isBlog={false}
							title='Photographer'
							description='A photography portfolio and booking platform showcasing projects with seamless appointment scheduling. Built with React.js, featuring responsive design and interactive galleries. Includes contact forms and hiring options.'
							ghLink='https://github.com/Zahooruddin-dev/Photographer'
							demoLink='https://photographer-bay-alpha.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Mizs}
							isBlog={false}
							title='MizScribe'
							description='A browser-based transcription app using React.js and web workers for local AI processing. Supports real-time speech-to-text conversion and multilingual translation, ensuring complete privacy with offline functionality.'
							ghLink='https://github.com/Zahooruddin-dev/Mizscribe'
							demoLink='https://mizscribe.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Simplified'
							description='A multilingual Wikipedia search application supporting eight languages. Features autocomplete suggestions, search history tracking, and popular queries display. Built with vanilla JavaScript for optimal performance.'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://wikipedia-search-js-vanila.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={dashboard}
							isBlog={false}
							title='Dashboard UI'
							description='A modern admin dashboard built with React.js, featuring reusable components and responsive design. Implements state management for dynamic updates and clean CSS styling for professional presentation.'
							ghLink='https://github.com/Zahooruddin-dev/Dashbaord-React'
							demoLink='https://dashbaord-react-three.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={resturant}
							isBlog={false}
							title='Walk the wok'
							description='An interactive restaurant website built with JavaScript, featuring dynamic menu displays and online reservations. Focuses on user experience with responsive design and intuitive navigation across all devices.'
							ghLink='https://github.com/Zahooruddin-dev/Resturant-Walk-the-wok'
							demoLink='https://walkthewok.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={hair}
							isBlog={false}
							title='Hair Stylist Booking ( Demo )'
							description='A React-based salon booking system with calendar scheduling and simulated payments. Supports English and Romanian languages, featuring accessibility enhancements and mobile-first responsive design.'
							ghLink='https://github.com/Zahooruddin-dev/Premium-Hair-Salon-V.2'
							demoLink='https://premium-hair-salon-v-2.vercel.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
