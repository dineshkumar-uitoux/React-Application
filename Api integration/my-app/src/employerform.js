import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input, Button, Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap"
import DataTable from "./datatable.js";
import { addEmployers, selectUser } from './feature/UserSlice.js';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgSelect } from "ag-grid-community";

const Skillset = ({ handleInputChange }) => {


    return (
        <div >
            <div> <Input name="skills" onChange={(e, i) => handleInputChange(e, i)} /></div>

        </div>
    )
}

export default function EmployerForm(props) {
    const [name, setname] = useState()
    const [check, setcheck] = useState(false);
    const dispatch = useDispatch();
    const [checkerr, setCheckerr] = useState(false);
    const [nameerr, setnameerr] = useState(false);
    const[age,setAge]=useState('')
    const [mail, setMail] = useState();
    const [modal, setmodal] = useState(false);
    const [workField, setWorkField] = useState()
    //const [inputList, setInputList] = useState([ skills: "" }]);
    
    const [skills, setSkills] = useState([{ skills: "" }]);
    const users = useSelector(selectUser)

    /* const checked = (e) => {
         if (!check) {
             seterr(true);
             return;
         }*/

    const send = (e) => {
        if (!check) {
            
            setCheckerr(true);
            setmodal(modal);
            e.preventDefault();
            return;

        }
        dispatch(addEmployers({

            name: name,
            email: mail,
            age:age

        }))
        setmodal(!modal);
        setname('');
        setMail('');
        setCheckerr(false)
        setAge('');
        setSkills([{ skills: "" }])
        e.preventDefault();



    }
    const validName = new RegExp(
        '^[a-zA-Z ]{2,30}$'
    );
    const validate = (e) => {

        if (!validName.test(name)) {
            setnameerr(true);
            return;
        }
        setnameerr(false);
    }

    const handleAddClick = () => {
        setSkills([...skills, { skills: "" }]);
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...skills];
        list[index][name] = value;
        setSkills(list);
    };

    /*const handleInputChange = (e) => {
         setSkills([...skills, e.target.value])
     }*/

    const toggle = () => {
        setmodal(!modal);

    }
    return (
        <div>
            <Button onClick={toggle}>ADD EMPLOYEE</Button>


            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader> <h1>Employer Details</h1></ModalHeader>
                <div className='employerform'>


                    <ModalBody>
                        <Form onSubmit={send}>
                            <FormGroup>
                                <Label>
                                    Emp.Name
                                </Label>
                                <Input type="text" value={name} onBlur={(e) => validate(e)} onChange={(e) => setname(e.target.value)}></Input>
                                {nameerr && <p style={{ color: "red" }}>only contains alphabetical letter</p>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Emp.email</Label>
                                <Input type="email" value={mail} onChange={(e) => setMail(e.target.value)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    DOB
                                </Label>
                                <Input type="date" ></Input>

                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Age
                                </Label>
                                <Input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></Input>

                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Gender
                                </Label>  <Input type="radio" name="gender" value="male" /> Male
                                <Input type="radio" name="gender" value="female" /> Female

                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Working Industry
                                </Label>
                                <select name="working-industry" id="working-industry" >
                                    <option selected="selected" ></option>
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
                                <Input style={{ width: "100px", display: "inline" }} type="number">  </Input>Years<Input onBlur={(e) => setcheck(true)} style={{ width: "100px", display: "inline" }} type="number"></Input>months

                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Skillset
                                </Label>

                                {skills.map((x, i) => {

                                    return (<Skillset key={x} skill={skills} value={x.skills} handleInputChange={(e) => handleInputChange(e, i)} />)

                                    //{skills.length - 1 === i && }

                                })}
                                {skills.map((x, i) => {
                                    return (
                                        <div>
                                            {skills.length - 1 === i && <Button onClick={(e) => handleAddClick(i)}>Add</Button>}
                                        </div>)

                                })}
                            </FormGroup>
                            <FormGroup>

                                <Input type="checkbox" value={check} onChange={(e) => setcheck(true)} ></Input>  <Label>I agree</Label>
                                {checkerr && <p style={{ color: "red" }}>Must be checked</p>}
                            </FormGroup>
                            <Button type="submit" >submit</Button>  <Button className="bg-primary" onClick={toggle}>Cancel</Button>

                        </Form>

                    </ModalBody>

                </div>

            </Modal>

            {/*<DataTable rowData={Data}/>*/}

            <div>
                <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                    <AgGridReact rowData={users}>

                        <AgGridColumn field="name"></AgGridColumn>
                        <AgGridColumn field="email"></AgGridColumn>
                        <AgGridColumn field="age"></AgGridColumn>
                    </AgGridReact>

                </div>

            </div>



        </div>
    )
}