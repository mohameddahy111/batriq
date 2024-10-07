import AddEmployee from "@/components/client/company/AddEmployee";
import { Button } from "@/components/ui/button";
import * as React from "react";

export interface INewEmployeeProps {}

export default function NewEmployee({  }: INewEmployeeProps) {
  return (
    <div className="mt-5  flex flex-col  gap-5 ">
      <h2 className="text-2xl font-bold text-[#172B4C] p-4">New Employee</h2>
      <AddEmployee />
      <div className=" flex justify-end items-center px-5">
      <Button className="mt-5">Save</Button>

      </div>
    </div>
  );
}
