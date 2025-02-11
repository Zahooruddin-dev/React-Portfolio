import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Aethos from '../../Assets/Projects/aethos.jpg';
import photographer from '../../Assets/Projects/photographer.jpg'; /* 
import reactPorjects from '../../Assets/Projects/mizEditor.jpg';
import crop from '../../Assets/Projects/crop.jpg'; */
import mizua from '../../Assets/Projects/mizua.jpg';
import resturant from '../../Assets/Projects/resturant.jpg';
import foam from '../../Assets/Projects/foramexperts.jpg';
import dashboard from '../../Assets/Projects/dashboard.jpg';
import Mizs from '../../Assets/Projects/mizscribe.jpg';
import MultiLLm from '../../Assets/Projects/multillm.jpg';
import wiki from '../../Assets/Projects/wiki.png';
import mizukatypes from '../../Assets/Projects/mizuka-types.png';
/* import gem from '../../Assets/Projects/gem.jpg';
 */ function Projects() {
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
							title='Mizuka Types '
							description='Developed a Typing Web Application using ReactJS, featuring advanced functionality through Custom Hooks and Styled-components. Integrated persistent settings with Local Storage, allowing users to customize themes, access multiple game modes (word, sentence, free typing), and participate in timed challenges ranging from 15 to 90 seconds. Enhanced the user experience by adding Ultra-Zen Mode and Focused Mode for distraction-free typing sessions, ensuring a sleek, responsive design for all devices.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={MultiLLm}
							isBlog={false}
							title='MULTI LLM AI ASSISTANT'
							description='Built a cutting-edge AI assistant platform using React.js, allowing users to interact with multiple LLMs in one place. The system supports Meta Llama, DeepSeek, OpenAI, Gemini, Claude, Rogue, and many more, enabling seamless selection and comparison of responses from different AI models. Users can easily identify which LLM generated each response, ensuring transparency and flexibility. The platform is optimized for performance, featuring an intuitive UI, real-time updates, and a scalable architecture to handle diverse AI interactions efficiently.'
							ghLink='https://github.com/Zahooruddin-dev/MULTI-LLM-CHATBOT'
							/* 							demoLink='https://photographer-bay-alpha.vercel.app/'
							 */
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Aethos}
							isBlog={false}
							title='Aethos (Fusion AI Model)'
							description='Developed an innovative chat application that integrates advanced AI capabilities for enhanced user interaction. The platform leverages the Fusion AI model to provide intelligent, context-aware responses, ensuring a seamless and engaging chat experience. Implemented a robust translation feature to support multiple languages, enhancing accessibility for diverse users. The application features a user-friendly interface with a responsive design, allowing for intuitive navigation across devices. Utilized modern technologies such as React, Firebase for authentication, and various libraries for PDF generation and Markdown rendering, creating a comprehensive solution tailored for effective communication and collaboration. The project emphasizes performance, reliability, and user satisfaction, making it an ideal tool for content creators and users seeking interactive chat experiences.'
							ghLink='https://github.com/Zahooruddin-dev/Aethos'
							/* 							demoLink='https://clinet-portfolio.vercel.app/'
							 */
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
					</Col>{' '}
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
					{/* 	*/}
					{/* 	<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={reactPorjects}
							isBlog={false}
							title='Miz Photo Editor'
							description='Developed a feature-rich photo editing tool using React.js, offering real-time adjustments with an intuitive UI. Supports a wide range of filters, including brightness, contrast, saturation, and advanced color effects. Users can transform images with rotation, zoom, flipping, and perspective controls. Export options include multiple formats (PNG, JPEG, WebP, GIF) with adjustable quality settings. Designed for performance and user experience, ensuring smooth interactions and precise edits.'
							ghLink='https://github.com/Zahooruddin-dev/Miz-Photo_Editor'
							demoLink='https://miz-photo-editor.vercel.app/'
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
					</Col> */}
					{/* <Col md={4} className='project-card'>
						<ProjectCard
							imgPath={gem}
							isBlog={false}
							title='G E M I N I'
							description='
								GEMINI Clone is a React-based web app that simulates content generation using the Gemini API. With secure authentication and a login page, users can generate text, view recent responses, and save results locally for easy access. The app offers a seamless and responsive user experience across devices. Deployed on Vercel for reliability, GEMINI Clone efficiently handles real-time requests with robust error management and local storage integration, ensuring both performance and scalability.'
							ghLink='https://github.com/Zahooruddin-dev/Gemini-React'
							demoLink='https://mizukagemini.vercel.app/'
						/>
					</Col> */}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
