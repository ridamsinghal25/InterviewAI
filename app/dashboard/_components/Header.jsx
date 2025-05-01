"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={160}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />

      <UserButton />
    </div>
  );
};
