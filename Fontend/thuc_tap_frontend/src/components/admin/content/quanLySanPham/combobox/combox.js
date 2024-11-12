import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function ComboBox(props) {
 const {handleChange,title,options,selectedValue}=props

  return (
    <>
        <Form.Group controlId={title}>
        <Form.Label>{title}</Form.Label>
        <Form.Control as="select" value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.id} value={option}>
              {option.ten} 
            </option>
          ))}
        </Form.Control>
      </Form.Group>

    </>
      
  );
}

export default ComboBox;