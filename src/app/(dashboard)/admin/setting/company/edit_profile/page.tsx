"use client";

import LinkAsButton from "@/components/client/LinkAsButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Edit, ImageIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";

export interface IComponyEditProps {}

export default function ComponyEdit({}: IComponyEditProps) {
  const t = useTranslations("setting_page");
  const [langeuage, setLangeuage] = React.useState({
    en: true,
    ar: false,
    default: "english"
  });
  return (
    <div>
      <h1 className="text-2xl px-3 mt-5  text-[#172B4C] font-semibold">
        {t("title")}
      </h1>
      <form>
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
            <div className=" absolute z-10 flex justify-center items-center cursor-pointer shadow-md rounded-full bg-primary size-9 bottom-28 right-2">
              <ImageIcon className="text-white size-5" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white   pb-10 col-span-4 lg:col-span-3">
          <div className="px-5 py-3  bg-white rounded-lg flex justify-between items-center">
            <h2 className="text-xl font-semibold">{t("Company Info")}</h2>
            <div className="">
                <Button disabled={!langeuage.ar && !langeuage.en && true} type="submit" className="hover:bg-primary">
                    Save
                </Button>
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
          <div className="grid grid-cols-2 gap-3 py-5  px-5">
            <div className="flex flex-col gap-3">
              <Label className="ps-1 font-semibold">{t("Language")}</Label>
              <div className="">
                <Checkbox
                  defaultChecked={langeuage.en}
                  onCheckedChange={(value) => {
                    setLangeuage({ ...langeuage, en: value as boolean });
                  }}
                />
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  Englissh
                </Label>
              </div>
              <div className="">
                <Checkbox
                  defaultChecked={langeuage.ar}
                  onCheckedChange={(value) => {
                    setLangeuage({ ...langeuage, ar: value as boolean });
                  }}
                />
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  عربي
                </Label>
                {!langeuage.ar && !langeuage.en &&(
                    <p className="text-red-500 text-sm py-3 capitalize">* mast be selected language </p>
                ) }
              </div>

              {langeuage.ar && langeuage.en && (
                <div className="">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("Set main Language")}
                  </Label>
                  <RadioGroup
                    defaultValue={langeuage.default}
                    className=" grid grid-cols-1 md:grid-cols-2  py-5"
                    onValueChange={(value) => {
                      setLangeuage({ ...langeuage, default: value });
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="english" id="option-one" />
                      <Label htmlFor="option-one">English</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="arabic" id="option-two" />
                      <Label htmlFor="option-two">عربي</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      </form>
    </div>
  );
}
