"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const style = {
    input: "text-gray-700 rounded px-3 py-2 outline-none bg-gray-100"
}

export default function UserInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field as soon as the user types something
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleNext = () => {
    // Validate required fields
    const newErrors = {
      fullName: formData.fullName ? "" : "Full name is required.",
      email: formData.email ? "" : "Email is required.",
      phone: formData.phone ? "" : "Phone number is required.",
      gender: formData.gender ? "" : "Gender is required.",
    };

    setErrors(newErrors);

    // If any error message exists, do not proceed.
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // All required fields are filled. Save data and proceed.
    localStorage.setItem("userInfo", JSON.stringify(formData));
    router.push("/otherdetails");
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Info</h1>
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
            className={style.input}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
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
            className={style.input}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
            className={style.input}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={style.input}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full max-w-4xl mt-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-green-500 hover:text-green-300"
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
