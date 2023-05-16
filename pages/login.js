import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const rs = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(rs);
      if (rs.error) throw rs.error;
      const userId = rs.data.user?.id;
      console.log(userId);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(email);
  console.log(password);
  return (
    <>
    <Navbar/>
    <section className="max-w-screen-xl h-screen flex flex-col items-center justify-center mx-auto border-2 border-black">
      <div className="w-[453px] h-[446px]">
        <form onSubmit={(e) => handleSubmit(e)} className="h-full flex flex-col justify-between">
          <h1 className=" text-4xl text-[#22269E] ">Welcome back!</h1>
          <div>
            <label className="block">Email</label>
            <input
              placeholder="Enter Email"
              className="py-2 border-2 border-gray-200 rounded-xl w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="block">Password</label>
            <input
              placeholder="Enter password"
              className="py-2 border-2 border-gray-200 rounded-xl w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button
            type="submit"
            className=" bg-[#2F5FAC] rounded-md w-[453px] h-[60px] text-white"
          >
            Log in
          </button>
          <div className="flex gap-3">
            <p>Don’t have an account?</p>
            <Link href="/register">
              <p className=" text-[#2F5FAC] ">Register</p>
            </Link>
          </div>
        </form>
      </div>
    </section>
    </>

  );
}
