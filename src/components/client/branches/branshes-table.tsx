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
import { AddBranch } from "./AddBranch";

export interface IBranshesTableProps {}

export default function BranshesTable({  }: IBranshesTableProps) {
  const data = [
    {
      code:"001 ", name:"Branches 01",
      country:"Egypt",
      city:"Alex",
      contactPhone:"010 1234 5678",
    },
  ]
  const t = useTranslations("Branches")
  return (
    <div className=" bg-white rounded-lg shadow-md w-full h-full p-3 flex flex-col gap-3">
      <div className=" flex justify-between items-center w-full">
        <SearchBox />
        <AddBranch/>
              </div>
      <div className="py-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">{t("Table.code")} </TableHead>
              <TableHead className="">{t("Table.Name")} </TableHead>
              <TableHead className="">{t("Table.Country")} </TableHead>
              <TableHead className="">{t("Table.City")} </TableHead>
              <TableHead className="">{t("Table.Contact Phone")} </TableHead>
              <TableHead className="">{t("Table.Action")} </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ele , i )=>(
            <TableRow key={i}>
              <TableCell>{ele.code}</TableCell>
              <TableCell>{ele.name}</TableCell>
              <TableCell>{ele.country}</TableCell>
              <TableCell>{ele.city}</TableCell>
              <TableCell>{ele.contactPhone}</TableCell>
              <TableCell>
                <LinkAsButton icon link={`/dashboard/admin/setting/branches/edit/${ele.code}`}>
                 <Image src="/edit-2.svg" width={20} height={20} alt="edit" />
                </LinkAsButton>
              </TableCell>
            </TableRow>

            ))}
          </TableBody>
        </Table>
        <Separator className="my-5" />
        <TablePagination/>
      </div>
    </div>
  );
}
