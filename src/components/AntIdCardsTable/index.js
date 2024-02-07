"use client";

import { Table, Button } from 'antd';

const data = [
  {
    key: '1',
    course: 'Course 1',
    batch: 'Batch 1',
  },
  {
    key: '2',
    course: 'Course 2',
    batch: 'Batch 2',
  },
  {
    key: '3',
    course: 'Course 3',
    batch: 'Batch 3',
  },
];

const columns = [
  {
    title: 'Course',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Batch',
    dataIndex: 'batch',
    key: 'batch',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button style={{backgroundColor : "#248ba5",}} onClick={() => handleDownload(record.key)}>
        Download ID Card
      </Button>
    ),
  },
];

const handleDownload = (key) => {
  // Logic to handle ID card download for the corresponding record
  console.log('Downloading ID card for record with key:', key);
};

const DownloadIdCardTable = () => {
  return <Table columns={columns} dataSource={data} style={{ width: '550px',  borderRadius: "0px" }}  />;
};

export default DownloadIdCardTable;
