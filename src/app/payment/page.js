"use client";

import AntInputComponent from "@/components/AntInput";
// import AntUploadComponent from "@/components/AntUpload";
import ImageUploadComponent from "@/components/AntUpload/ubaid2";
// import Image2UploadComponent from "@/components/AntUpload/ubaid2";
import React from "react";

export default function PaymentVerify() {
  const styles = {
    container: {
      backgroundColor: "white",
      // border: "2px solid black",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: "600px",
      height: "1000px",
      marginTop: "45px",
      boxShadow:'1px 5px 5px 8px rgba(0.2, 0.2, 0.2, 0.2)'
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
    
    <div style={{boxShadow:'5px 0px 1px 12px rgba(0, 0, 0, 0.1)'}} className="items-center justify-between mt-8 w-full bg-[#248ba5] lg:h-16 md:h-16 mx:h-16 lg:text-4xl md:text-4xl mx:text-4xl text-white flex items-center justify-center text-2xl xs:text-1xl text-[20px] font-bold h-12"><p style={{ marginLeft: "150px",}}
    className="lg:pl-[30%] md:pl-[12%] mx:pl-[20%]  ml-6">Payment Verify Form</p>
    </div>
    
    <div className="space-y-8 mx-auto " style={styles.container}>
      
      
      <div style={{margin: "0 auto", marginTop: "40px",
      //  backgroundColor: "white",
        }}
      className="space-y-9 mx-auto"
      >

      <div style={{marginTop: "5px"}}>

      <p style={{ fontSize: "20px", marginLeft: "20px", }}>Name</p>
        <AntInputComponent style={styles.inputs} />
      </div>
      <div>
      <p style={{ fontSize: "20px", marginLeft: "20px", }}>Name</p>
        <AntInputComponent style={styles.inputs} />
      </div>
      <div>
      <p style={{ fontSize: "20px", marginLeft: "20px", }}>Name</p>
        <AntInputComponent style={styles.inputs} />
      </div>
      <div>
      <p style={{ fontSize: "20px", marginLeft: "20px", }}>Name</p>

        <AntInputComponent style={styles.inputs} />
      </div>

      <div>
      <p style={{ fontSize: "20px", marginLeft: "20px", }}>Upload</p>
        <ImageUploadComponent />
      </div>

      </div>

    </div>

    </>
  );
}
