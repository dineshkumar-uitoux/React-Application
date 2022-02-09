import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        
            <div>
            <Container >
                <Row style={{ textAlign: 'center' }}>
                    <Col style={{ marginTop: 200 }}>
                        <h1 style={{fontSize:50}}>Welcome</h1>
                        <p style={{fontSize:30}}> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum.
                        </p>
                        <Button className="bg-light"><Link style={{ textDecoration: "none", color: "black" }} to="/about">Learn  More</Link></Button>
                        <Button style={{ margin: 20 }} className="bg-primary"><Link style={{ textDecoration: "none", color: "black" }} to="/contact">Contact</Link></Button>

                    </Col>
                </Row>
                <About/>
                <Contact/>
            </Container>
            </div>
    );
}

export default Home;
