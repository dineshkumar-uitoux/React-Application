import React from 'react'
import { Form, FormGroup, Label ,Input} from 'reactstrap'

function ContactForm() {
  return (
    <div>
        <Form>
        <FormGroup>
            
             <Input type='text' placeholder='Name'/>
             
        </FormGroup>
        <FormGroup>
            
             <Input type='email' placeholder='Email'/>
             
        </FormGroup>
        <FormGroup>
           
             <Input type='tel' placeholder='Phone'/>
             
        </FormGroup>
        </Form>
    </div>
  )
}

export default ContactForm;