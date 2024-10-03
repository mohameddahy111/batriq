import { AddBranch } from '@/components/client/branches/AddBranch';
import AddEmployee from '@/components/client/company/AddEmployee';
import { NewContract } from '@/components/client/company/NewContract';
import Cards from '@/components/client/dashboard/Cards';
import EmployeeTable from '@/components/client/employee/EmployeeTable';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IAdminPageProps {
}

export default function AdminPage ({}: IAdminPageProps) {
  const t= useTranslations();
  return (
    <div className="mt-5 px-3  flex flex-col gap-5">
      <div className="">
        <h1 className="text-xl  text-[#172B4C] font-semibold">
          {t("dashboard_page.overview")}
        </h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Cards
          title={t("dashboard_page.cards.card1.title")}
          icon={"/profile-2user.svg"}
          number={100}
        />
        <Cards
          title={t("dashboard_page.cards.card1.title")}
          icon={"/profile-2user.svg"}
          number={100}
        />
        <Cards
          title={t("dashboard_page.cards.card1.title")}
          icon={"/profile-2user.svg"}
          number={100}
        />
        <Cards
          title={t("dashboard_page.cards.card1.title")}
          icon={"/profile-2user.svg"}
          number={100}
        />
      </div>
      <div className=" bg-white h-full p-5">
       {/* <AddBranch /> */}
        <NewContract /> 
        <AddEmployee />
     <EmployeeTable /> 
      </div>
    </div>
  );
}
