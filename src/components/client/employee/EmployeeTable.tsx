import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { employeeList } from "@/lib/data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TablePagination from "../TablePagination";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SearchBox from "../searchBox";
import LinkAsButton from "../LinkAsButton";

export interface IEmployeeTableProps {}

export default function EmployeeTable({}: IEmployeeTableProps) {
  const t = useTranslations("employees_page.Table");

  return (
    <div className="py-5 px-5 shadow-md rounded-lg bg-white w-full h-full">
            <div className=" flex justify-between items-center w-full">
        <SearchBox />
        <LinkAsButton link="/admin/setting/employeise/new_employee">
          <span>{t("new Employee")}</span>
        </LinkAsButton>
      </div>

      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="">{t("ID")}</TableHead>
            <TableHead>{t("Image")}</TableHead>
            <TableHead>{t("Job Title")}</TableHead>
            <TableHead className="">{t("department")}</TableHead>
            <TableHead className="hidden md:table-cell ">
              {t("Email")}
            </TableHead>
            <TableHead className=" ">{t("Action")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeeList.map((ele, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                <Image
                  src={ele.avatarUrl}
                  alt="avatar"
                  width={10}
                  height={10}
                  className="w-10 h-10 rounded-full"
                />
              </TableCell>
              <TableCell>
                <p className=" font-medium">{ele.name}</p>
                <p className="text-muted-foreground text-[12px]">{ele.tel}</p>
              </TableCell>
              <TableCell className="font-medium ">{ele.department}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {ele.email}
              </TableCell>

              <TableCell className="text-muted-foreground flex items-center gap-2">
                <Link href={`/admin/setting/employeise/${i + 1}/edit_profile`}>
                  <Image
                    src={"/edit-2.svg"}
                    alt="edit"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href={`/admin/setting/employeise/${i + 1}/profile`}>
                  <Image src={"/eye.svg"} alt="edit" width={20} height={20} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="my-5" />
      <div className="">
        <TablePagination />
      </div>
    </div>
  );
}
