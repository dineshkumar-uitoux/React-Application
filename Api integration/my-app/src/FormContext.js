import React, { useState} from 'react';
import Form from './Form.js';
const userContext=React.createContext();
export default function FormContext() {
    const[users,setUsers]=useState({name:'',password:''});
    
    return (
    <userContext.Provider value={users}>
         <Form/>
    </userContext.Provider>
)
  
}
export {userContext} ;  
