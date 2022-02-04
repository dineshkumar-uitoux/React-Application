import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { employer, selectUser } from "./feature/UserSlice";
import { useSelector,useDispatch } from "react-redux";
import { Button } from 'reactstrap';
export default function DataTable(){
  const users=useSelector(selectUser);
    return(
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact rowData={users} >
              
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn> 
               <AgGridColumn field="age"></AgGridColumn>
           </AgGridReact>
          
       </div>
    )

  

}

