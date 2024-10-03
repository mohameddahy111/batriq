"use client";

import * as React from "react";
import { TabsContent } from "@/components/ui/tabs";
import PublicTabs from "../PublicTabs";
import { AddEmployeeTabs } from "@/lib/data";
import { Store } from "@/app/context/storeData";
import AddNewInput from "./AddNewInput";
import EditInput from "./EditIput";
import InsuranceTax from "./insurance-tax";
import FilesLinks from "./FilesLinks";
import EmploymentRule from "./EmploymentRule";
import DefaultSetting from "./DefaultSetting";
import Notifications from "./Notifications";

export interface IAddEmployeeProps {}

export default function AddEmployee({}: IAddEmployeeProps) {
  const { employeeInputs } = Store();
  return (
    <div className="" >
      <PublicTabs list={AddEmployeeTabs}>
        <>
          <TabsContent className="bg-white " value="Employee_Info">
            {employeeInputs.feildRequired.map((ele: any, i: number) => (
              <div className="" key={i}>
                <EditInput data={ele} index={i} />
              </div>
            ))}
            <AddNewInput />
          </TabsContent>
          <TabsContent className="bg-white " value="Insurance_Tax">
            <InsuranceTax />
          </TabsContent>
          <TabsContent className="bg-white " value="Files_Links">
            <FilesLinks />
          </TabsContent>
          <TabsContent className="bg-white " value="Employment_Rule">
            <EmploymentRule />
          </TabsContent>
          <TabsContent className="bg-white " value="Default_Setting">
            <DefaultSetting />
          </TabsContent>
          <TabsContent className="bg-white " value="Notifications">
            <Notifications />
          </TabsContent>
        </>
      </PublicTabs>
    </div>
  );
}
