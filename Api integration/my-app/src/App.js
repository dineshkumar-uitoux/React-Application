
import './App.css';
import React from 'react';
import { Button, Form, Input,Label,FormGroup,Container, Row, Col } from 'reactstrap';
import Login from './login.js';


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state={
      name:" ",
      email:" ",
      password:" ",
      phoneno:" ",
      shown:false
      
    };
    this.onchange=this.onchange.bind(this);
    this.onsubmit=this.onsubmit.bind(this);

  }
  onchange(event){
    this.setState({[event.target.name]:event.target.value})
    console.log({[event.target.name]:event.target.value});
  }
  async  onsubmit(event){
    event.preventDefault();
    const data={
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      phoneno:this.state.phoneno,
      shown:this.setState({shown:true})
  
      };
   let result= await fetch("http://localhost:3000/Users",{
      method:"post",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    console.log(result);
   result=await result.json()
   console.warn("result",result)

   
  }
  render(){
  return (
    <div>
      <Container> 
      <Row> 
      <Col xl='6'>
    <div className="App">
      <h1>Sign Up</h1>
        
  <Form   className="form" >
  <FormGroup>
    <Label>Name</Label>
    <Input placeholder="YOUR NAME"name="name" type="text" onChange={this.onchange}></Input></FormGroup>
    <br/>
    <FormGroup>
      <Label>E-mail</Label>
    <Input name="email" placeholder="abc@gmail.com" type="text" onChange={this.onchange}></Input></FormGroup>
    <br/>
    <FormGroup>
      <Label>Password</Label>
    <Input name="password" placeholder="******" type="text" onChange={this.onchange}></Input>
    </FormGroup>
    <br/>
    <FormGroup>
      <Label>Mobileno</Label>
    <Input name="phoneno" type="text" onChange={this.onchange}></Input>
    </FormGroup>
    <br/>
    <Button className="bg-primary" type="submit" onClick={this.onsubmit}  >sign up</Button>
    
  </Form>
 
  </div></Col>
  
      
  <Col xl='6'><Login></Login></Col>
      
      </Row>
      </Container>
    </div>
  );
}
}


