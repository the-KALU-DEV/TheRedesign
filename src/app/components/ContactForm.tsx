// "use client"

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//     agree: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked; // 👈 Type assertion for checkbox
  
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // Handle form submission logic here
//   };

//   return (
//     <section className="w-full contgainer mt-20 flex flex-col gap-10">
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//       {/* Header */}
//       <div className="bg-green-500 text-white text-center py-4 relative">
//         <h2 className="text-xl font-semibold">Send a Message</h2>
//         {/* Abstract Background Shapes */}
//         <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 opacity-40 rotate-45"></div>
//         <div className="absolute top-0 left-0 w-12 h-12 bg-green-400 opacity-40 rotate-45"></div>
//       </div>

//       {/* Form */}
//       <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//         {/* Full Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="John Mary"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//         </div>

//         {/* Email Address */}
//         <div>
//           <label className="block text-gray-700 font-medium">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="codetivite@gmail.com"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block text-gray-700 font-medium">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Type your message here..."
//             rows={4}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//         </div>

//         {/* Privacy Agreement */}
//         <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//             className="w-5 h-5"
//             required
//           />
//           <label className="text-gray-600">
//             You agree to our friendly{" "}
//             <a href="#" className="text-green-500 underline">
//               privacy policy
//             </a>
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
//         >
//           Send message
//         </button>
//       </form>
//     </div>
//     </section>
//   );
// };

// export default ContactForm;
