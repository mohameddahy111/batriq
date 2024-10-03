"use client";

import { Store } from "@/app/context/storeData";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import * as React from "react";

export interface IFilesLinksProps {}

export default function FilesLinks({}: IFilesLinksProps) {
  const { employeeInputs, setEmployeeInputs } = Store();
  const [filesLinks, setFilesLinks] = React.useState(
    employeeInputs.employee_links
  );
  const [newFeild, setFeild] = React.useState({
    title: "",
    required: false,
    delete: true
  });
  function addNew() {
    const list = [...filesLinks];
    list.push({ ...newFeild });
    setFilesLinks(list);
    setEmployeeInputs({ ...employeeInputs, employee_links: list });
  }

  function valueHandler(value: string | boolean, input: string, index: number) {
    const list = [...filesLinks];
    list[index][input] = value;
    setFilesLinks(list);
    setEmployeeInputs({ ...employeeInputs, employee_links: list });
  }
  function deleteFeild(index: number) {
    const list = [...filesLinks];
    list.splice(index, 1);
    setFilesLinks(list);
    setEmployeeInputs({ ...employeeInputs, employee_links: list });
  }
  React.useEffect(() => {
    setFilesLinks(employeeInputs.employee_links);
  }, [employeeInputs]);

  React.useEffect(() => {
    setEmployeeInputs({ ...employeeInputs, employee_links: filesLinks });
  }, [filesLinks]);
  return (
    <div>
      {filesLinks.map((ele: any, i: number) => (
        <div className=" flex flex-col gap-2 py-3" key={i}>
          <div className=" grid sm:grid-cols-2 items-center gap-2 grid-cols-1  ">
            <Input
              placeholder={ele.title || "feild name"}
              className="bg-white"
              defaultValue={ele.title}
              onChange={(e) => {
                valueHandler(e.target.value, "title", i);
              }}
            />
            <div className=" flex items-center gap-2">
              {ele.date && (
                <div className=" flex items-center gap-2">
                  <Checkbox
                    defaultChecked={ele.show_data}
                    onCheckedChange={() => {
                      valueHandler(!ele.show_data, "show_data", i);
                    }}
                  />
                  <Label className="text-sm  ">Show Expiry Date</Label>
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Checkbox
                  defaultChecked={ele.required}
                  onCheckedChange={() => {
                    valueHandler(!ele.required, "required", i);
                  }}
                />
                <Label className="text-sm  ">Required </Label>
              </div>
              {ele.delete && (
                <Button
                  onClick={() => deleteFeild(i)}
                  variant={"ghost"}
                  className="text-red-500 flex items-center gap-1 hover:bg-red-500 hover:text-white"
                  size={"sm"}
                >
                  {" "}
                  <Trash2 /> <span>Delete Feild</span>{" "}
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
      <Button onClick={addNew} className=" hover:bg-primary">
        Add New Feild
      </Button>
    </div>
  );
}
