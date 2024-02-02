"use client";

import AntInputComponent from "@/components/AntInput";
// import AntUploadComponent from "@/components/AntUpload";
import ImageUploadComponent from "@/components/AntUpload/ubaid2";
import { Button } from "antd";
// import Image2UploadComponent from "@/components/AntUpload/ubaid2";
import React from "react";

export default function PaymentVerify() {
  const styles = {
    container: {
      backgroundColor: "white",
      // border: "2px solid black",
      // borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: "400px",
      height: "800px",
      marginTop: "35px",
      boxShadow: "1px 5px 5px 8px rgba(0.2, 0.2, 0.2, 0.2)",
      // boxShadow: '5px 0px 1px 12px rgba(0, 0, 0, 0.1)',
      // maxWidth: "600px",

      // marginLeft: "200px"
    },
    inputs: {
      color: "green",
      width: "500px",
      height: "105px",
      //   border: "2px solid black",
    },
    upload: {
      backgroundColor: "green",
    },
  };

  return (
    <>
      {/* <h1 style={{color: "blue", fontSize: "30px", fontWeight: "bolder", marginLeft: "50px", }}>Payment Verify</h1> */}

      <div
        style={{ boxShadow: "5px 0px 1px 12px rgba(0, 0, 0, 0.1)" }}
        className="items-center justify-between mt-8 w-full bg-[#248ba5] lg:h-16 md:h-16 mx:h-16 lg:text-4xl md:text-4xl mx:text-4xl text-white flex items-center justify-center text-2xl xs:text-1xl text-[20px] font-bold h-12"
      >
        <p style={{alignItems: "center"}} className="lg:pl-[30%] md:pl-[12%] mx:pl-[20%]  ml-6">
          Payment Verify Form
        </p>
      </div>

      <div className="space-y-6 mx-auto " style={styles.container}>
        <div
          style={{
            margin: "0 auto", 
            marginTop: "10px",
            //  backgroundColor: "white",
          }}
          className="space-y-5 mx-auto"
        >
          <div style={{ marginTop: "5px" }}>
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>Name</p>
            <AntInputComponent
              placeholder={"Enter Name"}
              style={styles.inputs}
            />
          </div>
          <div>
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>Roll No</p>
            <AntInputComponent
              placeholder={"Enter Roll No."}
              style={styles.inputs}
            />
          </div>
          <div>
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>Course</p>
            <AntInputComponent
              placeholder={"Enter Course"}
              style={styles.inputs}
            />
          </div>
          <div>
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>Batch</p>

            <AntInputComponent
              placeholder={"Enter Batch"}
              style={styles.inputs}
            />
          </div>

          <div>
            <p style={{ fontSize: "15px", marginLeft: "20px" }}>Upload</p>
            <ImageUploadComponent />
          </div>
        </div>
        
        <Button style={{ backgroundColor: "blue", fontSize: "15px", color: "white",
        width:"350px", height: "60px", margin: "0 auto", marginTop: "10px", borderRadius: "50px"
         }}>Submit</Button>
      </div>
    </>
  );
}
