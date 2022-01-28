import { useState } from "react"
import { Button, Form, Input,Label,FormGroup, Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';

export default function Login(){
    const[name,setname]=useState("");
    const[email,setmail]=useState("");
    const[password,setpassword]=useState("");
    const[modal,setmodal]=useState(false);
    const[err,seterr]=useState(false);
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    
    const save=()=>{
        
        sessionStorage.setItem('UserName', name);
        sessionStorage.setItem('Email',email);
        sessionStorage.setItem('Password', password);
    }

  
 const toggle=()=>{
    setmodal(!modal);
  
 }
 const validate=(event)=>{
     if(!validEmail.test(email))
     {
         seterr(true);
    }
    
     
     
 }
   
    
 
return(
    <div>
    <div className="Login">
    <h1>Login</h1>
    
<Form   className="form" >
<FormGroup>
  <Label>userName</Label>
  <Input placeholder="YOUR NAME"name="name"  value={name} type="text" onChange={(e)=>setname(e.target.value)}></Input></FormGroup>
  <br/>
  <FormGroup>
    <Label>E-mail</Label>
  <Input name="email" placeholder="abc@gmail.com" onBlur={validate}  value={email} type="text" onChange={(e)=>setmail(e.target.value)}></Input>
  {err&&<p style={{color:"red"}}>INVALID EMAIL</p>}
  </FormGroup>
  
  <br/>
  <FormGroup>
    <Label>Password</Label>
  <Input name="password" placeholder="******"  value={password} type="text" onChange={(e)=>setpassword(e.target.value)}></Input>
  

  </FormGroup>
  <br/>
  
  <br/>
  
  <Button className="bg-primary" type="submit" onClick={save} >save</Button>
  <Button className="bg-primary"  onClick={toggle} >Login</Button>
 
</Form>

</div>


    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader style={{color: "green"}} toggle={toggle} >Login sucessful</ModalHeader>
               <ModalBody>
               Name: <p>{name}</p>
               </ModalBody>
         
        
            <ModalBody>
               Password: <p>{password}</p>
           </ModalBody>
           <ModalFooter>
            
            <Button className="bg-primary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
       
       </Modal>
</div>

)
}
