import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import { Save } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";

export interface IAddNewPayrollProps {}

export default function AddNewPayrollPage({  }: IAddNewPayrollProps) {
  const t = useTranslations("Payroll Area.IAddNewPayroll");
  return (
    <div className="flex flex-col gap-5 mt-5 px-3">
      <h2 className="text-xl font-bold text-[#172B4C] px-3">
        {t("title")}
      </h2>

      <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
        <h2 className="text-xl font-bold text-[#172B4C] py-5 px-2">
          {t("form.title")}
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-3">
            <Label>
              {t("form.Payroll Code")}
            </Label>
            <Input type="text" placeholder="Enter Payroll Code" />
          </div>
        </div>
        <form>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-3">
              <Label>
                {t("form.Payroll Name")}
              </Label>

              <Input type="text" placeholder="Enter Payroll Name" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>
                {t("form.Payroll Name AR")}
              </Label>
              <Input type="text" placeholder="Enter Payroll Name AR" />
            </div>
            {/* select */}
            <div className="flex flex-col gap-3">
              <Label>
                {t("form.Is It Addition Or Subscription ")}
              </Label>
              <Select>
                <SelectTrigger value="addition">Select</SelectTrigger>
                <SelectContent>
                  <SelectItem value="addition">Addition</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>
                {t("form.Is it Fixed Or Variable")}
              </Label>
              <Select>
                <SelectTrigger value="addition">Select</SelectTrigger>
                <SelectContent>
                  <SelectItem value="addition">Addition</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col col-span-2 gap-3">
              <Label>
                {t("form.Percentage From Another Value")}
              </Label>
              <Input
                className="w-1/2"
                type="text"
                placeholder="Enter Percentage"
              />
            </div>
            <div className="flex flex-col  gap-3">
              <Label>
                {t("form.Choose Item Code")}
              </Label>
              <Select>
                <SelectTrigger value="addition">Select</SelectTrigger>
                <SelectContent>
                  <SelectItem value="addition">Addition</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>
                {t("form.Link To Attendance")}
              </Label>
              <Select>
                <SelectTrigger value="addition">Select</SelectTrigger>
                <SelectContent>
                  <SelectItem value="addition">Addition</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end py-5">
            <Button className=" hover:bg-primary">
              <Save className="me-2 size-5" />
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
