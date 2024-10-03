import AddEmployee from '@/components/client/company/AddEmployee';
import * as React from 'react';

export interface INewEmployeeProps {
}

export default function NewEmployee ({}: INewEmployeeProps) {
  return (
    <div className="mt-5  flex flex-col  gap-5 ">
<h2 className='text-2xl font-bold text-[#172B4C] p-4'>New Employee</h2>
        <AddEmployee />
    </div>
  );
}
