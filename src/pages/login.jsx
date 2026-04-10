import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const formHandeler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const errorHandler = () => {
    if(!form.email){
        setError("Email is required");
        return
    }
    if(! form.password){
        setError("password is required");
        return
    }
    console.log(form)
  };

  return (
    <>
      <div className="text-2xl text-center my-5">login</div>

      <div className="flex flex-col justify-center gap-5">
        <input
          className="border m-auto p-2"
          type="text"
          name="email"
          placeholder="Email"
          onChange={formHandeler}
        />
        <input
          className="border m-auto p-2 "
          type="text"
          name="password"
          placeholder="Password"
          onChange={formHandeler}
        />
        {error && <small className=" text-red-600 m-auto ">{error}</small>}

    <button type="button" onClick={errorHandler} className="bg-green-600 w-1/6 p-2 border-2 m-auto">submit</button>

      </div>
    </>
  );
}
