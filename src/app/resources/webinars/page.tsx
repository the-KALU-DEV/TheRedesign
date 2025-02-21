"use client";

import React, { useState } from "react";
import TitleSubtitle from "../../components/TitleSubtitle";
import StyledButton from "../../components/StyledButton";
import WebinarCard from "../../components/WebinarCard";

interface Webinar {
  topic: string;
  duration: string;
  title: string;
  subtitle: string;
  image: string;
}

const initialWebinars: Webinar[] = [
  {
    topic: "How to Charge High Salaries for your services",
    duration: "20 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web1.svg",
  },
  {
    topic: "How to create a Portfolio that increases your chance of landing a job faster.",
    duration: "30 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web2.svg",
  },
  {
    topic: "The Art of personal branding",
    duration: "15 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web3.svg",
  },
  {
    topic: "How to Charge High Salaries for your services",
    duration: "20 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web1.svg",
  },
  {
    topic: "How to create a Portfolio that increases your chance of landing a job faster.",
    duration: "30 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web2.svg",
  },
  {
    topic: "The Art of personal branding",
    duration: "15 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web3.svg",
  },
  {
    topic: "How to Charge High Salaries for your services",
    duration: "20 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web1.svg",
  },
  {
    topic: "How to create a Portfolio that increases your chance of landing a job faster.",
    duration: "30 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web2.svg",
  },
  {
    topic: "The Art of personal branding",
    duration: "15 mins",
    title: "Experts reveal exciting Secrets",
    subtitle: "Experts reveal exciting Secrets",
    image: "/web3.svg",
  }
];

export default function Webinars() {
  const [sortBy, setSortBy] = useState("recent");
  const [webinars] = useState(initialWebinars);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Handler when "Download" is clicked
  function handleDownloadClick() {
    setModalOpen(true);
  }

  // Handler for "Send message" inside the modal
  function handleSendMessage() {
    alert(`A recorded version will be sent to ${email}.`);
    setModalOpen(false);
  }

  return (
    <div className="min-h-screen w-full bg-white text-black py-10">
      <div className="container mx-auto px-4 py-10">
        <TitleSubtitle
          title="Webinars"
          subtitle="Access all our past Webinars for FREE"
          description="Accelerate your tech journey with Codetivite. Learn, build, and grow with our expert-led programs."
          centered
        />

        {/* Title + Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Webinars</h2>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <label htmlFor="sortBy" className="text-gray-600">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="recent">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
                <WebinarCard
                    key={index}
                    webinar={webinar}
                    onDownloadAction={handleDownloadClick}
                />
            ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-md bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Green Header with Brand Name */}
            <div className="bg-[#06c167] flex items-center justify-center py-4">
              <h1 className="text-white text-2xl font-bold">codetivite</h1>
            </div>

            {/* Close Button (X) */}
            <button
              className="absolute top-2 right-2 text-xl p-2 text-white"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>

            {/* Modal Body */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-3">
                Please enter your Email address
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Kindly input your email, A recorded version will be sent to your
                email immediately.
              </p>
              <input
                type="email"
                placeholder="codetivite@gmail.com"
                className="border w-full px-3 py-2 rounded mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledButton onClickAction={handleSendMessage} className="w-full">
                Send message
              </StyledButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
