'use client'

import { Store } from "@/app/context/storeData";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as React from "react";

export interface IInsuranceTaxProps {}

export default function InsuranceTax(props: IInsuranceTaxProps) {
  const { employeeInputs, setEmployeeInputs } = Store();
  const [insuranceTax, setInsuranceTax] = React.useState(
    employeeInputs.insurance_tax
  );

  function changeInsuranceTax(value: string, target: string) {
    insuranceTax[target] = value;
    setEmployeeInputs({ ...employeeInputs, insurance_tax: insuranceTax });
  }
  return (
    <div>
      <div className=" w-fit py-3 px-5">
        <Label className=" text-sm font-semibold ">Is Insurance Used</Label>

        <RadioGroup
          onValueChange={(value) => {
            changeInsuranceTax(value, "insurance");
          }}
          defaultValue={insuranceTax.insurance}
          className=" justify-between flex items-center gap-2 p-3"
        >
          <div className="">
            <Label htmlFor="insurance_yes" className=" text-sm font-semibold ">
              Yes
            </Label>
            <RadioGroupItem
              id={"insurance_yes"}
              value={"yes"}
              className="flex justify-center items-center gap-2"
            />
          </div>
          <div className="">
            <Label htmlFor="insurance_no" className=" text-sm font-semibold ">
              No
            </Label>
            <RadioGroupItem
              id={"insurance_no"}
              value={"no"}
              className="flex justify-center items-center gap-2"
            />
          </div>
        </RadioGroup>
      </div>
      <div className=" w-fit py-3 px-5">
        <Label className=" text-sm font-semibold ">Is Tax Income Used</Label>
        <RadioGroup
          defaultValue={insuranceTax.tax}
          onValueChange={(value) => {
            changeInsuranceTax(value, "tax");
          }}
          className=" justify-between flex items-center gap-2 p-3"
        >
          <div className="">
            <Label htmlFor="tax_yes" className=" text-sm font-semibold ">
              Yes
            </Label>
            <RadioGroupItem
              id={"tax_yes"}
              value={"yes"}
              className="flex justify-center items-center gap-2"
            />
          </div>
          <div className="">
            <Label htmlFor="tax_no" className=" text-sm font-semibold ">
              No
            </Label>
            <RadioGroupItem
              id={"tax_no"}
              value={"no"}
              className="flex justify-center items-center gap-2"
            />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
