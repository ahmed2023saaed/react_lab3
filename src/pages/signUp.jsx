


import React from "react";
import { Formik, useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup"

export default function SignUp(){
const navigate = useNavigate();

    const Schema = Yup.object({
        fname: Yup.string().required("fname is required"),
        lname: Yup.string().required("lname is required"),
        email:Yup.string().email("invalid email").required("email is required"),
        password:Yup.string().min(6, "min 6 characters").required("password is required")
    })

    const {values, handleChange, handleSubmit, errors} = useFormik({
        initialValues:{
            fname:"",
            lname:"",
            email:"",
            password:""
        },
        onSubmit: ()=>{
            navigate("/")
        },
        validationSchema:Schema
    })
    return(
        <>

        <div className="flex flex-col justify-center items-center gap-5 m-5">
            <div className="flex flex-col">
            <label htmlFor="fname">First Name</label>
            <input className=" border-2 p-2 " value={values.fname}  type="text" onChange={handleChange} id="fname" name="fname" />
            </div>
            {errors && <p className="text-red-600">{errors.fname}</p>}
            
            <div className="flex flex-col">
            <label htmlFor="lname">Last Name</label>
            <input className=" border-2 p-2 " value={values.lname} type="text" onChange={handleChange} id="lname" name="lname" />
            </div>
            {errors && <p className="text-red-600">{errors.lname}</p>}
            <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className=" border-2 p-2 "  type="text" onChange={handleChange} value={values.email} id="email" name="email" />
            </div>
            {errors && <p className="text-red-600">{errors.email}</p>}
            <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className=" border-2 p-2 "  type="text" value={values.password} onChange={handleChange} id="password" name="password" />
            </div>
            {errors && <p className="text-red-600">{errors.password}</p>}
            <button className="bg-green-600 w-1/7 py-2 text-lg border-2" type="button" onClick={handleSubmit}>signUp</button>

        </div>
        </>
    )
}