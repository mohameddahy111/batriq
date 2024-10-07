import { useTranslations } from 'next-intl';
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import SearchBox from '@/components/client/searchBox';
import TablePagination from '@/components/client/TablePagination';
import LinkAsButton from '@/components/client/LinkAsButton';

export interface IPayrollAreaPageProps {
}

export default function PayrollAreaPage ({}: IPayrollAreaPageProps) {
  const t = useTranslations('Payroll Area');
  const data = [
    {
      code:"001 ",
      payrollName:"Payroll Name1",
      payrollNameAR:"Payroll Name1",
      status:"Fixed",
      percentage:"0.2%"
    },
  ]
  
  return (
    <div>
      <h2 className='text-2xl font-bold text-[#172B4C] py-5 px-2'>{t('title')}</h2>
      <div className=" bg-white rounded-lg shadow-md w-full h-full p-3 flex flex-col gap-3">
      <div className=" flex justify-between items-center w-full">
        <SearchBox />
      <LinkAsButton link="/payroll_area/add_new_payroll">
     <span>Add New Payroll</span>
      </LinkAsButton>

              </div>
      <div className="py-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">{t("Table.ID")} </TableHead>
              <TableHead className="">{t("Table.Payroll Name")} </TableHead>
              <TableHead className="">{t("Table.Payroll Name AR")} </TableHead>
              <TableHead className="">{t("Table.Status")} </TableHead>
              <TableHead className="">{t("Table.Percentage")} </TableHead>
              <TableHead className="">{t("Table.Action")} </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ele , i )=>(
            <TableRow key={i}>
              <TableCell>{ele.code}</TableCell>
              <TableCell>{ele.payrollName}</TableCell>
              <TableCell>{ele.payrollNameAR}</TableCell>
              <TableCell>{ele.status}</TableCell>
              <TableCell>{ele.percentage}</TableCell>
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

    </div>
  );
}

