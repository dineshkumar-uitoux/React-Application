import React from 'react';
import Login from './login.js';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/UserSlice.js';
import Logout from './logout.js';
import EmployerForm from './employerform.js';
import { Container, Row, Col } from 'reactstrap';
import DataTable from './datatable.js';

export default function App() {
    const user = useSelector(selectUser);

    return (
        <div>

            <Container>
                <Row>
                  {/*} <Col>
                        <div className='App'>
                            {user ? <Logout /> : <Login />}</div>
    </Col>*/}


                    <Col><div ><EmployerForm /></div></Col>
                   {/*<Col><div ><DataTable /></div></Col>*/} 
                </Row>
            </Container>
            
        </div>
    )
}