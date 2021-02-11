import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

return (
    <footer className="footer mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3">
                <Col className="p-0 links">
                    <a className="p-2" href="https://docs.google.com/document/d/1wReEldfwRb5gmopsVun0Wv8mmO5wFa_2IGMPob6-owQ/edit?usp=sharing">Resume</a>
                    <a className="p-2" href="https://github.com/Daniel-Rodriguez210">Github</a>
                    <a className="p-2" href="https://www.linkedin.com/in/daniel-rodriguez-73690b1b0/">LinkedIn</a>
                </Col>
                <Col className="madeBy p-0 d-flex justify-content-end" md={3}>
                    This website was made by Daniel Rodriguez.
                </Col>
            </Row>

        </Container>


    </footer>
);

}

export default Footer;