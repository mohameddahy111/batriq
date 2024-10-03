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
import { Edit, Save, Trash2 } from "lucide-react";
import * as yup from "yup";
import { useToast } from "@/hooks/use-toast";
import { useFormik } from "formik";

export interface IEditInputProps {
  data: any;
  index: number;
}

export default function EditInput({ data, index }: IEditInputProps) {
  const itemVildtion = yup.object({
    fieldName: yup.string().min(2, "min 2 characters").required("required")
  });

  const { employeeInputs, setEmployeeInputs } = Store();
  const [editInput, setEditInput] = React.useState(data);
  const [read, setRead] = React.useState(true);
  const { toast } = useToast();

  function edit(action: string, valus?: any) {
    if (action === "edit") {
      setRead(false);
    } else {
      employeeInputs.feildRequired[index].fieldName = valus.fieldName;
      employeeInputs.feildRequired[index].fieldType = editInput.fieldType;
      employeeInputs.feildRequired[index].required = editInput.required;
      setRead(true);
    }
  }
  const formik = useFormik({
    validationSchema: itemVildtion,
    initialValues: {
      fieldName: editInput.fieldName,
      fieldType: editInput.fieldType,
      required: editInput.required
    },
    onSubmit: (values) => {
      const item = employeeInputs.feildRequired.find(
        (ele: any) => ele.fieldName === values.fieldName
      );
      if (item) {
        if (item.fieldName !== data.fieldName) {
        toast({
          variant: "destructive",
          title: "this name Feild already exist",
          description: "There was a problem with your request."
        });
        return
      } else{
        edit("save", values);

      }
    }
      else {
        edit("save", values);
      }
    }
  });
  function deleteItem(){
    const item = employeeInputs.feildRequired.filter(
      (ele: any) => ele.fieldName !== editInput.fieldName
    );
    setEmployeeInputs(item)
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 py-5">
        <div className="">
          <Input
            placeholder={"Feild Name"}
            name={"fieldName"}
            className="bg-white"
            // defaultValue={editInput.fieldName}
            onChange={formik.handleChange}
            disabled={read}
            value={formik.values.fieldName}
          />
          {formik.errors.fieldName ? (
            <p className="text-red-500 py-2 text-[12px]">
              {formik?.errors?.fieldName}
            </p>
          ) : null}
        </div>
        <Select
          value={editInput.fieldType || "text"}
          name="type"
          onValueChange={(value) => {
            setEditInput({ ...editInput, fieldType: value });
          }}
          disabled={read}
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
              setEditInput({ ...editInput, required: !editInput.required });
            }}
            defaultChecked={editInput.required}
            name="required"
            disabled={read}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Required
          </label>
        </div>
        <div className=" flex justify-start items-center gap-2 ">
          {!read ? (
            <Button
              type="submit"
              title="Save"
              className="rounded-full ring-1 ring-primary  shadow-md bg-transparent text-primary"
              size={"icon"}
            >
              <Save className="size-5" />
            </Button>
          ) : (
            <span
              title="Edit"
              className="rounded-full size-10 flex items-center cursor-pointer justify-center ring-1 ring-primary  shadow-md bg-transparent text-primary"
              onClick={() => edit("edit")}
            >
              <Edit className="size-5" />
            </span>
          )}
          <span
            title="Delete" 
            onClick={deleteItem}
            className="rounded-full size-10 flex items-center cursor-pointer justify-center ring-1 ring-red-500  shadow-md bg-transparent text-red-500"
          >
            <Trash2 className="size-5" />
          </span>
        </div>
      </div>
    </form>
  );
}
