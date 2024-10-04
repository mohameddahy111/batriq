import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export interface INewDepartmentProps {}

export default function NewDepartment({  }: INewDepartmentProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="font-semibold hover:bg-primary capitalize">
            new department
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[300px] md:w-[500px] lg:w-[700px]">
          <DialogHeader className="border-b-2 border-dashed  py-3">
            <DialogTitle className=" capitalize ">
              Add new department
            </DialogTitle>
          </DialogHeader>
          <div className="">
            <form className=" flex flex-col gap-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label className="text-muted-foreground text-sm">
                    Department ID
                  </Label>
                  <Input
                    type="text"
                    placeholder="001234"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-muted-foreground text-sm">
                    Department Code{" "}
                    <span className="text-primary"> (4 Characters)</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Code"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label className="text-muted-foreground text-sm">
                    Department Name (AR)
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-muted-foreground text-sm">
                    Department Name (EN)
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label className="text-muted-foreground text-sm">
                    Parent Of
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="y">shvchs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Button className="bg-slate-500 hover:bg-slate-500 hover:shadow-sm shadow-lg">cancel</Button>
                <Button className=" hover:bg-primary">Save</Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
