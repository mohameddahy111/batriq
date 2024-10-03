import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import * as React from "react";

export interface IManagerDepartmentsProps {}
const list = [
  {
    title: "Manager_title",
    inputs: [
      {
        title: "Direct Manager",
        value: "Ahmed Saeed"
      },
      {
        title: "Sub Departments",
        value: "Accountant"
      }
    ]
  },
  {
    title: "Position & Branch",
    inputs: [
      {
        title: "Position",
        value: "Team Leader"
      },
      {
        title: "Branch",
        value: "New Cairo"
      }
    ]
  }
];

export default function ManagerDepartments({}: IManagerDepartmentsProps) {
  const t = useTranslations("employees_page.Manager_Departments");

  return (
    <div>
      {list.map((ele, i) => (
        <div className="" key={i}>
          <h2 className="text-xl pt-4  text-[#172B4C]  font-semibold ">
            {t(ele.title)}
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {ele.inputs.map((item, i) => (
              <div className=" flex flex-col gap-2" key={i}>
                <Label className="ps-1">{t(item.title)}</Label>
                <Input
                  readOnly
                  className=" w-full"
                  value={item.value}
                  type="text"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
