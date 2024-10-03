import BranshesTable from '@/components/client/branches/branshes-table';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IBrangesPageProps {
}

export default function BrangesPage ({}: IBrangesPageProps) {
  const t = useTranslations("Branches")
  return (
    <div className='flex flex-col  justify-center w-full h-full gap-5 p-3'>
        <h1 className='text-2xl font-bold text-[#172B4C]'>{t("Branches")}</h1>

        <BranshesTable/>
      
    </div>
  );
}
