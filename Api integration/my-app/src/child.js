import React from 'react';

import { Button } from 'reactstrap';

function Child(props) {
    const value="This is Child Data"
  return <div>
      <Button onClick={()=>props.getData(value)}>Send Data</Button>
  </div>;
}

export default Child;
