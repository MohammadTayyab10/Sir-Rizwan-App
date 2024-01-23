import connectToDb from "@/database";
import Register from "@/models/registration";
import { data } from "autoprefixer";
import Joi from "joi";
import { NextResponse } from "next/server";


const RegistrationSchema = Joi.object({
    fullName: Joi.string().required(),
    fatherName: Joi.string().required(),
    email: Joi.string().required(),
    city: Joi.string().required(),
    cnic: Joi.string().required(),
    phone: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    gender: Joi.string().required(),
    qualification: Joi.string().required(),
    address: Joi.string().required(),
    imageUrl: Joi.string().required()
})



export const dynamic = "force-dynamic"




export async function POST(req) {
    try {
        await connectToDb();

       

            const extractData = await req.json();
            const {
                 fullName,
                fatherName,
                email,
                city,
                cnic,
                phone,
                dateOfBirth,
                gender,
                qualification,
                address,
                imageUrl}= extractData;

            const { error } = RegistrationSchema.validate({
                fullName,
                fatherName,
                email,
                city,
                cnic,
                phone,
                dateOfBirth,
                gender,
                qualification,
                address,
                imageUrl
            })

            if (error) {
                return NextResponse.json({
                    success: false,
                    message: error.details[0].message,
                })
            }



            const newlyRegisteredUser = await Register.create(extractData)
            if(newlyRegisteredUser){
                return NextResponse.json({
                    success: true,
                    message: "Registered Successfully!",
                })
            }else{
                return NextResponse.json({
                    success: false,
                    message: "Failed to register. Plz try again! ",
                })
            }




        



    } catch (error) {
        console.log("Error in adding new product-->", error);

        return NextResponse.json({
            success: false,
            message: "Something went Wrong, please Try Again later!"
        })
    }
};