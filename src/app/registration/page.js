"use client";


import ButtonComponent from "@/components/AntButtonComponent";
import AntCardComponent from "@/components/AntCard Component";
import SearchBox from "@/components/AntSearchComponent";
import TableComponent from "@/components/AntTableComponents";
import MyAntTable from "@/components/AntTableComponents/index2";
import ApprovingSelectBox from "@/components/ApprovingSelectBox";
import BatchSelectBox from "@/components/BatchSelectBox";
import CitySelectBox from "@/components/CitySelectBox";
import CourseSelectBox from "@/components/CourseSelectBox";
import DrawerApp from "@/components/EditDrawerComponent/antdrawer";
import EditStudentDrawerComponent from "@/components/EditDrawerComponent/index2";
import DrawerComponent from "@/components/EditDrawerComponent/index2";
import EyeViewDrawerComponent from "@/components/EyeViewDrawerComponent";
import SimpleDrawer from "@/components/EyeViewDrawerComponent";
import GenderSelectBox from "@/components/GenderSelectbox";
import EyeViewComponent from "@/components/SideModalsComponent/EyeViewModalComponent";
import RightSideModal from "@/components/SideModalsComponent/ModalsComponent";
import YourPageComponent from "@/components/SideModalsComponent/ModalsComponent/index2";
import SideNavbar from "@/components/SideNavbarComponent";
import React from "react";



export default function RegistrationOfNewStudent() {
  return (
    <div style={{}}>

    <div
    //  style={{ width: "15%", height: "400px", border: "2px solid red" , backgroundColor : "green", position: "fixed",}}
    >
      <SideNavbar />
    </div>

<AntCardComponent/>


      <div
        className="space-x-11"
        style={{ marginTop: "2%", marginLeft: "12%", }}
      >
      {/* <RightSideModal/> */}
      {/* <YourPageComponent/> */}
{/* <EditStudentDrawerComponent/>
<EyeViewDrawerComponent/> */}


        <CitySelectBox />

        <CourseSelectBox />

        <BatchSelectBox />

        <ApprovingSelectBox />

        <GenderSelectBox />

        <div
          className=" max-auto absolute mt-[-2.3%] rounded-md "
          style={{ backgroundColor: "green", marginLeft: "56%", borderRadius:"10px"}}
        >
          <ButtonComponent />
        </div>

        <div className="max-auto absolute mt-[-2.4%] rounded-md "
          style={{  marginLeft: "73%", borderRadius:"10px"}}>
          <SearchBox />
          
        </div>

      </div>



      <br />


      <div >
      
      {/* <TableComponent /> */}
      <MyAntTable/>
      </div>

    </div>
  );
}
