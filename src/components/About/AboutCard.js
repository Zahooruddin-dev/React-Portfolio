import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am{' '}
						<span className='purple'> Zahooruddin Nizamani </span>
						from <span className='purple'> Hyderabad, Pakistan.</span>
						<br />
						<br />I completed high school with a focus on Computer Science and
						have since immersed myself in Front-end Web Development with{' '}
						{'React'}.
						<br />
						<br />
						Some of my favorite projects I've developed and worked
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Typing Web App
						</li>
						<li className='about-activity'>
							<ImPointRight /> Azuka Platformer Game
						</li>
						<li className='about-activity'>
							<ImPointRight /> Analyzing car weight distribution
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Failure is not the opposite of success it's just a part of it"{' '}
					</p>
					<footer className='blockquote-footer'>Ariana Huffington</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
