import React from "react";
import { Card } from "antd";

const AntCardComponent = () => {
  return (
    <div
    className="space-x-[150px] mx-auto"
     style={{display:"flex", marginLeft: "220px" }} >
      
      <Card title="Total Students" style={{ width: 250 }}>
        <p style={{ fontSize: "30px", fontWeight: 1000 }}>1200</p>
      </Card>

      <Card title="Verified Students" style={{ width: 250 }}>
        <p style={{ fontSize: "30px", fontWeight: 1000 }}>700</p>
      </Card>

      <Card title="Unverified Students" style={{ width: 250 }}>
        <p style={{ fontSize: "30px", fontWeight: 1000 }}>500</p>
      </Card>
    </div>
  );
};

export default AntCardComponent;
