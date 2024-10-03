

import LinkAsButton from "@/components/client/LinkAsButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";

export interface IComponyProps {}

export default function Compony({}: IComponyProps) {
  const t = useTranslations("setting_page");

  return (
    <div>
      {" "}
      <h1 className="text-2xl px-3 mt-5  text-[#172B4C] font-semibold">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-5 ">
        <div className="  w-full bg-white flex justify-center col-span-4 lg:col-span-1">
          <div className="flex justify-center items-center gap-3 bg-white w-fit h-full p-5 rounded-lg relative">
            <Image
              src={"/Ellipse.svg"}
              alt="avatar"
              width={120}
              height={120}
              className="w-60 h-60 rounded-full object-cover "
            />
          </div>
        </div>
        <div className=" flex flex-col bg-white   pb-10 col-span-4 lg:col-span-3">
          <div className="px-5 py-3  bg-white rounded-lg flex justify-between items-center">
            <h2 className="text-xl font-semibold">{t("Company Info")}</h2>
            <div className="">
              <LinkAsButton link={"/admin/setting/company/edit_profile"}>
                <>{t("Edit Profile")} </>
              </LinkAsButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 px-5">
            <div className="flex flex-col gap-3">
              <Label className="ps-1">{t("Company Code")}</Label>
              <Input
                readOnly
                className=" w-full text-muted-foreground"
                value={"123456789"}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className="ps-1">{t("Company Name")}</Label>
              <Input
                readOnly
                className=" w-full text-muted-foreground"
                value={"1Go Tours"}
                type="text"
                
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 my-5 px-4 justify-center">
            <Label>{t("Main Language")} </Label>
            <Input readOnly type="text" value={"English"} className=" w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
