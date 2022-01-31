import {React,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form, FormGroup, Label ,Input, Button} from "reactstrap"
import {employer,selectUser}from './feature/UserSlice.js';

export default function EmployerForm(){
    const [name,setname]=useState("")
    const [skill,setskill]=useState("");
    const[check,setcheck]=useState(false);
    const [date,setdate]=useState(false)
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const[err,seterr]=useState(false);
    const[nameerr,setnameerr]=useState(false);
    const handleSkill=(e)=>{
        

    setskill(e.target.value)

    }
    const add=()=>{
        dispatch(employer({
            skill:skill
        }))
    }
   
    const checked=(e)=>{
        
        if(!check){
            
            seterr(true);
            e.preventDefault();
        }
        else{
           
            dispatch(employer({
            name:name,
            

            
        }))}
       
        
    }
    const validName = new RegExp(
        '^[a-zA-Z ]{2,30}$'
     );
     const validate=(e)=>{
         
        if(!validName.test(name))
        {
            setnameerr(true);
       }
    }  
   


   
    return(
        
        <div>
<h1>Employer Details</h1>

<Form>
   <FormGroup>
        <Label>
            Emp.Name
        </Label>
        <Input type="text" value={name} onBlur={(e)=>validate(e) }onChange={(e)=>setname(e.target.value)}></Input>
        {nameerr&&<p style={{color:"red"}}>only contains alphabetical letter</p>}
    </FormGroup>
    <FormGroup>
        <Label>
             DOB 
        </Label>
       <Input type="date" ></Input>
     
    </FormGroup>
    <FormGroup>
        <Label>
            Gender
        </Label>  <Input type="radio" name="gender" value="male"/> Male
        <Input type="radio" name="gender" value="female"/> Female
        
    </FormGroup>
    <FormGroup>
        <Label>
            Working Industry
        </Label>
        <select name="working-industry" id="working-industry">
    <option >construction</option>
    <option >catering</option>
    <option >Marketing and advertising</option>
    <option >Chemical</option>
    <option >Software</option>
  </select> </FormGroup>
<FormGroup>
        <Label>
              Experience
        </Label>
        <Input  style={{width:"100px",display:"inline"}} type="number">  </Input>Years<Input onBlur={(e)=>setcheck(true)} style={{width:"100px",display:"inline"}} type="number"></Input>months
        
</FormGroup>
    <FormGroup>
        <Label>
            Skillset
        </Label>  like (c,c++){user.skill}
        <Input value={skill}onChange={(e)=>handleSkill(e)}></Input>
        <br/>
    <Button onClick={(e)=>add(e)}>add</Button>
        
       
       
    </FormGroup> 
    <FormGroup>  
        
  <Input type="checkbox" value={check}onChange={(e)=>setcheck(true)} ></Input>  <Label>I agree</Label>
  {err&&<p style={{color:"red"}}>Must be checked</p>}
  </FormGroup>
  <Button type="submit" onClick={(e)=>checked(e)} >submit</Button>
    
</Form>

</div>
)
}