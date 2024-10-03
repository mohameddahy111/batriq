

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { LogOut, MenuIcon } from "lucide-react";
import Logo from "../logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { adminSidebar } from "@/lib/data";
import { Accordion } from "@/components/ui/accordion";
import SidebarAccordion from "../SidebarAccordion";
import { useLocale, useTranslations } from "next-intl";
import { LanguageList } from "../language-list";
import UserMenu from "../UserMenu";

export function MobileDrawer() {
      const t = useTranslations();
      const local = useLocale();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="size-5 text-gray-500" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className=" border-b pb-4">
          <Logo />
        </SheetHeader>
        <SheetTitle></SheetTitle>
        <div className="h-full overflow-y-auto pb-10">
          <div className="   w-full  flex flex-col justify-between  ">
            <div className=" pt-3">
              <ScrollArea className="h-full">
                {adminSidebar.map((ele, i) => (
                  <div className={`p-2 ${local === "ar" && "rtl"}`} key={i}>
                    <span className="py-5 block text-muted-foreground  w-full">
                      {t(`${ele.title}`)}{" "}
                    </span>

                    <Accordion type="single" collapsible className="w-full ">
                      {ele.list.map((item, i) => (
                        <SidebarAccordion index={i} list={item} key={i} />
                      ))}
                    </Accordion>
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div className=" flex flex-col gap-5 justify-center ">
              <div className="flex justify-end pe-5">
                <LanguageList />
              </div>
              <UserMenu />
            </div>
            <div className="p-3">
              <Button
                variant={"outline"}
                className="bg-white text-black w-full flex items-center justify-start gap-2 "
              >
                <LogOut className="text-black" />
                <span className="text-black text-lg">
                  {t("sidebar.logout")}{" "}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
