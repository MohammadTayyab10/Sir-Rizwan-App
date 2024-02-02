// import React, { useState, useRef } from 'react';
'use client'
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
// import html2pdf from 'html2pdf.js';
import html2pdfmake from 'html2pdfmake';
import { Button } from 'antd';

import css from "../../app/globals.css"
import { useRouter } from 'next/navigation';
import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../../context';





export default function Id () {

    const [isDownloaded, setIsDownloaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef= useRef(null);
  const router= useRouter()
  // const {user,setUser}= useContext(GlobalContext)
const userLocal= localStorage.getItem("user")
console.log('User for ID Card is -->',userLocal)


// const handleDownload = async () => {
//     const canvas = await html2canvas(cardRef.current, { scale: 2 });
  
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4',
//     });
  
//     // Using addImage with callback to handle image loading
//     pdf.addImage(
//       canvas.toDataURL('image/png'),
//       'PNG',
//       0,
//       0,
//       210,
//       297, // Assuming A4 size
//       null,
//       'FAST',
//       function () {
//         pdf.save('id_card.pdf');
//       }
//     );
//   };


return(
<div className='bg-white'>

<div ref={cardRef}  className="id-card flex shadow-md rounded-md bg-white bg-cover bg-center bg-no-repeat mx-auto h-[550px] w-[400px]" style={{ backgroundImage: 'url("/images/roll number format.png")' }}>
    <div className="card-content flex overflow-hidden ">
      {/* <div className="bg-[/images/Capture.png]"> */}
        {/* <img src="/images/Capture.png" alt="" /> */}
        <img className='w-[40%] h-[160px] mt-[80px] ml-[30%] ' src={userLocal.imageUrl} />
        <div className='mt-[300px] ml-[-68%] ml-[-55%] w-[280px] overflow-hidden'>
        <p className='mx-auto'><strong>{userLocal.rollNo}</strong></p>
        <p className="break-words">
          <strong> Name: </strong>
          {userLocal.fullName} {userLocal.fatherName}
        </p>
        <p className="break-words">
          <strong> Course: </strong>
          {userLocal.course}
        </p>
        <p className="break-words">
          <strong> Batch: </strong>
          {userLocal.batch}
        </p>
        <p className="break-words">
          <strong> City: </strong>
          {userLocal.city}
        </p></div>
        {/* Add more fields and styling as needed */}
      {/* </div> */}
    </div>
        
  </div>


<Button type='primary' style={{backgroundColor:"#0d5667"}} className=' absolute fixed ml-[27%] mt-[560px] h-10' onClick={() => handleDownload(userLocal)}>
          Download ID Card
        </Button>
    
</div>
)



}