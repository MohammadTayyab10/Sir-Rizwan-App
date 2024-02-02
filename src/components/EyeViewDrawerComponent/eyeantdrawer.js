import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
// import 'antd/dist/antd.css';

const EyeViewDrawerApp = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
      onClick={showDrawer}
    >
      <EyeOutlined
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

      <Drawer
        title="Student Information"
        width={720}
        onClose={onClose}
        visible={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "20px",
          }}
        >
          <div>
          <img
            src="/images/rizwan bhai personal.jpg"
            alt="Student"
            style={{
              width: "20%",
              height: "auto",
              marginBottom: "10px",
              borderRadius: "50%",
            }}
          />
          </div>
          
          <div className="space-y-3">
            <p>Name: Rizwan Bhai</p>
            <p>Fathers Name: Fathers Name</p>
            <p>CNIC: 42345-6789101-2</p>
            <p>Course: Computer Science</p>
            <p>Gender: Male</p>
            <p>Batch: Batch XYZ</p>
            <p>Email: rizwan@example.com</p>
            <p>City: Islamabad</p>
            <p>Date of Birth: January 1, 1990</p>
            <p>Qualification: Bachelors Degree</p>
            <p>Address: 123 Main Street, City</p>
          </div>

        </div>
      </Drawer>

    </>
  );
};

export default EyeViewDrawerApp;
