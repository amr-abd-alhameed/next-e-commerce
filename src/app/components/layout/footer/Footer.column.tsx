import Link from "next/link";
import React from "react";
import { LinkTypes } from "./types";
const FooterColumn = ({title, link1, link2, link3, link4 }: LinkTypes) => {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
      <p className="text-sm text-amber-50 ">Links</p>
      <Link href="/" className="captalize">
        {link1}
      </Link>
      <Link href="/" className="captalize">
        {link2}
      </Link>
      <Link href="/" className="captalize">
        {link3}
      </Link>
      <Link href="/" className="captalize">
        {link4}
      </Link>
    </div>
  );
};

export default FooterColumn;
