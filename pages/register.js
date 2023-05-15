import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

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
        password: password
      })
  
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
        created_at: new Date().toISOString()
      })
      .select("user_id");
      
    if (userError) {
      console.log(userError);
      return;
    }
    
  };
  

  return (
    <div className="w-screen bg-blue-100 h-screen">
        
    <div className="flex flex-row justify-center items-center">
        
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" flex flex-col w-[400px] bg-yellow-200 p-5 rounded-md "
    >
      <label htmlFor="first">name:</label>
      <input
        type="text"
        className=" bg-blue-200 "
        onChange={(e) => setName(e.target.value)}
      /> 
      <label htmlFor="last">date of birth:</label>
      <input
        type="date"
        className=" bg-blue-200 "
        onChange={(e) => setDateBirth(e.target.value)}
      />
      <label htmlFor="last">educational:</label>
      <input
        type="text"
        className=" bg-blue-200 "
        onChange={(e) => setEducational(e.target.value)}
      />
      <label htmlFor="last">email:</label>
      <input
        type="email"
        className=" bg-blue-200 "
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">password:</label>
      <input
        type="text"
        name="last"
        className=" bg-blue-200 "
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="mt-[30px] bg-red-200 ">
        Submit
      </button>
    </form>
    </div>
    </div>

  );
}
