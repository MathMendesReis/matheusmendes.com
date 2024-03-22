/* eslint-disable camelcase */
import React from "react";
import Text from "../typography/components/text";
import { formatarData } from "@/utils/formatDate";
import Link from "next/link";
interface ProjectsCard {
  id?: string;
  name: string;
  createdAt: string;
  description: string;
  html_url: string;
  homepage: string;
  language?: string;
  topics?: string[];
}

export default function ProjectCard({
  createdAt,
  description,
  name,
  html_url,
}: ProjectsCard) {
  return (
    <Link href={html_url} target="_blank" title="Visite o codigo fonte">
      <article className="flex flex-col items-start gap-6 flex-1 self-stretch w-[336px]  bg-zinc-900 p-6 reval">
        <section className="flex items-center justify-center p-4 bgColor bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] w-full min-h-40">
          <Text size="2xl">{name}</Text>
        </section>
        <div className="w-full">
          <header className="w-full  h-6 justify-between items-start inline-flex">
            <div className="w-56">
              <Text size="xxs">{formatarData(createdAt)}</Text>
            </div>
          </header>
          <main className="w-[336px] h-16 justify-between items-start inline-flex flex-col">
            <Text size="xxs" className="truncate w-[290px]">
              {description}
            </Text>
          </main>
        </div>
      </article>
    </Link>
  );
}
