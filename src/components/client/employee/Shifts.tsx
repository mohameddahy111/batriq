import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IShiftsProps {
}

export default function Shifts ({}: IShiftsProps) {
    const t = useTranslations('employees_page.Shifts');
  return (
    <div>
      <h2 className="text-xl pt-4  text-[#172B4C]  font-semibold ">
        {t("min_title")}
      </h2>
      <div className=" py-5 flex flex-col gap-3">
        <Label className="ps-1">{t("Employee Shifts")}</Label>
        <Input readOnly className=" w-full" value={"Default"} type="text" />
      </div>
    </div>
  );
}
