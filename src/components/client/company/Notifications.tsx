import { Store } from "@/app/context/storeData";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import * as React from "react";

export interface INotificationsProps {}

export default function Notifications({}: INotificationsProps) {
  const t = useTranslations("employees_page.NotificationsList");
  const { employeeInputs, setEmployeeInputs } = Store();
  const [notifications, setNotifications] = React.useState(
    employeeInputs.Notifications
  );
  const notificationsList = ["Email", "SMS", "Notification Area", "What’s App"];
  const alertsList = [
    "Files",
    "Attendance Daily",
    "Attendance Weekly",
    "Salary Setup"
  ];
  function awayList(val: string | boolean, ele: string) {
    if (val) {
      const list = [...notifications.channels];
      list.push(ele);
      setNotifications({
        ...notifications,
        channels: list
      });
    } else {
      const list = [...notifications.channels];
      const filter = list.filter((item) => item !== ele);
      setNotifications({
        ...notifications,
        channels: filter
      });
    }
  }
  function alartList(val: string | boolean, ele: string) {
    if (val) {
      const list = [...notifications.alerts];
      list.push(ele);
      setNotifications({
        ...notifications,
        alerts: list
      });
    } else {
      const list = [...notifications.alerts];
      const filter = list.filter((item) => item !== ele);
      setNotifications({
        ...notifications,
        alerts: filter
      });
    }
  }
  React.useEffect(() => {
    setEmployeeInputs({ ...employeeInputs, Notifications: notifications });
  }, [notifications]);
  return (
    <div className="flex flex-col gap-4">
      <h2 className=" text-sm font-semibold ">
        {" "}
        Select The Default Channels For Notifications
      </h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-3">
        {notificationsList.map((ele, i) => (
          <div className="flex items-center gap-1" key={i}>
            <Checkbox
              defaultChecked={notifications.channels.includes(ele)}
              onCheckedChange={(val) => {
                awayList(val, ele);
              }}
            />
            <Label>{t(ele)} </Label>
          </div>
        ))}
      </div>
      <div className="">
        <h2 className=" text-sm font-semibold "> Allow Alerts</h2>
        <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-3">
          {alertsList.map((ele, i) => (
            <div className="flex items-center gap-1" key={i}>
              <Checkbox
                onCheckedChange={(val) => {
                  alartList(val, ele);
                }}
                defaultChecked={notifications.alerts.includes(ele)}
              />
              <Label>{t(`alertsList.${ele}`)} </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
