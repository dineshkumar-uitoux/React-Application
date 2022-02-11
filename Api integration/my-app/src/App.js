import React from 'react';
import Login from './login.js';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/UserSlice.js';
import Logout from './logout.js';
import EmployerForm from './employerform.js';
import { Container, Row, Col } from 'reactstrap';
import DataTable from './datatable.js';
import Example from './example.js';
import MemoExample from './memoExample.js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Context from './context.js';
import Parent from './parent.js';
import NavTab from './NavTab.js';
import CustomHook from './CustomHook.js';

export default function App() {
    const user = useSelector(selectUser);

    return (
        <>
            <Router>
                <NavTab />
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                </Routes>
            </Router>{/*<EmployerForm /><Example /><MemoExample /><Context /><CustomHook/>*/}
        </>

    )
}