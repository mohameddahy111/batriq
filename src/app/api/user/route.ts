import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      name: "mohamed",
      email: "mohamed@gmail.com",
      img: "https://github.com/shadcn.png",
      id: 1,
      roll: "admin"
    }
  ];
  return NextResponse.json({ users });
}
