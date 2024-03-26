"use client";

import dynamic from "next/dynamic";

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
import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";


const DynamicModal = dynamic(() => import("antd").then((antd) => antd.Modal), {
  ssr: false,
});

export default function RegistrationOfNewStudent() {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    checkLocalStorage(); // Check local storage on component mount
    const intervalId = setInterval(checkLocalStorage, 60000); // Check local storage every minute
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setIsFormValid(adminName === "a" && adminPassword === "a");
  }, [adminName, adminPassword]);

  const handleAdminLogin = () => {
    if (isFormValid) {
      const expirationTime = Date.now() + 60000; // 1 minute in milliseconds
      localStorage.setItem("adminName", adminName);
      localStorage.setItem("adminPassword", adminPassword);
      localStorage.setItem("expirationTime", expirationTime);
      setModalOpen(false);
    } else {
      alert("Invalid admin credentials");
    }
  };

  const checkLocalStorage = () => {
    const storedAdminName = localStorage.getItem("adminName");
    const storedAdminPassword = localStorage.getItem("adminPassword");
    const expirationTime = localStorage.getItem("expirationTime");

    if (storedAdminName && storedAdminPassword && expirationTime) {
      const currentTime = Date.now();
      if (currentTime < parseInt(expirationTime, 10)) {
        setAdminName(storedAdminName);
        setAdminPassword(storedAdminPassword);
        setModalOpen(false);
      } else {
        clearLocalStorage();
      }
    } else {
      setModalOpen(true);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminPassword");
    localStorage.removeItem("expirationTime");
    setAdminName(""); // Clear adminName state
    setAdminPassword(""); // Clear adminPassword state
    setModalOpen(true); // Reopen the modal for admin login
  };

  return (
    <div style={{}}>
      <DynamicModal
        title="Admin Login"
        visible={modalOpen}
        footer={null}
        centered
        destroyOnClose
        afterClose={() => {
          // Reset adminName and adminPassword when the modal is closed
          setAdminName("");
          setAdminPassword("");
        }}
      >
        <form className="mx-auto space-y-[20px]">
          <Input
            className="w-[100%] h-[40px]"
            placeholder="Admin Name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            autoComplete="off"
          />
          <Input.Password
            className="w-[100%] h-[40px]"
            placeholder="Admin Key"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            autoComplete="off"
          />
          <Button
            className="mx-auto w-[20%] h-[40px] "
            onClick={handleAdminLogin}
            disabled={!isFormValid}
          >
            Login
          </Button>
        </form>
      </DynamicModal>

      {!modalOpen && (
        <>
          <div>
            <SideNavbar />
          </div>

          <AntCardComponent />

          <div
            className="space-x-11"
            style={{ marginTop: "2%", marginLeft: "12%" }}
          >
            <CitySelectBox />
            <CourseSelectBox />
            <BatchSelectBox />
            <ApprovingSelectBox />
            <GenderSelectBox />

            <div
              className=" max-auto absolute mt-[-2.3%] rounded-md "
              style={{ backgroundColor: "green", marginLeft: "56%", borderRadius: "10px" }}
            >
              <ButtonComponent />
            </div>

            <div className="max-auto absolute mt-[-2.4%] rounded-md " style={{ marginLeft: "73%", borderRadius: "10px" }}>
              <SearchBox />
            </div>
          </div>

          <br />

          <div>
            <MyAntTable />
          </div>
        </>
      )}
    </div>
  );
}
