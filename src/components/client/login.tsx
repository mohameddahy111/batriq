"use client";

import Logo from "@/components/client/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/lib/schema/yup.login.schema";
import {LoginAction}  from"@/app/actions";
import { useState } from "react";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const t = useTranslations();

  const [remember, setRemember] = useState<boolean>(false);
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    
    onSubmit: async (values)=>{
      const formData = new FormData()
      formData.append("email", values.email)
      formData.append("password", values.password)
      formData.append("remember", remember ? "true" : "false")

      await LoginAction(formData)
    }
  });

  return (
    <Card className="w-full max-w-md  ">
      <CardHeader className="flex items-center flex-col justify-center gap-2">
        <Logo width={200} height={200} />
        <CardTitle className=" font-[700]">{t("HomePage.title")}</CardTitle>
        <CardDescription>{t("HomePage.CardDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4"  onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col gap-2">
            <Label>
              <span className="block text-sm font-medium ">
                {t("HomePage.email_label")}
              </span>
            </Label>
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && Boolean(formik.errors.email) && (
              <span className="block text-sm text-red-600">
                {" "}
                {t(formik.errors.email)}{" "}
              </span>
            )}
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <Label>
                <span className="block text-sm font-medium ">
                  {t("HomePage.password_label")}
                </span>
              </Label>
              <Link href={"/forgot-password"}>
                <span className="text-sm text-muted-foreground">
                  {t("HomePage.password_forgot")}{" "}
                </span>
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && Boolean(formik.errors.password) && (
              <span className="block text-sm text-red-600">
                {t(formik.errors.password)}{" "}
              </span>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <Checkbox
              id="Remember"
              name="remember"
              checked={remember}
              onCheckedChange={()=>{setRemember(!remember)}}
              // defaultChecked={formik.values.remember as boolean}
             
            />
            <label
              htmlFor="Remember"
              className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("HomePage.Remember_label")}
            </label>
          </div>{" "}
          <Button type="submit" className="hover:bg-primary">
            {t("HomePage.login_button")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
