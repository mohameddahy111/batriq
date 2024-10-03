import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export interface IPublicTabsProps {
  list: {
    name: string;
    value: string;
  }[];

  children: React.ReactElement;
}

export default function PublicTabs({ list, children }: IPublicTabsProps) {
  const t = useTranslations();
  return (
    <Tabs
      defaultValue={list[0].value}
      className="p-3  bg-white shadow-sm rounded-md  w-full  flex flex-col gap-24 md:gap-10 lg:gap-5"
    >
      <TabsList className="h-fit gap-2 grid grid-cols-2 md:grid-cols-3 lg:flex justify-start bg-transparent">
        {list.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="  data-[state=active]:bg-[#172B4C] data-[state=active]:text-white bg-[#A1A4B5] text-white line-clamp-1 text-wrap rounded-sm "
          >
            {t(item.name)}
            {/* {item.value} */}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
