'use client'

import {  FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import Link from "next/link";

const contactUsSocials = [
    {
        icon: FaInstagram,
        url: "https://www.instagram.com/codetivite"
    },
    {
        icon: FaTwitter,
        url: "https://x.com/codetivite"
    },
    {
        icon: FaLinkedin,
        url: "https://ng.linkedin.com/company/codetivite"
    },

]

function SocialIcon({ Icon, url }: { Icon: React.ElementType, url: string }) {
  return (
    <Link
      target="_blank"
      href={url}
      className="bg-[#EAFAEF] h-[50px] w-[50px] flex justify-center items-center rounded-full hover:bg-primary hover:text-white cursor-pointer">
      <Icon />
    </Link>)
}

export default function SocialLinks() {
  return (
    <div className="md:flex justify-center gap-4 mt-[20%] hidden">
      {
        contactUsSocials.map((item) => (
          <SocialIcon
            key={item.url}
            Icon={item.icon}
            url={item.url} />
        ))
      }
    </div>
  )
}
