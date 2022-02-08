
import React, { useContext } from 'react';
import { FormGroup, Input, Label} from 'reactstrap';

import {userContext} from './FormContext.js';
function Form() {
    const context=useContext(userContext);
  return <div>
      <Form>
          <FormGroup>
          <Label>userName</Label>
              <Input type="text" value={context.name}></Input>
          </FormGroup>
          <FormGroup>
              <Label>password</Label>
              <Input type="password" value={context.password}></Input>
          </FormGroup>
      </Form>
  </div>;
}

export default Form;
