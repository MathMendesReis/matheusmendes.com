import Link from "next/link";
import React, { useState } from "react";
import { CurrentPageState, LinksArray } from "./data";
import { usePathname } from "next/navigation";
import Text from "../typography/components/text";

export default function ListLinks() {
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState<CurrentPageState>(pathname);

  const handleSetCurrentPage = (currentPage: string) => {
    setCurrentPage(() => currentPage);
  };
  const listItems = LinksArray.map(({ id, title, path }) => (
    <li key={id}>
      <Link href={path} onClick={() => handleSetCurrentPage(path)}>
        <Text
          className={`text-base sm:text-lg capitalize  leading-7 ${
            currentPage === path ? "font-extrabold" : "font-medium"
          }`}
        >
          {title}
        </Text>
      </Link>
    </li>
  ));
  return { listItems };
}
