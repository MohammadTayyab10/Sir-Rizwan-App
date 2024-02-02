// AntInputComponent.js
import React from 'react';
import { Input } from 'antd';

const AntInputComponent = ({placeholder}) => {
  // const styles = {
  //   placeholder: {
  //     fontSize: "16px",  // Adjust the font size for the placeholder
  //   },
  // };

  return (
    <Input
      placeholder={placeholder || "Enter Name"}
      // inputStyle={styles.placeholder}
      style={{
       //backgroundColor: "	#C0C0C0",
         backgroundColor: "white",
         width: "350px",
         height: "40px",
         borderRadius: "10px",
         fontSize: "22px",
      }}
    //   onChange={onChange}
    //   value={value}
    />
  );
};

export default AntInputComponent;
