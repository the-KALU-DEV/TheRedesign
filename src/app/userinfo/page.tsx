"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("userInfo", JSON.stringify(formData));
    // Then navigate to Screen B
    router.push("/otherdetails");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Info</h1>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Mary"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white text-black rounded px-3 py-2 outline-none"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="JohnMary@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-black rounded px-3 py-2 outline-none"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white text-black rounded px-3 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-white text-black rounded px-3 py-2 outline-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-4xl mt-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="underline text-green-500 hover:text-green-300"
        >
          Return to previous page
        </button>

        <button
          onClick={handleNext}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
