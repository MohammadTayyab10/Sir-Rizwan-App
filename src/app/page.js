
'use client'

// import style from "./globals.css"
// import { RegistartionformControls, firebaseConfig, firebaseStorageURL } from "@/utils";
// import { useState } from 'react';
import { message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useContext, useRef, useState } from "react";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import { registerUser } from "../services/register";
import { RegistartionformControls, firebaseConfig, firebaseStorageURL } from '../utils';
import ImageUpload from '../components/UploadComponent';
import IdCardModal from '../components/IdCardComponent';
import { GlobalContext } from '../context';
import { useRouter } from 'next/navigation';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL)
const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();

    const randomStringValue = Math.random().toString(36).substring(2, 16)
    return `${getFile.name}-${timeStamp}-${randomStringValue}`

}


async function helperForUploadingImageToFirebase(file) {

    const getFileName = createUniqueFileName(file);

    const storageRefrence = ref(storage, `ecommerce/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageRefrence, file)



    return new Promise((resolve, reject) => {
        uploadImage.on('state_changed', (snapshot) => { }, (error) => {
            console.log(error);
            reject(error)
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref).then(downloadUrl => resolve(downloadUrl)).catch(error => reject(error))
        }
        )

    })


}

const initialFormData = {
    fullName: 'be',
    fatherName: 'ebenjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    email: 'abc@gmail.com',
    city: 'egbge',
    cnic: 'eerve',
    phone: 'vreve',
    dateOfBirth: '1/1/2023',
    gender: 'male',
    qualification: ' refv',
    address: 'vs',
    imageUrl: 'https://avatars.githubusercontent.com/u/121576047?s=48&v=4'
}




export default function RegisterUser() {

    const [resData, setResData] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [formData, setFormData] = useState(initialFormData)
    const [isButtonClicked,setButtonClicked]= useState(false)
    const [isButtonClicked1,setButtonClicked1]= useState(false)
    const [emailState,setEmailState]= useState(false)
    const inputRef = useRef(null);;
    const nameRegex = /^[A-Za-z][a-z]*(?: [A-Za-z][a-z]*)*$/;
    // const emailRegex = /^\S+@\S+(\.\S+)?$/;

    // const {user,setUser}=useContext(GlobalContext)


    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must be smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };

      const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      );

    async function handleChange(info) {

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
          }
          if (info.file.status === 'done') {
            // Get this url from response in the real world.
            getBase64(info.file.originFileObj, (url) => {
              setLoading(false);
              setImageUrl(url);
            });

            console.log(info.file);

            const extractImageUrl = await helperForUploadingImageToFirebase(info.file)
    
            console.log(extractImageUrl);
    
            if (extractImageUrl) {
                setFormData({
                    ...formData,
                    imageUrl: extractImageUrl
                })
    
            }

          }

        
        
    }

// cnic and phone
const formatPhoneNumber = (input) => {
    // Your formatting logic here (e.g., adding hyphens)
    // This is just a basic example, you may need to adjust it based on your requirements
    const formattedNumber = input.replace(/\D/g, '').replace(/(\d{4})(\d{7})/, '$1-$2');
    return formattedNumber;
  };

  const handleChange2 = (event) => {
    const inputValue=event.target.value

    if (inputValue.length <= 12) {
        const formattedPhone = formatPhoneNumber(inputValue);


    setFormData({
        ...formData,
        phone: formattedPhone
    });}
}


const formatCnicNumber = (input) => {
    // Your formatting logic here (e.g., adding hyphens)
    // This is just a basic example, you may need to adjust it based on your requirements
    const formattedCnic = input.replace(/\D/g, '').replace(/^(\d{5})(\d{7})(\d{1})$/, '$1-$2-$3');
    return formattedCnic;
  };

  const handleChange1 = (event) => {
    const inputValue=event.target.value

    if (inputValue.length <= 15) {
        const formattedCnic = formatCnicNumber(inputValue);


    setFormData({
        ...formData,
        cnic: formattedCnic
    });}
}

  

// cnic and phone
    async function handleRegister() {
        if (formData.email.includes('@') && formData.email.includes('.com') && !formData.email.includes(' ')){



      
      

        const res = await registerUser(formData);
        // setResData(res.user)
        console.log("res.user-->",res.user);
        // setUser(res?.user)
        // console.log(user);
        localStorage.setItem("user",JSON.stringify( res?.user))
     
        if(res.success){
            setShowModal(true);
        }

       
      
         

        setButtonClicked(true);

    // Set a timeout to reset the button state after a certain duration
    setTimeout(() => {
      setButtonClicked(false);
    }, 300);}
    else{


        const emailInput = document.getElementById('emailInput');
      if (emailInput) {
        emailInput.focus();
        alert('Please enter a valid email address.');
        return;
      }
      // Optionally, you can show an error message or handle the validation failure in another way
      console.log("id error");
          
    }
    }


    // console.log(formData);



    function isFormValid(){
        return formData && formData.fullName && formData.fullName.trim() !== '' && formData.fatherName && formData.fatherName.trim() !== '' && formData.email && formData.email.trim() !== '' && formData.cnic && formData.cnic.trim() !== '' && formData.phone && formData.phone.trim() !== '' && formData.city && formData.city.trim() !== '' && formData.address && formData.address.trim() !== '' && formData.qualification && formData.qualification.trim() !== '' ?true: false
     }
const closeModal = () => {
    
    setShowModal(false);
  };

  const router = useRouter()

    return (
        <div className="mr-0 mb-0 ml-0 relative">

            <div style={{boxShadow:'5px 0px 1px 12px rgba(0, 0, 0, 0.1)'}} className="items-center justify-between mt-8 w-full bg-[#248ba5] lg:h-16 md:h-16 mx:h-16 lg:text-4xl md:text-4xl mx:text-4xl text-white flex items-center justify-center text-2xl xs:text-1xl text-[20px] font-bold h-12"><p className="lg:pl-[30%] md:pl-[12%] mx:pl-[20%]  ml-4">Course Registration Form</p>

                <button style={{boxShadow:'1px 5px 5px 0px rgba(0.2, 0.2, 0.2, 0.2)'}}  className="inline-flex w-[20%] h-10 lg:h-12 md:h-12 mx:h-12 lg:text-lg md:text-lg mx:text-1xl mr-2 text-xs items-center justify-center bg-[#248ba5] ml-2 text-white border border-white-500 uppercase tracking-wide rounded-md shadow-md hover:bg-[#155261] transition duration-300" onClick={() => router.push("/payment")}
                >Payment Verify </button>
            </div>

            <div style={{boxShadow:'1px 1px 1px 4px rgba(0.1, 0.1, 0, 0.1)'}}  className="w-full bg-white text-[#248ba5] lg:font-bold md:font-bold mx:font-bold lg:h-8 md:h-8 mx:h-8 flex items-center justify-center text-1xl  h-6">Service-Education-Registration
            </div>

            <div style={{boxShadow:'1px 5px 5px 8px rgba(0.2, 0.2, 0.2, 0.2)'}} className=" mt-8 mx-auto h-[300px] w-full  lg:w-[60%] md:w-[60%] mx:w-[60%] rounded-xl mb-[30px]"><img className="h-[300px] mx-auto w-full rounded-xl"
                src="/images/Rizwan.png"

            /></div>







            <div style={{boxShadow:'1px 5px 5px 8px rgba(0.2, 0.2, 0.2, 0.2)'}} className="mx-auto w-full lg:w-[60%] md:w-[60%] mx:w-[60%] flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
                <div className="w-full mr-0 mb-0 ml-0 space-y-4 lg:space-y-1 md:space-y-1 mx:space-y-1
                lg:grid grid-cols-2 gap-6 md:grid grid-cols-2 gap-6 mx:grid grid-cols-2 gap-6
                 ">

                    <InputComponent
                        type="text"
                        placeholder="Full Name"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={(event) => {

                            const newName = event.target.value;

                            // Capitalize the first letter of each word
                            const formattedName = newName.replace(/\b\w/g, (char) => char.toUpperCase());
                    
                            // Update the state with the formatted name
                            setFormData({
                                ...formData,
                                fullName: formattedName
                            });
                        }} />
                    <InputComponent
                        type="text"
                        placeholder="Father Name"
                        label="Father Name"

                        value={formData.fatherName}
                        onChange={(event) => {
                            const newFatherName = event.target.value;

                            // Capitalize the first letter of each word
                            const formattedFatherName = newFatherName.replace(/\b\w/g, (char) => char.toUpperCase());
                    
                            // Update the state with the formatted name
                            setFormData({
                                ...formData,
                                fatherName: formattedFatherName
                            });
                        }} />
                   <InputComponent
   id="emailInput"
   type="text"
    placeholder="Email"
    label="Email"
    value={formData.email}
    onChange={(event) => {
      
        setFormData({
            ...formData,
            email: event.target.value
        });
    

    }}
/>

                    <InputComponent
                        type="text"
                        maxLength="15"
                        inputMode="numeric"
                        placeholder="00000-0000000-0"
                        label="Cnic/B-form"

                        value={formData.cnic}
                        onChange={(event) => {

                           

                            handleChange1(event)

                            

                            
                        }} />
                    <InputComponent
                        type="text"
                        id="phoneInput"
                        maxLength="12"
                        inputMode="numeric"
                        placeholder="0000-0000000"
                        label="Phone"
                        value={formData.phone}
                        onChange={(event) => {

                            handleChange2(event)
                            
                            
                        }} />
                    <InputComponent
                        type="text"
                        placeholder="City"
                        label="City"
                        value={formData.city}
                        onChange={(event) => {
                            const newCity = event.target.value;

                            // Capitalize the first letter of each word
                            const formattedCity = newCity.replace(/\b\w/g, (char) => char.toUpperCase());
                    
                            // Update the state with the formatted name
                            setFormData({
                                ...formData,
                                city: formattedCity
                            });
                        }} />
                    <InputComponent
                        type="date"
                        placeholder="Date Of Birth"
                        label="Date Of Birth"

                        value={formData.dateOfBirth}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                dateOfBirth: event.target.value
                            });
                        }} />

                    <SelectComponent
                        label="Select Gender"
                        options={[
                            { id: "male", label: "Male" },
                            { id: "female", label: "Female" },
                          ]}
                        value={formData.gender}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                gender: event.target.value,
                            });
                        }}
                    />



                </div>


                <div className="w-full mt-[35px] lg:mt-[30px] mx:mt-[30px] md:mt-[30px] mr-0 mb-0 ml-0 space-y-6">
                    <InputComponent
                        type="text"
                        placeholder="Qualification"
                        label="Qualification"
                        value={formData.qualification}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                qualification: event.target.value
                            });
                        }} />
                    <InputComponent
                        type="text"
                        placeholder="Address"
                        label="Address"
                        value={formData.address}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                address: event.target.value
                            });
                        }} />

                </div>

                

                <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>


                {/* <input className="lg:w-[20%] xl md:w-[20%]" style={{ border: '2px solid gray', borderRadius: '8px', height: '100px', }}
                    accept="image/*"
                    onChange={handleImage}
                    max="1000000"
                    type="file"

                /> */}
                {/* </div> */}

                


                <button
                    onClick={handleRegister}
                    className={`disabled:opacity-50 inline-flex w-[40%] lg:w-[25%] md:w-[25%] mx:w-[25%] h-[55px] mt-[20px] items-center justify-center mb-[-10px] mx-auto bg-${isButtonClicked ? '[#155261]' : '[#248ba5]'} text-white font-semibold uppercase tracking-wide rounded-md transition duration-300 ease-in-out`}
                    disabled={!isFormValid()}
                    >Register</button>
                
                <button
                onClick={()=>{setButtonClicked1(true) ;
                    setTimeout(() => {
                    setButtonClicked1(false);
                  }, 300);}}
                    className={`disabled:opacity-50 inline-flex w-[40%] lg:w-[25%] md:w-[25%] mx:w-[25%] h-[55px] mt-[20px] items-center justify-center mb-[-10px] mx-auto bg-${isButtonClicked1 ? '[#155261]' : '[#248ba5]'} text-white font-semibold uppercase tracking-wide rounded-md transition duration-300 ease-in-out`}
                >Payment Verify</button>
            </div>

    <div>
      <IdCardModal isOpen={showModal} onClose={closeModal} userData={formData} />
    </div>


        

        </div>

    )
}


