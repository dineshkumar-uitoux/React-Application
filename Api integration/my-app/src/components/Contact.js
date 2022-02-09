import React from 'react';
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import ContactForm from './ContactForm';


function Contact() {
  return <div>
    <h1 style={{textAlign:'center',fontSize:50}}>contact</h1>
    <Container>
      <Row>
        <Col>
           <p style={{fontSize:40}}>Feel like contacting us?Submit your queries here and we will get backto you as soon as possible.</p>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>send us a Message</CardTitle>
              <ContactForm />
              <Button className="bg-danger"  style={{borderRadius:200,width:700}}>Submit</Button>
            </CardBody>

          </Card>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default Contact;
