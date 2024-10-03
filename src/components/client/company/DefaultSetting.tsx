import { Store } from "@/app/context/storeData";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { defaultTimeZone } from "@/lib/data";
import * as React from "react";
import { toast } from "sonner";


export interface IDefaultSettingProps {}

export default function DefaultSetting({}: IDefaultSettingProps) {
  const { employeeInputs, setEmployeeInputs } = Store();
  const [setting, setSetting] = React.useState(employeeInputs.Default_Setting);
  const holidays = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ];
  function checkHandles(value: string) {
    const list = [...setting.holidays];
    const item = list.find((ele: any) => ele === value);
    if (item) {
      list.splice(list.indexOf(item), 1);
      setSetting({ ...setting, holidays: list });
      toast.success(`${value} Removed Successfully`);
    } else {
      list.push(value);
      setSetting({ ...setting, holidays: list });
      toast.success(`${value} Added Successfully`);
    }
  }
  React.useEffect(() => {
    setEmployeeInputs({ ...employeeInputs, Default_Setting: setting });
  }, [setting]);
  return (
    <div className=" flex flex-col gap-5">
      <div className="">
        <h2 className=" text-sm font-semibold">Default Weekends </h2>
        <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center gap-4 py-3 ">
          {holidays.map((ele: any) => (
            <div className=" flex items-center  gap-2" key={ele}>
              <Checkbox
                defaultChecked={setting.holidays.includes(ele) ? true : false}
                onCheckedChange={() => {
                  checkHandles(ele);
                }}
              />
              <Label className="text-sm  ">{ele}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h4 className=" text-sm font-semibold">Default Working Hours</h4>
        <div className=" flex items-center gap-4 py-3">
          <div className="">
            <Label>From </Label>
            <Input
              placeholder={"From"}
              type="time"
              className="bg-white w-fit"
              defaultValue={setting.working_hours_Start}
              onChange={(e) => {
                setSetting({ ...setting, working_hours_Start: e.target.value });
              }}
            />{" "}
          </div>
          <span className=" h-28 flex items-center "> </span>
          <div className="">
            <Label>To </Label>
            <Input
              onChange={(e) => {
                setSetting({ ...setting, working_hours_End: e.target.value });
              }}
              defaultValue={setting.working_hours_End}
              placeholder={"To"}
              type="time"
              className="bg-white w-fit"
            />
          </div>
        </div>
      </div>
      <div className="">
        <h4 className=" text-sm font-semibold">Default Time Zone</h4>
        <div className="py-3">
          <Select
            defaultValue={setting.time_zone}
            onValueChange={(value) =>
              setSetting({ ...setting, time_zone: value })
            }
          >
            <SelectTrigger className="w-[300px] bg-white">
              <SelectValue placeholder="Choose Time Zone" />
              <SelectContent>
                {defaultTimeZone.map((ele, i) => (
                  <SelectItem
                    value={ele.name}
                    key={i}
                    className="flex items-center gap-2 py-2 px-4 hover:bg-primary"
                  >
                    <p className="text-sm inline-block mx-3">{ele.name}</p>
                    <p className="text-sm inline-block">{ele.utc}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
}
