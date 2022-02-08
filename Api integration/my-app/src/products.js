import React from "react";
import { Button } from "reactstrap";
const Product=React.memo(({name,addToCart,props})=>{
    console.log(`${name} prod comp re-rendered`);
  
    return(
        <div className='product' style={{border: "5px solid black"}}>
            
            <h1>{name}</h1>
            <Button onClick={addToCart} >Add to cart</Button>
            
        </div>
    );
});
export default Product;