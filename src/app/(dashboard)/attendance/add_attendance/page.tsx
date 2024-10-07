"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";

export interface IAddAttendanceProps {}

export default function AddAttendance({  }: IAddAttendanceProps) {
  const t = useTranslations("attendance_page.newAttendance");
  const [dynamicWeeks, setDynamicWeeks] = React.useState<boolean>(false);
  const [flexibleHours, setFlexibleHours] = React.useState<boolean>(false);
  const holidays = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ];

  return (
    <div className="mt-5  flex flex-col  gap-5">
      <h2 className="text-xl font-bold text-[#172B4C] ps-4">
        {" "}{t("title")}
      </h2>
      <form className="px-4">
        <div className=" w-full h-full flex flex-col gap-3">
          <div className=" rounded-md   bg-white px-2">
            <h3 className=" py-3 font-semibold text-[#172B4C]">
              {t("Shift Details.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 ">
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium  ps-2">
                  {t("Shift Details.Shift Name")}
                </Label>
                <Input className="" placeholder="Enter Shift Name" />
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium  ps-2">
                  {t("Shift Details.Shift Code")}
                </Label>
                <Input className="" placeholder="Enter Shift Code" />
              </div>
            </div>
            <div className=" w-full flex flex-col gap-2  py-3">
              <Label className="text-sm font-medium  ps-2">
                {t("Shift Details.Description")}
              </Label>
              <Textarea
                className="w-full"
                placeholder="Type your message here."
              />
            </div>
          </div>
          {/* Working_Hours */}
          <div className=" rounded-md   bg-white px-2">
            <h3 className=" py-3 font-semibold text-[#172B4C]">
              {t("Shift Details.Working_Hours")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 ">
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium  ps-2">
                  {t("Shift Details.Shift Start")}
                </Label>
                <Input className="" placeholder="Enter Shift Start" />
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium  ps-2">
                  {t("Shift Details.Shift End")}
                </Label>
                <Input className="" placeholder="Enter Shift End" />
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium  ps-2">
                  {t("Shift Details.Duration")}
                </Label>
                <Input className="" placeholder="8 hours" />
              </div>
            </div>
            <div className="col-span-3">
              <h3 className=" py-3 font-semibold text-[#172B4C]">
                {t("Shift Details.Working Days")}
              </h3>
              <div className="w-full ">
                <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center gap-4 py-3 ">
                  {holidays.map((ele: string) =>
                    <div className=" flex items-center  gap-2" key={ele}>
                      <Checkbox />
                      <Label className="text-sm  ">
                        {ele}
                      </Label>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" rounded-md   bg-white px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4 ">
                <div className=" flex flex-col gap-2">
                  <Label className="font-semibold text-[#172B4C] ps-2">
                    {t("Shift Details.Overtime Rule")}
                  </Label>
                  <Input className="" placeholder="Optional" />
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="font-semibold text-[#172B4C] ps-2">
                    {t("Shift Details.Late Attendance Rule")}
                  </Label>
                  <Input className="" placeholder="Optional" />
                </div>
              </div>
            </div>
          </div>
          {/* Dynamic_Weekend */}
          <div className=" rounded-md   bg-white px-2">
            <h3 className="flex justify-start items-center gap-2 py-3 font-semibold text-[#172B4C]">
              {t("Shift Details.Dynamic_Weekend")}
              <Checkbox
                checked={dynamicWeeks}
                onCheckedChange={value => {
                  setDynamicWeeks(value as boolean);
                }}
              />
            </h3>
            {/* {dynamicWeeks &&( */}
            <div className={`${dynamicWeeks ? "weekends" : "noweekends"}`}>
              <h4 className="py-5 font-semibold text-primary">
                {t("Shift Details.Select_changes")}
              </h4>
              <div className=" py-5">
                {[1,2,3,4].map(key =>
                  <div className=" flex flex-col gap-3 " key={key}>
                    <Label className="text-sm font-semibold  ps-2">
                      {t("Shift Details.Week")} {key + 1}
                    </Label>
                    <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center gap-4 py-3 ">
                      {holidays.map((ele: string) =>
                        <div className=" flex items-center  gap-2" key={ele}>
                          <Checkbox />
                          <Label className="text-sm  ">
                            {ele}
                          </Label>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* )} */}
          </div>
          {/* Enable Flexible Hours*/}
          <div className=" rounded-md   bg-white px-2">
            <h3 className=" py-3 flex justify-start items-center gap-2 font-semibold text-[#172B4C]">
              {t("Shift Details.Flexible_Hours")}
              <Checkbox
                checked={flexibleHours}
                onCheckedChange={value => {
                  setFlexibleHours(value as boolean);
                }}
              />
            </h3>
            <div className={`${flexibleHours ? "weekends" : "noweekends"}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4 ">
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium  ps-2">
                    {t("Shift Details.Shift Duration")}
                  </Label>
                  <Input className="" placeholder="Enter Shift Duration" />
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium  ps-2">
                    {t("Shift Details.Shift Start From")}
                  </Label>
                  <Input className="" placeholder="Enter Shift Start From" />
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium  ps-2">
                    {t("Shift Details.Shift Start To")}
                  </Label>
                  <Input className="" placeholder="Enter Shift Start To" />
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-md   bg-white p-2">
            <h3 className=" py-3 flex justify-start items-center gap-2 font-semibold text-[#172B4C]">
              {t("Shift Details.Flexible_Hours")}
              <Checkbox />
            </h3>
          </div>
        </div>
        <div className=" flex justify-end items-center px-5">
          <Button className="mt-5 hover:bg-primary">
            <Save className="me-2 size-5 " />
            save
          </Button>
        </div>
      </form>
    </div>
  );
}
