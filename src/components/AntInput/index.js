// AntInputComponent.js

"use client";

import React from 'react';
import { Input } from 'antd';

const AntInputComponent = ({placeholder , style}) => {
 
  return (
    <Input
      placeholder={placeholder || "Enter Name"}
      // inputStyle={styles.placeholder}
      style={{
       //backgroundColor: "	#C0C0C0",
         backgroundColor: "white",
         width: "320px",
         height: "33px",
        //  borderRadius: "10px",
         fontSize: "15px",
         ...style,
      }}
    //   onChange={onChange}
    //   value={value}
    />
  );
};

export default AntInputComponent;
