import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';
import About from './About';
import Contact from './Contact';
import styled from 'styled-components';
const Div=styled.div`


background-color:#f2d9aa


`

function Home() {
    return (
        <>
           <Div>  
            <Container style={{height:'100vh'}} >
               
                <Row style={{ textAlign: 'center' }}>
                    <Col style={{ marginTop: 200 }}>
                        <h1 style={{fontSize:50,color: '#031c40,',fontWeight:'bolder'}}>Welcome</h1>
                        <p style={{fontSize:30}}> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum.
                        </p>
                        <Button className="bg-light"><Link style={{ textDecoration: "none", color: "black" }} to="/about">Learn  More</Link></Button>
                        <Button style={{ margin: 20 }} className="bg-primary"><Link style={{ textDecoration: "none", color: "black" }} to="/contact">Contact</Link></Button>

                    </Col>
                </Row>
               
                
            </Container>
          </Div>   
            <About/>
                <Contact/>
                </>
            
    );
}

export default Home;
