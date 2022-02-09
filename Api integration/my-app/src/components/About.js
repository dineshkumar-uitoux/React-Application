import React from 'react';
import { Container ,Col,Row, Button} from 'reactstrap';

function About() {
  return <div>
      <h1 style={{textAlign:'center',fontSize:50}}>About</h1>
      <Container>
        <Row style={{ textAlign: 'center' }}>
        <Col style={{ marginTop: 100}}>

        <p style={{fontSize:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button className='bg-primary'>Read More</Button>

        </Col>
        </Row>
      </Container>
  </div>;
}

export default About;
