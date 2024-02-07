"use client";

import DownloadIdCardTable from "@/components/AntIdCardsTable";
import AntInputComponent from "@/components/AntInput";
import { Button } from "antd";
import React from "react";

function DownloadIdCard() {
  return (
    <div style={{ 
      // backgroundColor: "lightgreen"
     }}>
      <div
        // style={{ boxShadow: "5px 0px 1px 12px rgba(0, 0, 0, 0.1)" }}
        style={{ boxShadow: "0px -5px 1px 12px rgba(0, 0, 0, 0.1)" }}
        className="items-center justify-between mt-8 w-full bg-[#248ba5] lg:h-16 md:h-16 mx:h-16 lg:text-4xl md:text-4xl mx:text-4xl text-white flex items-center justify-center text-2xl xs:text-1xl text-[20px] font-bold h-12"
      >
        <p
          style={{ alignItems: "center", marginLeft: "80px" }}
          className="lg:pl-[30%] md:pl-[12%] mx:pl-[20%]  ml-6"
        >
          Download Id Card
        </p>
      </div>

      <div
      //          border border-2 border-solid
      //  border-blue-500 bg-white

        className="mx-auto w-[750px] mt-9
       "
      >
        <div
          style={{}}
          // border border-1 border-solid border-black bg-white
          className="mx-auto  w-[550px]"
        >
          <p style={{ fontSize: "17px", fontWeight: "bold", marginLeft: "2px", color: "#248ba5" }}>
            CNIC (Which you provided during form submission)
          </p>

          <AntInputComponent
            style={{
              borderRadius: "4px",
              border: "1px solid #248ba5",
              // backgroundColor: "wheat ",
              height: "50px",
              width: "550px",
            }}
            placeholder={"CNIC (Which you provided during form submission)"}
            //   style={styles.inputs}
          />
        </div>

        <div className="mx-auto w-[550px] border border-5 border-green-100">
          <Button
            style={{
              backgroundColor: "#248ba5",
              fontSize: "20px",
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              width: "550px",
              justifyContent: "center",
              height: "50px",
              margin: "0 auto",
              marginTop: "5px",
              borderRadius: "4px",
            }}
          >
            SUBMIT
          </Button>
        </div>

        <div
        style={{ width:"550px",
          // backgroundColor: "purple"
        }}
        // border border-10 border-solid border-black
         className="mx-auto ml-[100px]  ">
        <DownloadIdCardTable />
        </div>
      
      </div>
  
  
  
  
    </div>
  );
}

export default DownloadIdCard;
