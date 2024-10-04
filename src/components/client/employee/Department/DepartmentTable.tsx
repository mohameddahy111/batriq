import * as React from 'react';
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
import { Separator } from "@/components/ui/separator";
import SearchBox from '../../searchBox';
import LinkAsButton from '../../LinkAsButton';
import TablePagination from '../../TablePagination';
import NewDepartment from './new-department';


export interface IDepartmentTableProps {
}

export default function DepartmentTable ({}: IDepartmentTableProps) {
    const data = [
        {
          code:"001 ",
           name_en:"mohamed",
           name_ar:"محمد",
           Parent_Dep:"Accu",
          Dep_Code:"Accu"
        },
      ]
      const t = useTranslations("DepartmentPage")
    
  return (
    <div className=" bg-white rounded-lg shadow-md w-full h-full p-3 flex flex-col gap-3">
      <div className=" flex justify-between items-center w-full">
        <SearchBox />
        <NewDepartment/>

              </div>
      <div className="py-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">{t("Table.id")} </TableHead>
              <TableHead className="">{t("Table.Dep_Code")} </TableHead>
              <TableHead className="">{t("Table.Name AR")} </TableHead>
              <TableHead className="">{t("Table.Name EN")} </TableHead>
              <TableHead className="">{t("Table.Parent_Dep")} </TableHead>
              <TableHead className="">{t("Table.Action")} </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ele , i )=>(
            <TableRow key={i}>
              <TableCell>{ele.code}</TableCell>
              <TableCell>{ele.Dep_Code}</TableCell>
              <TableCell>{ele.name_en}</TableCell>
              <TableCell>{ele.name_ar}</TableCell>
              <TableCell>{ele.Parent_Dep}</TableCell>
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
