"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Link href={"/dashboard"}>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={160}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <UserButton />
    </div>
  );
};
