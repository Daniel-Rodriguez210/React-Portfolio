import React from 'react'; 
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import GitHub from '../assets/images/gh1.png';
import LinkedIn from '../assets/images/li1.png';


class ContactPage extends React.Component {



    render() {
    return (
        <div>
            <Hero title={this.props.title} />
            <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Questions?</p>
                                <p>Please contact me with any questions you may have. I would be happy to answer.</p>
                                <p>(210)-287-2866</p>
                                <p>drod18@hotmail.com</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                    <Card.Body>
                            <Card.Text>
                                <p>If you would like to take a look at additional information please examine my LinkedIn, GitHub, and Resume.</p>
                                <a href="https://github.com/Daniel-Rodriguez210">
                                    <img className="prodigy" src={GitHub} alt="Github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/daniel-rodriguez-73690b1b0/">
                                    <img className="prodigy1"src={LinkedIn} alt="LinkedIn"/>
                                </a>
                                <br/>
                                <a className="resume"href="https://docs.google.com/document/d/1wReEldfwRb5gmopsVun0Wv8mmO5wFa_2IGMPob6-owQ/edit?usp=sharing">Resume</a>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
  }
}

export default ContactPage; 