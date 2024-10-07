import * as React from "react";
import SearchBox from "../searchBox";
import LinkAsButton from "../LinkAsButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TablePagination from "../TablePagination";
import { Separator } from "@/components/ui/separator";

export interface IAttendanceTableProps {}

export default function AttendanceTable({  }: IAttendanceTableProps) {
  const data = [
    {
      code: "001 ",
      shiftName: "Shifts 01",
      workingHours: "9:00 AM - 5:00 PM",
      duration: "08:00"
    }
  ];
  const t = useTranslations("attendance_page");
  return (
    <div className=" bg-white rounded-lg shadow-md w-full h-full p-3 flex flex-col gap-3">
      <div className=" flex justify-between items-center w-full">
        <SearchBox />
        <LinkAsButton  link={`/attendance/add_attendance`}>
        <span>
            Add new Attendance
        </span>
        </LinkAsButton>
      </div>
      <div className="py-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">
                {t("Table.code")}{" "}
              </TableHead>
              <TableHead className="">
                {t("Table.Shift Name")}{" "}
              </TableHead>
              <TableHead className="">
                {t("Table.Working Hours")}{" "}
              </TableHead>
              <TableHead className="">
                {t("Table.Duration")}{" "}
              </TableHead>
              <TableHead className="">
                {t("Table.Action")}{" "}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ele, i) =>
              <TableRow key={i}>
                <TableCell>
                  {ele.code}
                </TableCell>
                <TableCell>
                  {ele.shiftName}
                </TableCell>
                <TableCell>
                  {ele.workingHours}
                </TableCell>
                <TableCell>
                  {ele.duration}
                  <span className="ps-2">
                    {t("Table.Hours")}{" "}
                  </span>
                </TableCell>
                <TableCell>
                  <LinkAsButton
                    icon
                    link={`/dashboard/admin/setting/branches/edit/${ele.code}`}
                  >
                    <Image
                      src="/edit-2.svg"
                      width={20}
                      height={20}
                      alt="edit"
                    />
                  </LinkAsButton>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Separator className="my-5" />
        <TablePagination />
      </div>
    </div>
  );
}
