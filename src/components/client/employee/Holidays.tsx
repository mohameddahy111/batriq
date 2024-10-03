import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import * as React from "react";

export interface IHolidaysProps {}

export default function Holidays({}: IHolidaysProps) {
  const t = useTranslations("employees_page.Holidays");
  return (
    <div>
      <h2 className="text-xl pt-4  text-[#172B4C]  font-semibold ">
        {t("Holidays")}
      </h2>
      <div className="flex flex-col gap-3 pt-5">
        <Label className="ps-1">{t("Available Balance")}</Label>
        <div className=" flex items-center gap-2">
          <Input
            readOnly
            className=" w-[300px]"
            value={"20 Days"}
            type="text"
          />
          <Button className="bg-[#172B4C] hover:bg-[#172B4C]">
            {t("Balance Info")}
          </Button>
        </div>
      </div>
      <h2 className="text-xl pt-4  text-[#172B4C]  font-semibold ">
        {t("Contracts")}
      </h2>
      <div className="flex flex-col gap-3 pt-5">
        <Label className="ps-1">{t("Available Balance")}</Label>
        <div className=" flex items-center gap-2">
          <Input
            readOnly
            className="w-[300px] "
            value={"20 Days"}
            type="text"
          />
          <Button className="bg-[#172B4C] hover:bg-[#172B4C]">
            {t("Balance Info")}
          </Button>
        </div>
      </div>
    </div>
  );
}
