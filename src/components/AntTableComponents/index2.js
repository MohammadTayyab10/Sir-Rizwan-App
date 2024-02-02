import { Table, Space } from "antd";
// import 'antd/dist/antd.css';
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import RightSideModel from "../SideModalsComponent/ModalsComponent";
import { Button } from "antd/es/radio";
import AddStudentDrawer from "../EditDrawerComponent";
import SimpleDrawer from "../EyeViewDrawerComponent";
import EyeViewDrawerComponent from "../EyeViewDrawerComponent";
import EditStudentDrawerComponent from "../EditDrawerComponent/index2";
import EditDrawerApp from "../EditDrawerComponent/antdrawer";
import EyeViewDrawerApp from "../EyeViewDrawerComponent/eyeantdrawer";
import DeleteIconComponent from "../DeleteIconComponent";

const MyAntTable = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleAddStudent = () => {
    // Implement your logic to handle adding the student
    console.log("Adding student...");
    // For simplicity, you can perform an action, such as making an API call
  };

  const [isHovered, setIsHovered] = useState(false);

  const dataSource = [
    {
      key: "1",
      studentName: "Ubaid Raza",
      fatherName: "Tayyab",
      cnic: "430133344",
      phone: "03093322555",
      course: "Web & App",
      status: "Pending",
    },
    {
      key: "2",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "3",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "4",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "5",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "6",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "7",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "8",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "9",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "10",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "11",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "12",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "13",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },
    {
      key: "14",
      studentName: "Rizwan",
      fatherName: "Bhatti",
      cnic: "4209872297",
      phone: "0334309303",
      course: "Web & App",
      status: "Approved",
    },

    // Add more data as needed
  ];

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
    },
    {
      title: "CNIC",
      dataIndex: "cnic",
      key: "cnic",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          {/* <Button type="primary" onClick={handleToggleDrawer}> 
         
            <EditOutlined style={{ cursor: "pointer" }} onClick={handleToggleDrawer}/>
            {drawerVisible && (
              <AddStudentDrawer
              visible={drawerVisible}
              onClose={handleToggleDrawer}
              onAddStudent={handleAddStudent}
              />
            )}
          </Button> */}

          <EditDrawerApp/>

         <DeleteIconComponent/>

          {/* <EyeOutlined style={{ cursor: "pointer" }} /> */}
          <EyeViewDrawerApp />
{/* 
          <Button  style={{border:" none"}}>
            <DownloadOutlined style={{ cursor: "pointer" }} />
          </Button> */}

        </Space>
      ),
    },
  ];

  return (
    <Table
      style={{
        marginLeft: "8.5%",
        width: "90%",
        // backgroundColor:"yellow",
      }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default MyAntTable;
