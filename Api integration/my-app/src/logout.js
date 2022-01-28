import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logout, selectUser } from "./feature/UserSlice";

export default function Logout(){
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
    }
    return(
        <div>
            <h1>HI <span style={{color:"green"}}>{user.name}</span></h1>
            <Button className="bg-primary" onClick={(e)=>handleLogout(e)}>LOG OUT</Button>
        </div>
    )
}