// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Script from "next/script";
// import StyledButton from "../components/StyledButton";

// const PRICE = 5000;

// interface PaystackResponse {
//   reference: string;
//   // Add any additional properties expected from the Paystack response here.
// }

// export default function Payment() {
//   const router = useRouter();
//   const [userData, setUserData] = useState<{
//     name: string;
//     email: string;
//     phone: string;
//   } | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedData = localStorage.getItem("userData");
//       if (storedData) {
//         setUserData(JSON.parse(storedData));
//       }
//     }
//   }, []);

//   const handlePaystack = () => {
//     if (typeof window !== "undefined") {
//       const paystack = (window as any).PaystackPop.setup({
//         key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
//         email: userData?.email || "no-email@example.com",
//         amount: PRICE * 100, // convert to kobo
//         currency: "NGN",
//         ref: `CTVT-${Date.now()}`,
//         onClose: () => {
//           alert("Payment cancelled.");
//         },
//         callback: (response: PaystackResponse) => {
//           alert("Payment successful! Ref: " + response.reference);
//           setModalOpen(false);
//         },
//       });
//       paystack.openIframe();
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
//       <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />

//       <div className="mb-8 text-start">
//         <p className="text-sm mb-2 bg-green-200 rounded-full w-fit p-2 mb-3">
//           15th February, 2025
//         </p>
//         <p className="text-base max-w-md mx-auto">
//           Master product design and collaborate closely with cross-functional teams,
//           from developers to marketers, to create innovative and user-friendly products.
//         </p>
//       </div>

//       <div className="border-dotted border-b border-gray-500 w-full max-w-md mb-6" />

//       <div className="mb-10 w-full max-w-md bg-gray-900 p-4 rounded flex items-center justify-between">
//         <span className="font-medium">Price</span>
//         <span className="font-bold">N{PRICE.toFixed(2)}</span>
//       </div>
      
//       <div className="flex flex-col sm:flex-row w-full max-w-md gap-6 justify-between items-center mt-4">
//         <button
//           type="button"
//           onClick={() => router.back()}
//           className="text-green-500 hover:text-green-300"
//         >
//           Return to previous page
//         </button>

//         <StyledButton onClickAction={() => setModalOpen(true)} className="w-fit">
//           Continue to pay
//         </StyledButton>
//       </div>

//       {modalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
//           onClick={() => setModalOpen(false)}
//         >
//           <div
//             className="bg-white text-black rounded p-6 w-[90%] max-w-md relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-xl"
//               onClick={() => setModalOpen(false)}
//             >
//               ✕
//             </button>
//             <h2 className="text-lg font-bold mb-4">Confirm Payment Details</h2>
//             <div className="mb-4">
//               <p>
//                 <strong>Name:</strong> {userData?.name || "N/A"}
//               </p>
//               <p>
//                 <strong>Email:</strong> {userData?.email || "N/A"}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {userData?.phone || "N/A"}
//               </p>
//             </div>
//             <p className="mb-4">
//               You are about to pay <strong>N{PRICE.toFixed(2)}</strong> for this service.
//             </p>
//             <StyledButton
//               onClickAction={handlePaystack}
//               className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition w-full"
//             >
//               Pay now
//             </StyledButton>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import StyledButton from "../components/StyledButton";

const PRICE = 5000;

interface PaystackResponse {
  reference: string;
  // Add any additional properties expected from the Paystack response here.
}

// Declare a global interface for window to type PaystackPop
declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string | undefined;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        onClose: () => void;
        callback: (response: PaystackResponse) => void;
      }) => { openIframe: () => void };
    };
  }
}

export default function Payment() {
  const router = useRouter();
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("userInfo");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, []);

  const handlePaystack = () => {
    if (typeof window !== "undefined" && window.PaystackPop) {
      const paystack = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: userData?.email || "no-email@example.com",
        amount: PRICE * 100, // convert to kobo
        currency: "NGN",
        ref: `CTVT-${Date.now()}`,
        onClose: () => {
          alert("Payment cancelled.");
        },
        callback: (response: PaystackResponse) => {
          alert("Payment successful! Ref: " + response.reference);
          setModalOpen(false);
        },
      });
      paystack.openIframe();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />

      <div className="mb-8 text-start">
        <p className="text-sm mb-2 bg-green-200 rounded-full w-fit p-2 mb-3">
          15th February, 2025
        </p>
        <p className="text-base max-w-md mx-auto">
          Master product design and collaborate closely with cross-functional teams,
          from developers to marketers, to create innovative and user-friendly products.
        </p>
      </div>

      <div className="border-dotted border-b border-gray-500 w-full max-w-md mb-6" />

      <div className="mb-10 w-full max-w-md bg-gray-900 p-4 rounded flex items-center justify-between">
        <span className="font-medium">Price</span>
        <span className="font-bold">N{PRICE.toFixed(2)}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row w-full max-w-md gap-6 justify-between items-center mt-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="underline text-green-500 hover:text-green-300"
        >
          Return to previous page
        </button>

        <StyledButton
          onClickAction={() => setModalOpen(true)}
          className="w-fit"
        >
          Continue to pay
        </StyledButton>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white text-black rounded p-6 w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">Confirm Payment Details</h2>
            <div className="mb-4">
              <p>
                <strong>Name:</strong> {userData?.name || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {userData?.email || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {userData?.phone || "N/A"}
              </p>
            </div>
            <p className="mb-4">
              You are about to pay <strong>N{PRICE.toFixed(2)}</strong> for this service.
            </p>
            <StyledButton
              onClickAction={handlePaystack}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition w-full"
            >
              Pay now
            </StyledButton>
          </div>
        </div>
      )}
    </div>
  );
}
