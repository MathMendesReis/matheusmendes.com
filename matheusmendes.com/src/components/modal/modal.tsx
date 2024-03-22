"use client";
import React from "react";
import LinkNavHeader from "../Link-nav/LinkNavHeader";

export default function Modal() {
  return (
    <div
      shadow-3xl
      backdrop-blur-xl
      className={`w-[100px] h-svh  z-50 absolute right-0 top-20 shadow-3xl backdrop-blur-xl`}
    >
      <LinkNavHeader />
    </div>
  );
}
