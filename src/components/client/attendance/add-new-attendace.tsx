import { useTranslations } from "next-intl";
import * as React from "react";

export interface INewAddAttendanceProps {}

export default function NewAddAttendance({  }: INewAddAttendanceProps) {
  const t = useTranslations("attendance_page.newAttendance");
  return (
    <div className="mt-5  flex flex-col  gap-5">
      <h2>
        {" "}{t("title")}
      </h2>
    </div>
  );
}
