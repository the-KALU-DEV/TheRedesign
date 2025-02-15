"use client";

import Image from "next/image";
import Link from "next/link";
import StyledButton from "./StyledButton";

const FooterMainLinks = [
    {
        heading: "Codetivite",
        subLinks: [
            {
                name: "About Us",
                url: "/about"
            },
            {
                name: "Our blog",
                url: "/about"
            },
            {
                name: "Clarity test",
                url: "/about"
            },
            {
                name: "Our community",
                url: "/about"
            }
        ]
    },
    {
        heading: "Support",
        subLinks: [
            {
                name: "FAQs",
                url: "/contact-us"
            },
            {
                name: "Contact us",
                url: "/contact-us"
            },
            {
                name: "Privacy policy",
                url: "/contact-us"
            }
        ]
    },
    {
        heading: "Socials",
        subLinks: [
            {
                name: "LinkedIn",
                url: "https://ng.linkedin.com/company/codetivite"
            },
            {
                name: "Twitter",
                url: "https://x.com/codetivite"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/codetivite"
            }
        ]
    },
    {
        heading: "Get Started",
        subLinks: [
            {
                name: "Sign Up",
                url: "/"
            },
            {
                name: "Sign In",
                url: "/"
            }
        ]
    },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 relative">
      {/* Upper Section - Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image src="/footer-image.svg" alt="Newsletter Image" width={300} height={200} className="w-4/5 md:w-1/2" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Join our community of techies and receive regular updates on the latest tech trends, new courses, and special promotions. Don't miss out on the opportunity to level up your tech skills and achieve your goals.
          </p>
          <div className="w-full mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 p-4 rounded-lg sm:rounded-l-lg border-none focus:ring-2 focus:ring-green-500 text-black"
            />
            <StyledButton className="w-full sm:w-auto px-8 py-4 font-medium">Subscribe</StyledButton>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            By clicking Subscribe you're confirming that you agree with our <span className="underline">Terms and Conditions</span>.
          </p>
        </div>
      </div>

      <hr className="text-gray-800 w-full mt-8" />

      {/* Lower Section - Footer Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-16 space-y-8 md:space-y-0">
        <Image className="self-center md:w-1/4 w-1/3 md:mr-8" 
        src="/footer-logo.svg" 
        alt="Codetivite Logo" 
        width={300} 
        height={150} 
        sizes="(max-width: 900px) 100px, (max-width: 1040px) 200px, (max-width: 2040px) 300px" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3 text-center md:text-left">
          {FooterMainLinks.map((item, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold">{item.heading.toUpperCase()}</h3>
              <ul className="text-gray-400 mt-4 space-y-2">
                {item.subLinks.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url} className="hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-500 mt-10 text-sm">© 2023 Codetivite. All rights reserved</p>
    </footer>
  );
}
