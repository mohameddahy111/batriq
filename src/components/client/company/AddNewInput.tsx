"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Store } from "@/app/context/storeData";
import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";
import { useFormik } from "formik";
import * as yup from "yup";

export interface IAddNewInputProps {}

export default function AddNewInput({}: IAddNewInputProps) {
  const itemVildtion = yup.object({
    fieldName: yup.string().min(2, "min 2 characters").required("required")
  });

  const { toast } = useToast();
  const { employeeInputs, setEmployeeInputs } = Store();
  const [newInput, setNewInput] = React.useState<{
    fieldName: string;
    fieldType: string;
    required: boolean;

    name: string;
  }>({
    fieldName: "",
    fieldType: "text",
    required: false,
    name: ""
  });
  function AddNew(values: any) {
    const isExist = employeeInputs.feildRequired.find(
      (ele: any) => ele.fieldName === values.fieldName
    );
    if (isExist) {
      toast({
        variant: "destructive",
        title: " this name Feild already exist",
        description: "There was a problem with your request."
      });
      return;
    }
    const list = [...employeeInputs.feildRequired];
    const item = {
      fieldName: values.fieldName,
      fieldType: newInput.fieldType,
      required: newInput.required
    };
    list.push({ ...item });
    setNewInput({ fieldName: "", fieldType: "", required: false, name: "" });
    setEmployeeInputs({...employeeInputs , feildRequired:list});
    formik.handleReset(values)
  }
  const formik = useFormik({
    validationSchema: itemVildtion,
    initialValues: {
      fieldName: "",
      fieldType: newInput.fieldType,
      required: newInput.required
    },
    onSubmit: (values) => {
      AddNew(values);
      
    }
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          <div className="">
            <Input
              placeholder={"Feild Name"}
              className="bg-white"
              // onChange={(e) =>
              //   setNewInput({ ...newInput, fieldName: e.target.value })
              // }
              onChange={formik.handleChange}
              value={formik.values.fieldName}
              name={"fieldName"}
            />
            {formik.errors.fieldName ? (
              <p className="text-red-500 py-2 text-[12px]">
                {formik?.errors?.fieldName}
              </p>
            ) : null}
          </div>
          <Select
            value={newInput.fieldType || "text"}
            name="type"
            onValueChange={(value) => {
              setNewInput({ ...newInput, fieldType: value });
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder={"Type"} className="text-sm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">
                <span className=" capitalize "> text </span>
              </SelectItem>
              <SelectItem value="number">
                <span className=" capitalize ">number </span>
              </SelectItem>
              <SelectItem value="email">
                <span className=" capitalize ">email </span>
              </SelectItem>
              <SelectItem value="date">
                <span className=" capitalize ">date </span>
              </SelectItem>
              <SelectItem value="tel">
                <span className=" capitalize ">tel </span>
              </SelectItem>
              <SelectItem value="time">
                <span className=" capitalize ">time </span>
              </SelectItem>
              <SelectItem value="url">
                <span className=" capitalize ">url </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={() => {
                setNewInput({ ...newInput, required: !newInput.required });
              }}
              defaultChecked={newInput.required}
              checked={newInput.required}
              name="required"
            />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Required
            </label>
          </div>
        </div>
        <div className="">
          <Button className=" hover:bg-primary">Add New Feild </Button>
        </div>
      </form>
    </div>
  );
}
