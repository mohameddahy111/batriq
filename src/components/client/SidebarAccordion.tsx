"use client";

import * as React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export interface ISidebarAccordionProps {
  list: {
    title: string;
    icon: string;
    link: string;
    subList?: {
      title: string;
      link: string;
    }[];
  };
  index: number;
}

export default function SidebarAccordion({
  list,
  index
}: ISidebarAccordionProps) {
  const pathName = usePathname();
  const t = useTranslations();
  const local = useLocale();
  return (
    <div>
      {list.subList ? (
        <AccordionItem value={`item-${index}`} className="">
          <AccordionTrigger className="hover:no-underline hover:text-primary ">
            <div className=" flex items-center gap-2">
              <Image src={list.icon} alt={list.title} width={20} height={20} />
              <span
                className={``}
              >
                {t(`${list.title}`)}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {list?.subList?.map((subList, i) => (
              <Link
                href={`${subList.link}`}
                className={`flex items-center  justify-between py-3 hover:bg-gray-100 rounded-md gap-2 ${
                  pathName.includes(`${subList.link}`) && " text-primary"
                } `}
                key={i}
              >
                <span className="ps-2 truncate">{t(`${subList.title}`)} </span>
                {local === "en" ? (
                  <ChevronRight className="size-4" />
                ) : (
                  <ChevronLeft className="size-4" />
                )}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ) : (
        <div className="">
          <Link
            href={`${list.link}`}
            className="hover:no-underline hover:text-primary flex items-center gap-2 py-2"
          >
            <Image src={list.icon} alt={list.title} width={20} height={20} />

            <span
              className={`ps-2 ${pathName === list.link && " text-primary"}  `}
            >
              {t(`${list.title}`)}
            </span>
          </Link>
          <Separator className="my-2" />
        </div>
      )}
    </div>
  );
}
