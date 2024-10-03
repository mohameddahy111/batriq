"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLocale} from "next-intl";
import { LanguageService } from "@/app/actions";
import { GlobeIcon } from "lucide-react";
import { cn } from "@/lib/utils";


export function LanguageList({className}: {className?: string}) {
    const local = useLocale();
   

  return (
    <div className={cn(className  ,'')}>


    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* <Button variant="outline"  size={'sm'} className={cn(className , 'shadow-none')}> */}
        <span className=" flex items-center gap-2 ">
          <span className="text-sm">
            {local === "en" ? "عربي" : "English"}{" "}
          </span>
          <GlobeIcon className=" size-3" />
        </span>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => {
            LanguageService("en");
            document.body.dir = "ltr";
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            LanguageService("ar");
            document.body.dir = "rtl";
          }}
        >
          عربي
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
  );
}
