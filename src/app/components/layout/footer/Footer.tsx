import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center md:flex-row md:gap-0 md:justify-between md:items-start bg-gray-800 p-8 rounded-lg ">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center ">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            Amr E-Commerce
          </p>
        </Link>
        <p className="text-sm text-gray-400">2025 Trend Dev Amr</p>
        <p className="text-sm text-gray-400">All rights are reserved </p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 ">Links</p>
        <Link href="/" className="captalize">
          HomePage
        </Link>
        <Link href="/" className="captalize">
          Contact
        </Link>
        <Link href="/" className="captalize">
          Terms of Service
        </Link>
        <Link href="/" className="captalize">
          Privacy
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 ">Links</p>
        <Link href="/" className="captalize">
          HomePage
        </Link>
        <Link href="/" className="captalize">
          Contact
        </Link>
        <Link href="/" className="captalize">
          Terms of Service
        </Link>
        <Link href="/" className="captalize">
          Privacy
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 ">Links</p>
        <Link href="/" className="captalize">
          HomePage
        </Link>
        <Link href="/" className="captalize">
          Contact
        </Link>
        <Link href="/" className="captalize">
          Terms of Service
        </Link>
        <Link href="/" className="captalize">
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
