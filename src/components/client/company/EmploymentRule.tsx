import { Store } from "@/app/context/storeData";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as React from "react";

export interface IEmploymentRuleProps {}

export default function EmploymentRule({}: IEmploymentRuleProps) {
  const { employeeInputs, setEmployeeInputs } = Store();
  const [rule, setRule] = React.useState(employeeInputs.Contract_End_Rule);
  React.useEffect(() => {
    setEmployeeInputs({ ...employeeInputs, Contract_End_Rule: rule });
  }, [rule]);
  return (
    <div className=" flex flex-col gap-5 items-start justify-center h-full">
      <h2 className="text-sm font-semibold ">Contract End Rule</h2>
      <div className="">
        <RadioGroup
          defaultValue={rule.contract_end}
          className="justify-between flex items-center gap-5 p-3 max-w-fit"
          onValueChange={(value) => {
            setRule({ ...rule, contract_end: value });
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" />
            <Label>Has End </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" />
            <Label>Has No End </Label>
          </div>
        </RadioGroup>
      </div>
      <div className=" flex flex-col space-y-3 py-3">
      <h4 className="text-sm font-semibold ">Max Contract Months</h4>
      <Select>
        <SelectTrigger className="w-[300px]" >
          <SelectValue placeholder="Choose Count" />
        </SelectTrigger>
        <SelectContent></SelectContent>
      </Select>

      </div>
    </div>
  );
}
