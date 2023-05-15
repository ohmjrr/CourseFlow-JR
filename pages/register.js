import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Navbar from "@/components/Navbar";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [educational, setEducational] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sign up the user
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    // Insert user data into the public schema
    let { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        name: name,
        date_birth: dateBirth,
        education: educational,
        email: email,
        picture: picture,
        id: data.user.id,
        created_at: new Date().toISOString(),
      })
      .select("user_id");

    if (userError) {
      console.log(userError);
      return;
    }

    // Redirect to homepage
    router.push("/login");
  };

  return (
    <>
    <Navbar/>
    <div className="w-screen h-screen">
      <div className="flex flex-row justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className=" flex flex-col w-[453px] mt-[157px] rounded-md "
        >
          <h1 className="text-[#22269E] text-[36px] font-[500]">
            Register to start learning!
          </h1>
          <label htmlFor="first" className="mt-[37px]">
            Name
          </label>
          <input
            type="text"
            className=" p-[12px] w-full h-[48px] border-[#D6D9E4] border-[1px] rounded-[8px] "
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name and Lastname"
          />
          <label htmlFor="last" className="mt-[40px] ">
            Date of Birth
          </label>
          <input
            type="date"
            className=" p-[12px] w-full h-[48px] border-[#D6D9E4] border-[1px] rounded-[8px]"
            onChange={(e) => setDateBirth(e.target.value)}
            placeholder="Enter Name and Lastname"
          />
          <label htmlFor="last" className="mt-[40px]">
            Educational Background
          </label>
          <input
            type="text"
            className=" p-[12px] w-full h-[48px] border-[#D6D9E4] border-[1px] rounded-[8px]"
            onChange={(e) => setEducational(e.target.value)}
            placeholder="Enter Educational Background"
          />
          <label htmlFor="last" className="mt-[40px]">
            Email
          </label>
          <input
            type="email"
            className=" p-[12px] w-full h-[48px] border-[#D6D9E4] border-[1px] rounded-[8px]"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <label htmlFor="password" className="mt-[40px]">
            Password
          </label>
          <input
            type="text"
            name="last"
            className=" p-[12px] w-full h-[48px] border-[#D6D9E4] border-[1px] rounded-[8px]"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="mt-[40px] h-[60px] bg-[#2F5FAC] rounded-[12px] text-white font-[700] hover:bg-[#6991d5] transition-all duration-200"
          >
            Submit
          </button>
          <div className="flex mt-[37px]">
            <p className="font-[400] text-black">Already have an account?</p>
            <span className="text-[#2F5FAC] ml-[12px] font-[700]">Log in</span>
          </div>
        </form>
      </div>
    </div>
    </>

  );
}
