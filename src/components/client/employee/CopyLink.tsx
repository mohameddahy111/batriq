"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export interface ICopyLinkProps {
  title: string;
  value : string;
}

export default function CopyLink({ title , value }: ICopyLinkProps) {
  const t = useTranslations("employees_page.files");
  function copyToClipboard() {
    const val = document.getElementById(title) as HTMLInputElement;
    navigator.clipboard.writeText(val.value);
    toast.success(`${t(`${title}`)} Copied Successfully`);
  }
  return (
    <div className="flex flex-col gap-2">
      <Label>{t(`${title}`)}</Label>
      <div className="relative">
        <Input
          id={title}
          placeholder=""
          value={value}
          type="text"
          className=" w-full pe-10"
          readOnly
        />
        <div className=" absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 flex items-center ">
          <TooltipDemo copyToClipboard={copyToClipboard}  />
        </div>
      </div>
    </div>
  );

}

export function TooltipDemo({ copyToClipboard }: { copyToClipboard: ()=>void }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild  onClick={copyToClipboard}>
          <Button variant="ghost">
            <LinkIcon className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}