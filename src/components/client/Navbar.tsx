import * as React from "react";
import { LanguageList } from "./language-list";
import { Bell, Mail } from "lucide-react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import SearchBox from "./searchBox";
import { MobileDrawer } from "./mobile/mobileDrawer";

export interface INavbarProps {}

export default function Navbar({}: INavbarProps) {
  return (
    <div className="flex pe-4 items-center justify-between  p-2 bg-white rounded-sm">
      <div className=" md:hidden">
      <MobileDrawer/>
      </div>
      <div className="  hidden md:flex-1 md:flex"/>
      <div className="flex items-center gap-5">
        <SearchBox />
        <LanguageList className=" hidden md:flex" />
        <Link href={"/"} className="relative flex  items-center gap-2 ">
          <Badeg number={1} />
          <Mail className="size-5 text-gray-500" />
        </Link>
        <Link href={"/"} className="relative flex  items-center gap-2 ">
          <Badeg number={1} />
          <Bell className="size-5 text-gray-500" />
        </Link>
        <div className=" hidden md:flex">
        <UserMenu />

        </div>
      </div>
    </div>
  );
}

const Badeg = ({ number }: { number: number | string }) => {
  return (
    <>
      {number && number !== "0" ? (
        <div className="size-4 bg-primary top-0 right-0 absolute translate-x-2 -translate-y-2 flex justify-center items-center text-white rounded-full">
          <span className="text-white text-sm"> {number} </span>
        </div>
      ) : null}
    </>
  );
};
