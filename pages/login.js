import React from "react";
import Navbar from "@/components/Navbar";

export default function login() {
  return (
    <>
    <Navbar/>
    <section className="max-w-screen-xl h-screen flex flex-col items-center justify-center mx-auto border-2 border-red-950">
      <div className="border-2 border-red-950 flex flex-col  w-[453px] h-[446px]">
        <h1 className=" text-4xl text-blue-800 ">Welcome back!</h1>
        <div className="flex flex-col justify-between border-2 border-red-200">
          <div>
            <label className="block">Email</label>
            <input
              placeholder="Enter Email"
              className="py-2 border-2 border-gray-200 rounded-xl"
            ></input>
          </div>
          <div>
            <label className="block">Password</label>
            <input
              placeholder="Enter password"
              className="py-2 border-gray-200 rounded-xl"
            ></input>
          </div>

          <button className=" bg-blue-600 rounded-md w-[453px] h-[60px] text-white">
            Log in
          </button>
          <div className="flex">
            <p>Don’t have an account?</p>
            <p>Register</p>
          </div>
        </div>
      </div>
    </section>
    </>

  );
}
