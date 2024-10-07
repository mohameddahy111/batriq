"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Save } from "lucide-react";

export function NewContract() {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="hover:bg-primary font-semibold">
            New Contract
          </Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[675px] h-fit md:h-full lg:h-fit  overflow-y-auto  w-full">
          <DialogHeader>
            <DialogTitle className="border-gray-300 font-[600] border-dashed border-b-2 py-2 text-start">
              {" "}
              New Contract
            </DialogTitle>
          </DialogHeader>
          <form className="w-full">
            <div className="grid grid-cols-2 w-full  py-5 gap-2 ">
              <div className="flex flex-col  gap-2 justify-center">
                <Label>Contract ID</Label>
                <Input placeholder="Contract ID" className="w-full"/>
              </div>
              <div className="flex flex-col  gap-2 justify-center ">
                <Label>Employee ID</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center py-6 col-span-2 gap-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Set Open Date contract
                </label>
              </div>
              <div className="flex flex-col  gap-4 justify-center">
                <Label>Start Date</Label>
                <input
                  placeholder="Start Date"
                  type="date"
                  className="placeholder:text-gray-400 w-full p-2 bg-transparent border  border-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col  gap-4 justify-center">
                <Label>End Date</Label>
                <input
                  placeholder="End Date"
                  type="date"
                  className="placeholder:text-gray-400 w-full p-2 bg-transparent border  border-gray-200 rounded-md"
                />
              </div>
            </div>
            <DialogFooter className="flex justify-center items-center gap-6">
              <Button
                variant={"secondary"}
                className="w-full bg-gray-300 hover:bg-gray-400"
              >
                {" "}
                Cancel{" "}
              </Button>
              <Button type="submit" className="w-full  hover:bg-primary">
                <Save className="size-4 me-2" />
                Save{" "}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
