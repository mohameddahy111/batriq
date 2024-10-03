import * as React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export interface ISearchBoxProps {}

export default function SearchBox({}: ISearchBoxProps) {
  const local = useLocale();
  const t= useTranslations();
  return (
    <div className="bg-white rounded-md shadow-sm min-w-44  relative">
      <Input
        placeholder={t('navbar.search_label')}
        className={`bg-transparent w-full h-[30px]  placeholder:text-gray-400 pe-8 `} 
      />
      <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 text-sm size-4 ${local === "en" ? "right-2" :"left-2"}`} />
    </div>
  );
}
