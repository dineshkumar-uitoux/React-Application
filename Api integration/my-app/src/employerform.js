import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { employer, selectUser } from './feature/UserSlice.js';

export default function EmployerForm() {
    const [name, setname] = useState()
    const [skill, setskill] = useState("");
    const [check, setcheck] = useState(false);
    const [date, setdate] = useState(false);
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [values, setvalues] = useState({ i: '' });
    const [err, seterr] = useState(false);
    const [nameerr, setnameerr] = useState(false);
    const [inputList, setInputList] = useState([{ skills: "" }]);




    const checked = (e) => {

        if (!check) {

            seterr(true);
            return;

        }
        dispatch(employer({
            name: name
        }))
        e.preventDefault();
    }
    const validName = new RegExp(
        '^[a-zA-Z ]{2,30}$'
    );
    const validate = (e) => {

        if (!validName.test(name)) {
            setnameerr(true);
        }
    }
    const handleAddClick = () => {
        setInputList([...inputList, { skills: "" }]);
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    const save = () => {
        dispatch(employer({
             inputList
        }))
    }



    return (

        <div>
            <h1>Employer Details</h1>

            <Form onSubmit={checked}>
                <FormGroup>
                    <Label>
                        Emp.Name
                    </Label>
                    <Input type="text" value={name} onBlur={(e) => validate(e)} onChange={(e) => setname(e.target.value)}></Input>
                    {nameerr && <p style={{ color: "red" }}>only contains alphabetical letter</p>}
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
                    </Label>  <Input type="radio" name="gender" value="male" /> Male
                    <Input type="radio" name="gender" value="female" /> Female

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
                    <Input style={{ width: "100px", display: "inline" }} type="number">  </Input>Years<Input onBlur={(e) => setcheck(true)} style={{ width: "100px", display: "inline" }} type="number"></Input>months

                </FormGroup>
                <FormGroup>
                    <Label>
                        Skillset
                    </Label>

                    {inputList.map((x, i) => {
                        return (
                            <div >

                                <div> <Input name="skills" value={x.skills} onChange={(e) => handleInputChange(e, i)} /></div>
                                <div>{inputList.length - 1 === i && <Button onClick={handleAddClick}>Add</Button>}</div>
                            </div>
                        )

                    })}
                    <Button onClick={save}>save</Button>
                    <div style={{ marginTop: 20 }}>{inputList.skills}</div>
                </FormGroup>
                <FormGroup>

                    <Input type="checkbox" value={check} onChange={(e) => setcheck(true)} ></Input>  <Label>I agree</Label>
                    {err && <p style={{ color: "red" }}>Must be checked</p>}
                </FormGroup>
                <Button type="submit"  >submit</Button>

            </Form>

        </div>
    )
}