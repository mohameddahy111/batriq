import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import * as React from "react";

export interface ICardsProps {
  title: string;
  icon: string;
  number: number | string;
}

export default function Cards({ title, icon, number }: ICardsProps) {
  return (
    <Card className="flex flex-col flex-wrap w-screen  sm:w-full text-black ">
      <CardHeader>
        <CardTitle className="font-medium text-xl text-muted-foreground line-clamp-1 text-wrap ">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex  justify-between items-center">
          <span className="text-xl font-semibold">{number}</span>
          <div className="size-10 flex justify-center items-center bg-primary rounded-full">
            <Image src={icon} alt={title} width={25} height={25} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
