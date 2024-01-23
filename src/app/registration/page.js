"use client";

import ButtonComponent from "@/components/AntButtonComponent";
import SearchBox from "@/components/AntSearchComponent";
import TableComponent from "@/components/AntTableComponents";
import MyAntTable from "@/components/AntTableComponents/index2";
import ApprovingSelectBox from "@/components/ApprovingSelectBox";
import BatchSelectBox from "@/components/BatchSelectBox";
import CitySelectBox from "@/components/CitySelectBox";
import CourseSelectBox from "@/components/CourseSelectBox";
import GenderSelectBox from "@/components/GenderSelectbox";
import SideNavbar from "@/components/SideNavbarComponent";
import React from "react";

export default function RegistrationOfNewUser() {
  return (
    <div >

    <div
    //  style={{ width: "15%", height: "400px", border: "2px solid red" , backgroundColor : "green", position: "fixed",}}
    >
      <SideNavbar />
    </div>

      <div
        className="space-x-11"
        style={{ marginTop: "2%", marginLeft: "12%", }}
      >
        <CitySelectBox />

        <CourseSelectBox />

        <BatchSelectBox />

        <ApprovingSelectBox />

        <GenderSelectBox />

        <div
          className=" max-auto absolute mt-[-2.4%] rounded-md "
          style={{ backgroundColor: "green", marginLeft: "60%", borderRadius:"10px"}}
        >
          <ButtonComponent />
        </div>

        <div className="max-auto absolute mt-[-2.4%] rounded-md "
          style={{  marginLeft: "73%", borderRadius:"10px"}}>
          <SearchBox />
        </div>

      </div>


      <br />
      {/* <br />
      <br />
      <br />
      <br /> */}

      <div >
      
      {/* <TableComponent /> */}
      <MyAntTable/>
      </div>

    </div>
  );
}
