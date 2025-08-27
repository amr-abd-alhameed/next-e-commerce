import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-2" >
      <Link href="/" className="flex items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">Amr E-Commerce</p>
      </Link>
      <div className="right">right</div>
    </nav>
  );
};

export default NavBar;
