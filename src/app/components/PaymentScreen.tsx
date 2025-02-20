"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

// Example fixed price
const PRICE = 5000;

export default function PaymentScreen() {
  const router = useRouter();

  // Store user info from screen A
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);

  // Controls whether our modal is open
  const [modalOpen, setModalOpen] = useState(false);

  // Load user data from localStorage (demo approach)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, []);

  // Paystack Payment Handler
  const handlePaystack = () => {
    if (typeof window !== "undefined") {
      const paystack = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // your Paystack public key
        email: userData?.email || "no-email@example.com",
        amount: PRICE * 100, // convert to kobo
        currency: "NGN",
        ref: `CTVT-${Date.now()}`,
        onClose: () => {
          alert("Payment cancelled.");
        },
        callback: (response: any) => {
          alert("Payment successful! Ref: " + response.reference);
          // Optionally verify on your server here
          setModalOpen(false);
        },
      });
      paystack.openIframe();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Paystack inline script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />

      {/* Top Info */}
      <div className="mb-8 text-center">
        <p className="text-sm mb-2">15th February, 2025</p>
        <p className="text-base max-w-md mx-auto">
          Master product design and collaborate closely with cross-functional teams,
          from developers to marketers, to create innovative and user-friendly products.
        </p>
      </div>

      <div className="border-dotted border-b border-gray-500 w-full max-w-md mb-6" />

      {/* Price */}
      <div className="mb-10 w-full max-w-md bg-gray-900 p-4 rounded flex items-center justify-between">
        <span className="font-medium">Price</span>
        <span className="font-bold">N{PRICE.toFixed(2)}</span>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="underline text-green-500 hover:text-green-300"
        >
          Return to previous page
        </button>

        {/* Instead of triggering Paystack directly, we open a modal */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition"
        >
          Continue to pay
        </button>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-white text-black rounded p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4">Confirm Payment Details</h2>
            
            {/* Display user info from screen A */}
            <div className="mb-4">
              <p><strong>Name:</strong> {userData?.name || "N/A"}</p>
              <p><strong>Email:</strong> {userData?.email || "N/A"}</p>
              <p><strong>Phone:</strong> {userData?.phone || "N/A"}</p>
            </div>

            <p className="mb-4">
              You are about to pay <strong>N{PRICE.toFixed(2)}</strong> for this service.
            </p>

            {/* Pay Now Button triggers Paystack */}
            <button
              onClick={handlePaystack}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition w-full"
            >
              Pay now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
