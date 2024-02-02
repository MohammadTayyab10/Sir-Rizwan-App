"use client"

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

export default function DeleteIconComponent(){
    
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <>
      <Button
      style={{
        border: "none",
        marginBottom: '5px',
        position: 'relative', // Ensure position is set to relative for proper icon positioning
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    //   onClick={showDrawer}
    >
      <DeleteOutlined
        style={{
          cursor: "pointer",
          fontSize: isHovered ? '20px' : '16px', // Set the desired sizes
          position: 'absolute', // Position the icon absolutely within the button
          top: '50%', // Center the icon vertically
          left: '50%', // Center the icon horizontally
          transform: 'translate(-50%, -50%)', // Center the icon perfectly
        }}
      />
    </Button>
</>
)
};
