"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Store } from "@/app/context/storeData";

export interface IUserMenuProps {}

export default function UserMenu({}: IUserMenuProps) {
  const { user } = Store();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-start gap-2">
          <Avatar>
            <AvatarImage src={user?.img} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-center justify-center gap-1 max-w-28 w-fit">
            <span className=" text-sm line-clamp-1">
              {user.name || "Jhon Smith"}
            </span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <span className=" block size-2 bg-green-500 rounded-full"></span>
              Online
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
