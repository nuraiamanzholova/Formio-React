import React from 'react';
import ReactDOM from 'react-dom';
import { Form, form } from '@formio/react'
import 'formiojs/dist/formio.builder.min.css';
import { FormBuilder } from 'formiojs';

const App = () => {
  const formRef = React.useRef(null);
  const onFormReady = React.useCallback((form) => {
    formRef.current = form;
  }, []);


  return (
    
    <div className="container" id="main">
      <Form src="https://forms.lhd.dev.publicplan.cloud/azubitest-adxfkcqfehdcrev/test2 " />
    </div>
  );
};
export default App
