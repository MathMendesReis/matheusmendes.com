import React from "react";

interface BoxProps {
  children: React.ReactNode;
}
export default function Box({ children }: BoxProps) {
  return (
    <section className="px-4 py-7 flex items-center justify-center flex-col gap-3">
      {children}
    </section>
  );
}
