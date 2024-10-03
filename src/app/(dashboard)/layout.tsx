import * as React from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Logo from "@/components/client/logo";
import SidebarAccordion from "@/components/client/SidebarAccordion";
import { adminSidebar } from "@/lib/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { useLocale, useTranslations } from "next-intl";
import Navbar from "@/components/client/Navbar";
import { Metadata } from "next";

export interface ILayoutAdminProps {
  children: React.ReactElement;
}

export const metadata: Metadata = {
  title: "admin-Dashboard",
  description: ""
};
export default function Layout({ children }: ILayoutAdminProps) {
  const t = useTranslations();
  const local = useLocale();
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-screen  gap-2"
      >
        <ResizablePanel
          defaultSize={20}
          className="bg-white hidden md:flex shadow-md "
        >
          <div className="   w-full  flex flex-col justify-between  ">
            <div className=" pt-3">
              <Logo />
              <ScrollArea className="h-[580px]">
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
            <div className="p-3">
              <Button
                variant={"outline"}
                className="text-black w-full flex items-center justify-start gap-2 bg-white"
              >
                <LogOut className="text-black " />
                <span className="text-black text-lg">
                  {t("sidebar.logout")}{" "}
                </span>
              </Button>
            </div>
          </div>
        </ResizablePanel>
        <ResizablePanel defaultSize={80} className=" shadow-md">
          <div className="flex  flex-col ">
            <nav>
              <Navbar />
              <ScrollArea className=" md:h-[600px]">
                {children}
              </ScrollArea>
            </nav>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
