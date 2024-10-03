import DepartmentTable from '@/components/client/employee/Department/DepartmentTable';
import * as React from 'react';

export interface IDepartmentPageProps {
}

export default function DepartmentPage ({}: IDepartmentPageProps) {
  return (
    <div className='mt-5  flex flex-col  gap-5'>
        <div className="">
            <h2 className='text-xl font-bold px-3 text-[#172B4C] '>Department</h2>
        </div>
        <DepartmentTable/>
      
    </div>
  );
}
