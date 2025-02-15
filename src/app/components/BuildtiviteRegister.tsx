"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function BuildtiviteRegister() {
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

  return (
    <section className="flex flex-col items-center justify-center px-4 bg-gray-50">
      {/* <h1 className="text-3xl font-bold text-gray-900">Join Buildtivite</h1>
      <p className="text-gray-600 mt-2">Fill in your details to get started.</p>

      {/* Form
      <form className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-6 space-y-6">
        {/* Form Fields 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name 
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Mary"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email 
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="JohnMary@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Number 
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <div className="flex border border-gray-300 rounded-lg bg-gray-100 p-3">
              <span className="flex items-center space-x-2 pr-2 border-r border-gray-300">
                🇳🇬 <span className="text-gray-700">+234</span>
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full bg-transparent focus:outline-none px-2"
              />
            </div>
          </div>

          {/* Gender 
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Navigation Buttons 
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="text-green-600 font-medium hover:underline"
            onClick={() => router.back()}
          >
            Return to previous page
          </button>
          <button
            type="submit"
            className={twMerge(
              "px-6 py-3 text-white text-lg font-medium bg-green-600 rounded-full",
              "hover:bg-green-700 transition"
            )}
          >
            Next
          </button>
        </div>
      </form> */}
    </section>
  );
}
