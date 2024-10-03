import EmployeeTable from '@/components/client/employee/EmployeeTable';
import * as React from 'react';

export interface IEmployeisePageProps {
}

export default function EmployeisePage ({}: IEmployeisePageProps) {
  return (
    <div className='mt-5  flex flex-col  gap-5'>
      <EmployeeTable/>
    </div>
  );
}
