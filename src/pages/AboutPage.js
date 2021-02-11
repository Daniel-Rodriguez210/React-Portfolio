import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import selfImage from '../assets/images/SI.jpg'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <Row>
                    <Col>
                        <img className="selfP" src={selfImage} alt="Portrait" />
                    </Col>
                    <Col className="aboutBio">
                        <p> Hello, my name is Daniel Rodriguez, and thank you for viewing my portfolio. I am a recent graduate of the Coding Bootcamp from the University of Texas at Austin where I learned the foundation for my future as a Full Stack Software Developer. I continue to educate and train myself as I seek employment as a Software Engineer.</p>
                        <p>"Nothing worth having comes easy." I believe this statement defines coding. I am an avid golfer, and like golfing, I am beginning to understand that programming is also a lifetime endeavor. Everyday is a grind whether I am working through data structures and algorithms, or fine tuning my design skills on a side projeect. I enjoy every moment of progression.</p>
                        <p>When I am not sharpening my coding skills you can usually find me outside on a golf course, blacktop, at the gym, or at a park. I recently launched a sports apparel website that also keeps me busy. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="skillsBio">Skills</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h5 className="heading">Languages</h5>
                        <ul className="lists">
                            <li>JavaScript ES6+</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>SQL</li>
                            <li>NoSQL</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="heading">Applications</h5>
                        <ul className="lists">
                            <li>GitHub</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Heroku</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="heading">Tools</h5>
                        <ul className="lists">
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Handlebars</li>
                            <li>Query</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                </Row>

            </Content>

        </div>
    );

}

export default AboutPage; 