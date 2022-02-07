import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from 'reactstrap';

export default function Example() {
  const [time, setTime] = useState(0);
  const[value,setValue]=useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time+ 1);
    }, 1000);
  },[]);
 
const memo=()=>{
  console.log('memoized')
  
}
const memoValue=useMemo(()=>memo(),[value])

  return (
    <div>
      <h1>Hooks useEffect Example</h1>
      <p>I've rendered {time} times!</p>
      <h2>Hook-usememo</h2>
      <Button onClick={()=>setValue(value+1)}>add value</Button> <br/>{value}
      
      
    </div>
  );
}