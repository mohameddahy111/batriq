import * as React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CopyLink from "./CopyLink";


export interface IFilesProps {
}

export default function Files ({}: IFilesProps) {
  const t = useTranslations("employees_page.files");
  return (
    <div className="p-3 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold ">{t("min_title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative flex flex-col gap-3">
          <Label className="ps-1">CV File</Label>
          <div className="relative">
            <Input
              placeholder=""
              value={"sarah-rodriguez-CV.doc"}
              type="text"
              className=" w-full  "
              readOnly
            />
            <div className=" absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Image src={"/eye.svg"} alt="edit" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-3">
          <Label className="ps-1">Insurance File</Label>
          <div className="relative">
            <Input
              placeholder=""
              value={"sarah-rodriguez-CV.doc"}
              type="text"
              className=" w-full  "
              readOnly
            />
            <div className=" absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Image src={"/eye.svg"} alt="edit" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-3">
          <Label className="ps-1">Contract File</Label>
          <div className="relative">
            <Input
              placeholder=""
              value={"sarah-rodriguez-CV.doc"}
              type="text"
              className=" w-full  "
              readOnly
            />
            <div className=" absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Image src={"/eye.svg"} alt="edit" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-3">
          <Label className="ps-1">Contract File</Label>
          <div className="relative">
            <Input
              placeholder=""
              value={"sarah-rodriguez-CV.doc"}
              type="text"
              className=" w-full  "
              readOnly
            />
            <div className=" absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Image src={"/eye.svg"} alt="edit" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl  font-semibold ">{t("Links")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-3">
          <CopyLink title="Facebook Link" value="www.googel.com" />
          <CopyLink title="LinkedIn Link" value="sarah2-rodriguez-CV.doc" />
          <CopyLink title="Behance Profile" value="sarah3-rodriguez-CV.doc" />
        </div>
      </div>
    </div>
  );
}
