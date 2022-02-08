import React from 'react';
import Child from './child';

function Parent() {
    const getDataFromChild=(value)=>{
        alert(value);
    }
  return <div>
      <h1>Child---Parent</h1>
      <Child getData={getDataFromChild}/>
  </div>;
}

export default Parent;
