import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { Form, InputGroup } from "react-bootstrap";



const SanPhamSearch=(props)=> {
    const {onSubmit}=props
    const [searchTerm,setSearchTerm]=useState('')

    const typingTimeoutRef = useRef(null)
    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;
      
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
      
        typingTimeoutRef.current = setTimeout(() => {
          const formValue = {
            searchTerm: value,
          };
          onSubmit(formValue); // Gọi hàm onSubmit với giá trị tìm kiếm
        }, 400);
      };
      
    return (

        <InputGroup className="mb-3">
                  <Form.Control
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder="Nhập tên sản phẩm  "
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  
                </InputGroup>

    )
}


export default SanPhamSearch