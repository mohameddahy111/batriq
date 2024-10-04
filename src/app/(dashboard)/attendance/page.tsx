import AttendanceTable from '@/components/client/attendance/attendance-table';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IAttendancePageProps {
}

export default function AttendancePage ({}: IAttendancePageProps) {
    const t = useTranslations("attendance_page")
  return (
    <div className='mt-5  flex flex-col  gap-5'>
        <div className=" flex justify-between items-center ">
            <h2 className='text-xl font-bold px-3 text-[#172B4C]'>{t('title')}</h2>
        </div>
      <AttendanceTable/>
    </div>
  );
}
