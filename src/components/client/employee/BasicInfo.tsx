import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IBasicInfoProps {
}

const list = [
  {
    title: "Name Ar",
    value: " سارة رودريجيز جون"
  },
  {
    title: "Secondary Phone ",
    value: "+03 4567 8900"
  },
  {
    title: "Nationality",
    value: "Egyptian"
  },
  {
    title: "Residence",
    value: "Egyptian"
  },
  {
    title: "Passport Number",
    value: "01223489237234"
  },
  {
    title: "ID Number",
    value: "01223489237234"
  },
  {
    title: "Insurance Number",
    value: "01223489237234"
  }
];
export default function BasicInfo ({}: IBasicInfoProps) {
  const t = useTranslations('employees_page.Basic_Info');
  return (
    <div>
      <h2 className="text-xl  text-[#172B4C]  font-semibold ">Basic Info</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {list.map((ele, i )=>(
          <div className=" flex flex-col gap-2" key={i}>
            <Label className="ps-1">{t(ele.title)}</Label>
            <Input readOnly className=' w-full' value={ele.value} type="text" />
          </div>
        ))}

      </div>
    </div>
  );
}
