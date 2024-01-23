// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">

// <h1>Hello Rizwan Bhai </h1>

//     </main>
//   );
// }

"use client";

// import style from "./globals.css"
import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent";
import { registerUser } from "@/services/register";
import {
  RegistartionformControls,
  firebaseConfig,
  firebaseStorageURL,
} from "@/utils";

import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);
const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();

  const randomStringValue = Math.random().toString(36).substring(2, 16);
  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUploadingImageToFirebase(file) {
  const getFileName = createUniqueFileName(file);

  const storageRefrence = ref(storage, `ecommerce/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageRefrence, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadUrl) => resolve(downloadUrl))
          .catch((error) => reject(error));
      }
    );
  });
}

const initialFormData = {
  fullName: "",
  fatherName: "",
  email: "",
  city: "",
  cnic: "",
  phone: "",
  dateOfBirth: "",
  gender: "male",
  qualification: "",
  address: "",
  imageUrl: "",
};

export default function RegisterUser() {
  const [formData, setFormData] = useState(initialFormData);

  async function handleImage(event) {
    console.log(event.target.files);

    const extractImageUrl = await helperForUploadingImageToFirebase(
      event.target.files[0]
    );

    console.log(extractImageUrl);

    if (extractImageUrl) {
      setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      });
    }
  }

  async function handleRegister() {
    const res = await registerUser(formData);
    console.log(res);
  }

  console.log(formData);
  return (
    <div className="mr-0 mb-0 ml-0 relative">
      <div className="items-center justify-between mt-8 w-full bg-[#0d2757] lg:h-16 md:h-16 mx:h-16 lg:text-4xl md:text-4xl mx:text-4xl text-white flex items-center justify-center text-2xl xs:text-1xl font-bold h-10 ">
        <p className="lg:pl-[30%] md:pl-[22%] mx:pl-[20%]">
          Course Registration Form
        </p>

        <button className="inline-flex w-[20%] h-8 lg:h-12 md:h-12 mx:h-12 lg:text-1xl md:text-1xl mx:text-1xl items-center justify-center bg-[#0d2757] mr-2 text-xs text-white border border-white-500 uppercase tracking-wide rounded-md">
          Payment Verify
        </button>
      </div>

      <div className="w-full bg-white text-[#0d2757] lg:font-bold md:font-bold mx:font-bold lg:h-8 md:h-8 mx:h-8 flex items-center justify-center text-1xl  h-6">
        Service-Education-Registration
      </div>

      <div className=" mt-8 mx-auto h-[300px] w-full  lg:w-[60%] md:w-[60%] mx:w-[60%] rounded-xl mb-[30px]">
        <img
          className="h-[300px] mx-auto w-full rounded-xl"
          src="/images/Rizwan.png"
        />
      </div>

      <div className="mx-auto w-full lg:w-[60%] md:w-[60%] mx:w-[60%] flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
        <div
          className="w-full mt-6 mr-0 mb-0 ml-0 space-y-4 lg:space-y-1 md:space-y-1 mx:space-y-1
                lg:grid grid-cols-2 gap-6 md:grid grid-cols-2 gap-6 mx:grid grid-cols-2 gap-6
                 "
        >
          {RegistartionformControls.map((item) =>
            (item.componentType === "input" && item.id === "fatherName") ||
            item.id === "fullName" ||
            item.id === "email" ||
            item.id === "city" ||
            item.id === "cnic" ||
            item.id === "phone" ||
            item.id === "dateOfBirth" ? (
              <InputComponent
                type={item.type}
                placeholder={item.placeholder}
                label={item.label}
                inputMode={item.inputmode}
                value={formData[item.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [item.id]: event.target.value,
                  });
                }}
              />
            ) : item.componentType === "select" ? (
              <SelectComponent
                label={item.label}
                options={item.options}
                value={formData[item.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [item.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
        </div>

        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          {/* {" "} */}
          {RegistartionformControls.map((item) =>
            (item.componentType === "input" && item.id === "qualification") ||
            item.id === "address" ? (
              <InputComponent
                type={item.type}
                placeholder={item.placeholder}
                label={item.label}
                inputMode={item.inputmode}
                value={formData[item.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [item.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
        </div>

        <input
          className="lg:w-[20%] xl md:w-[20%]"
          style={{
            border: "2px solid gray",
            borderRadius: "8px",
            height: "100px",
          }}
          accept="image/*"
          onChange={handleImage}
          max="1000000"
          type="file"
        />
        {/* </div> */}

        <button
          onClick={handleRegister}
          className="inline-flex lg:w-[25%] md:w-[25%] mx:w-[25%] h-[55px] mt-[20px] items-center justify-center mb-[-30px] ml-[35%] lg:ml-[39%] md:ml-[39%] mx:ml-[39%] bg-[#0d2757] px-6 py-4 text-lg text-white font-medium uppercase tracking-wide rounded-md"
        >
          Register
        </button>
      </div>
    </div>
  );
}
