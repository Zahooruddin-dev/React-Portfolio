import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
function noTwitter() {
	alert("I don't have any public Twitter Accounts");
}
function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className='purple'> INTRODUCE </span> MYSELF
						</h1>
						<p className='home-about-body'>
							I started in 3rd Grade on Visual studio and then started using
							Unity game engine and then lerned Web dev to better present my
							games in inter-school IT exhibation 
							<br />
							<br />Winning every year from grade
							3rd to 12th 
							<i>
                <br/>
                <br/>

								<b className='purple'> First Lines ever written on NotePad  <span></span>    <span>&lt;html&gt;&lt;/html&gt;</span>  </b>
							</i>
							<br />
							<br />
							My field of Interest's are learning and building new &nbsp;
							<i>
								<b className='purple'>Web Technologies and Web apps </b> and
								also in areas related to <b className='purple'>Simulation Enviornments .</b>
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products
							with <b className='purple'>Unity</b> and
							<i>
								<b className='purple'>
									{' '}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className='purple'> React.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className='purple'><a href='https://www.linkedin.com/in/muhammad-zahooruddin-nizamani-844a58274/' className='purple'> connect</a> </span>with me
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/Zahooruddin-dev'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									onClick={noTwitter}
									target=''
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/muhammad-zahooruddin-nizamani-844a58274/?originalSubdomain=pk'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.instagram.com/zahooruddin18/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
