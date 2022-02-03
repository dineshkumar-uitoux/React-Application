import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { employer, selectUser } from "./feature/UserSlice";
import { useSelector,useDispatch } from "react-redux";
import { Button } from 'reactstrap';
export default function DataTable(checked){
  
    return(
      <div className="ag-theme-alpine" style={{height: 400, width: 900}}>
           <AgGridReact 
               >
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn> 
             
           </AgGridReact>
          {/*<Button onClick={e=>setRowData([{name:name,email:mail}])}>add</Button> */}
       </div>
    )

  

}

