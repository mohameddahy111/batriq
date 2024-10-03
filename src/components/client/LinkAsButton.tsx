import Link from "next/link";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface ILinkAsButtonProps {
  link: string;
  children: React.ReactElement;
  className?: string;
  icon?:boolean;
}

export default function LinkAsButton({ link, children, className , icon }: ILinkAsButtonProps) {
const sizeIcon = icon
  ? " shadow-md active:shadow-sm  rounded-full  flex justify-center items-center size-9"
  : "shadow-md active:shadow-sm text-white bg-primary text-sm flex justify-center items-center py-2 px-3 rounded-md";

  return (
    <Link href={link} className={cn(sizeIcon, className)}>
        {/* <div className="ring-1 ring-primary rounded-full flex justify-center items-center size-7"></div> */}
      {children}
    </Link>
  );
}
