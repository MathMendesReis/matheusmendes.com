import React from "react";

interface CustomBox {
  children: React.ReactNode;
  id?: string;
}
export default function Box({ children, id }: CustomBox) {
  return (
    <section
      id={id}
      className="w-full flex items-center justify-between min-h-screen sm:flex-nowrap flex-wrap"
    >
      {children}
    </section>
  );
}
