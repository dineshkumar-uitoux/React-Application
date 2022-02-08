import React from "react";
import { Button } from "reactstrap";
import { useState,useCallback } from "react";
import Product from "./products";
export default function MemoExample(){
    const [count, setCount] = useState(0);
    const [prod,setProud]=useState(['product 1','product 2']);
    const [cart,setCart]=useState(0);
    const addToCart=useCallback(()=>{
        setCart(cart+1);
      },[cart]);
   
    return(
        <div>   <h2>usecallabck Example</h2>
        <h2>count:{count}</h2>
        <Button onClick={()=>setCount(count+1)}>Increment</Button>
      <h2>cart:{cart}</h2>
      {prod.map((p,i)=>{
        return <Product  addToCart={addToCart} name={p} key={i}/>

      })
      }</div>
     
    )
}