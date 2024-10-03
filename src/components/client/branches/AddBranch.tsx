"use client";

import { Button } from "@/components/ui/button";
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

export function AddBranch() {
  return (
    <div className="p-x4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="hover:bg-primary font-semibold">Add Branch</Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[675px] h-fit md:h-full lg:h-fit  overflow-y-auto  w-full">
          <DialogHeader>
            <DialogTitle className="border-gray-300 font-[600] border-dashed border-b-2 py-2 text-start">
              {" "}
              Branches
            </DialogTitle>
          </DialogHeader>
          <form>
            <div className="py-4 w-full flex flex-col gap-4 ">
              <div className=" flex  items-start justify-center flex-col gap-2">
                <Label htmlFor="name">Branch Name</Label>

                <Input id="name" placeholder="Type name" />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div className=" flex  items-start justify-center flex-col gap-2">
                  <Label htmlFor="Country">Country</Label>
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
                <div className=" flex  items-start justify-center flex-col gap-2">
                  <Label htmlFor="City">City</Label>
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
                <div className=" flex  items-start justify-center flex-col gap-2">
                  <Label htmlFor="phon_1">Contact Phone</Label>

                  <Input id="phon_1" placeholder="Contact Phone" />
                </div>
                <div className=" flex  items-start justify-center flex-col gap-2">
                  <Label htmlFor="phon_2">Contact Phone 2</Label>

                  <Input id="phon_2" placeholder="Contact Phone 2" />
                </div>
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
              <Save className="size-4 me-2"/>
                Save{" "}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
