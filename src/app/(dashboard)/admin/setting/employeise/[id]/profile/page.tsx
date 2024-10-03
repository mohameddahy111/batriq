import BasicInfo from "@/components/client/employee/BasicInfo";
import Files from "@/components/client/employee/Files";
import Holidays from "@/components/client/employee/Holidays";
import ManagerDepartments from "@/components/client/employee/ManagerDepartments";
import Shifts from "@/components/client/employee/Shifts";
import LinkAsButton from "@/components/client/LinkAsButton";
import PublicTabs from "@/components/client/PublicTabs";
import { Card } from "@/components/ui/card";
import { employeeProileList } from "@/lib/data";
import { TabsContent } from "@radix-ui/react-tabs";
import { ImageIcon } from "lucide-react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import * as React from "react";

export interface IEmployeeProps {
  params: Params
}

export default function Employee({
  params
}: IEmployeeProps) {
  return (
    <div className="mt-5 px-3  flex flex-col gap-5">
      <h1 className="text-xl  text-[#172B4C] font-semibold">
        Employee Profile
      </h1>
      <div className="">
        <PublicTabs list={employeeProileList}>
          <div className=" grid grid-flow-row-dense grid-cols-4  gap-2 ">
            <div className="col-span-4  md:col-span-1">
              <Card className="w-full gap-3 flex flex-col justify-center items-center py-4">
                <div className=" relative  shadow-slate-300 shadow-xl rounded-full ">
                  <Image
                    src={"/profileImage.svg"}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  <label
                    htmlFor="addImage"
                    className="absolute cursor-pointer shadow-md z-10  bottom-1 right-1 size-8 flex justify-center items-center bg-primary rounded-full"
                  >
                    <ImageIcon className="text-white size-5" />
                  </label>
                  <input id="addImage" type="file" className="hidden" />
                </div>
                <h4 className="pt-2 text-xl font-semibold">Sarah Rodriguez</h4>
                <p className="text-muted-foreground text-[12px]">
                  +03 4567 8900
                </p>
                <p className="text-muted-foreground text-[12px]">
                  sarah@companydomain.com
                </p>
                <LinkAsButton link={`/admin/setting/employeise/${params.id}/edit_profile`}>
                <span>Edit Profile</span>
                </LinkAsButton>
              </Card>
            </div>
            <div className=" w-full  col-span-4 md:col-span-3 ">
              <TabsContent value="Basic_Info">
                <BasicInfo />
              </TabsContent>
              <TabsContent value="Files_Links">
                <Files />
              </TabsContent>
              <TabsContent value="Manager_Departments">
                <ManagerDepartments />
              </TabsContent>
              <TabsContent value="Shifts">
                <Shifts />
              </TabsContent>
              <TabsContent value="Holidays_Contracts">
                <Holidays />
              </TabsContent>
              <TabsContent value="Attendance_Salary">
                Attendance_Salary
              </TabsContent>
              <TabsContent value="Extra_Fields">Extra_Fields</TabsContent>
            </div>
          </div>
        </PublicTabs>
      </div>
    </div>
  );
}
