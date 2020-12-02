import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

return (
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3">
                <Col className="p-0 md={3} sm={12}">
                Daniel Rodriguez
                </Col>
                <Col className="p-0">
                    <a href="https://docs.google.com/document/d/1AfchCIHH067YCn695NuDd5N5fg-LWpnTPd9CREj015Q/edit?usp=sharing">Resume</a>
                    <a href="https://github.com/Daniel-Rodriguez210">Github</a>
                    <a href="https://www.linkedin.com/in/daniel-rodriguez-73690b1b0/">LinkedIn</a>
                </Col>
                <Col className="p-0 d-flex justify-content-end" md={3}>
                    This website was made by Daniel Rodriguez.
                </Col>
            </Row>

        </Container>


    </footer>
);

}

export default Footer;