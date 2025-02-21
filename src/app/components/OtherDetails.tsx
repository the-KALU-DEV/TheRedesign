// "use client";

// import React from "react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function OtherDetails() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     experience: "",  // prior experience
//     realWorld: "",   // real-world solutions
//     workingLaptop: "", 
//     reasonForJoining: "",
//     importanceScale: "",
//     heardAbout: [] as string[], // multiple checkboxes
//   });

//   // Handle text/select changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle multiple checkboxes for "heardAbout"
//   const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       // Add value if checked
//       setFormData((prev) => ({ ...prev, heardAbout: [...prev.heardAbout, value] }));
//     } else {
//       // Remove value if unchecked
//       setFormData((prev) => ({
//         ...prev,
//         heardAbout: prev.heardAbout.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handleNext = () => {
//     // Store data in localStorage or pass to next screen
//     localStorage.setItem("otherDetails", JSON.stringify(formData));
//     // Navigate to Payment screen (Screen C)
//     router.push("/paymentscreen");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Details</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
//         {/* Experience */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium" htmlFor="experience">
//             Have you any prior experience either through courses, bootcamps, or self-learning?
//           </label>
//           <select
//             id="experience"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             className="bg-white text-black rounded px-3 py-2 outline-none"
//           >
//             <option value="">Select an option</option>
//             <option value="none">None</option>
//             <option value="basic">Basic</option>
//             <option value="intermediate">Intermediate</option>
//             <option value="advanced">Advanced</option>
//           </select>
//         </div>

//         {/* Real-world solutions */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium" htmlFor="realWorld">
//             Have you worked on any real-world solutions that solve business problems?
//           </label>
//           <select
//             id="realWorld"
//             name="realWorld"
//             value={formData.realWorld}
//             onChange={handleChange}
//             className="bg-white text-black rounded px-3 py-2 outline-none"
//           >
//             <option value="">Select an option</option>
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         {/* Working laptop */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium" htmlFor="workingLaptop">
//             Do you have a working laptop?
//           </label>
//           <select
//             id="workingLaptop"
//             name="workingLaptop"
//             value={formData.workingLaptop}
//             onChange={handleChange}
//             className="bg-white text-black rounded px-3 py-2 outline-none"
//           >
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>

//         {/* Reason for joining */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium" htmlFor="reasonForJoining">
//             Why do you want to join us?
//           </label>
//           <textarea
//             id="reasonForJoining"
//             name="reasonForJoining"
//             placeholder="e.g., to gain real-world experience, land first tech job, etc."
//             value={formData.reasonForJoining}
//             onChange={(e) => handleChange(e as any)}
//             className="bg-white text-black rounded px-3 py-2 outline-none h-24"
//           />
//         </div>

//         {/* Importance scale */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium" htmlFor="importanceScale">
//             On a scale of 1-10, why is gaining real-world experience important to you?
//           </label>
//           <input
//             id="importanceScale"
//             name="importanceScale"
//             type="number"
//             min="1"
//             max="10"
//             value={formData.importanceScale}
//             onChange={handleChange}
//             className="bg-white text-black rounded px-3 py-2 outline-none"
//           />
//         </div>

//         {/* How did you hear about Codetivite? */}
//         <div className="flex flex-col">
//           <label className="mb-1 font-medium">How did you hear about Codetivite?</label>
//           <div className="flex flex-col gap-2">
//             {["Instagram", "Twitter", "LinkedIn", "Referral", "Others"].map((option) => (
//               <label key={option} className="inline-flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value={option}
//                   checked={formData.heardAbout.includes(option)}
//                   onChange={handleCheckbox}
//                   className="h-4 w-4"
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between w-full max-w-4xl mt-8">
//         <button
//           type="button"
//           onClick={() => router.back()}
//           className="underline text-green-500 hover:text-green-300"
//         >
//           Return to previous page
//         </button>

//         <button
//           onClick={handleNext}
//           className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
