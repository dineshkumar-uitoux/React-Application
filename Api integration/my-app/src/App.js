import React from 'react';
import Login from './login.js';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/UserSlice.js';
import Logout from './logout.js';


export default function App(){
    const user=useSelector(selectUser);
    
return(

    <div className='App'>
       {user?<Logout/>:<Login/>}
    </div>
    )
}