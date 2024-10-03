"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { editProfile } from "@/lib/schema/yup.login.schema";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";

export interface IEmployeeEditProfileProps {}
export interface IEmployeeEditProfile {
  name_En: string;
  name_Ar: string;
  secondary_Phone: string;
  nationality: string;
  residence: string;
  passport_Number: string;
  id_Number: string;
  insurance_Number: string;
  phone: string;
  direct_manager: string;
  sub_departments: string;
  position: string;
  branch: string;
}

export default function EmployeeEditProfile({}: IEmployeeEditProfileProps) {
  const t = useTranslations("EmployeeEditProfile");
  const [employeeData, setEmployeeData] = React.useState<IEmployeeEditProfile>({
    name_En: "Employee",
    name_Ar: "مواظف",
    secondary_Phone: "0123456789",
    phone: "0123456789",
    nationality: "Egypt",
    residence: "Cairo",
    passport_Number: "123456789",
    id_Number: "123456789",
    insurance_Number: "123456789",
    direct_manager: "Ahmed",
    sub_departments: "Cairo",
    position: "center",
    branch: "Cairo"
  });

  const formik = useFormik({
    validationSchema: editProfile,
    initialValues: {
      name_En: employeeData.name_En,
      name_Ar: employeeData.name_Ar,
      secondary_Phone: employeeData.secondary_Phone,
      nationality: employeeData.nationality,
      residence: employeeData.residence,
      passport_Number: employeeData.passport_Number,
      id_Number: employeeData.id_Number,
      insurance_Number: employeeData.insurance_Number,
      phone: employeeData.phone,
      direct_manager: employeeData.direct_manager,
      sub_departments: employeeData.sub_departments,
      position: employeeData.position,
      branch: employeeData.branch
    },
    onSubmit: (values) => {}
  });
  return (
    <div className="flex flex-col gap-5  justify-center mt-5 px-5">
      <div className="">
        <h1 className=" text-2xl font-semibold text-[#172B4C]">{t("title")}</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className=" bg-white h-full p-5">
          <div className="flex flex-col  justify-center">
            <h3 className="text-xl font-semibold text-[#172B4C]">
              {t("Basic_Info")}
            </h3>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t(" English Name")}
                  </Label>
                  <Input
                    className="bg-white"
                    onChange={formik.handleChange}
                    value={formik.values.name_En}
                    name={"name_En"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.name_En}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t(" Arabic Name")}
                  </Label>
                  <Input
                    className="bg-white rtl"
                    onChange={formik.handleChange}
                    value={formik.values.name_Ar}
                    name={"name_Ar"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.name_Ar}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("phone")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    name={"phone"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.phone}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("secondary_Phone")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.secondary_Phone}
                    name={"secondary_Phone"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.secondary_Phone}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("nationality")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                    name={"nationality"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.nationality}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("residence")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.residence}
                    name={"residence"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.residence}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("passport_Number")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.passport_Number}
                    name={"passport_Number"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.passport_Number}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("id_Number")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.id_Number}
                    name={"id_Number"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.id_Number}
                    </p>
                  ) : null}
                </div>
                <div className=" flex flex-col gap-2">
                  <Label className="text-sm font-medium text-muted-foreground ps-2">
                    {t("insurance_Number")}
                  </Label>
                  <Input
                    className="bg-white "
                    onChange={formik.handleChange}
                    value={formik.values.insurance_Number}
                    name={"insurance_Number"}
                  />
                  {formik.errors.name_En ? (
                    <p className="text-red-500 py-2 text-[12px]">
                      {formik?.errors?.insurance_Number}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-5 my-5  justify-center">
            <h3 className="text-xl font-semibold text-[#172B4C]">
              {t("change_Image")}
            </h3>
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image
                    src="/profileImage.svg"
                    width={20}
                    height={20}
                    alt="avatar"
                    className="size-32 rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center py-5">
                  <button className="bg-primary text-white rounded-md px-5 py-2 shadow-lg active:shadow-sm font-normal">
                    Change Image
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-5 my-5  justify-center">
            <h3 className="text-xl font-semibold text-[#172B4C]">
              {t("Manager_Departments")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  {t("Direct Manager")}
                </Label>
                <Input
                  className="bg-white"
                  onChange={formik.handleChange}
                  value={formik.values.direct_manager}
                  name={"direct_manager"}
                />
                {formik.errors.direct_manager ? (
                  <p className="text-red-500 py-2 text-[12px]">
                    {formik?.errors?.direct_manager}
                  </p>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  {t("Sub Departments")}
                </Label>
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.sub_departments}
                  name={"sub_departments"}
                />
                {formik.errors.name_En ? (
                  <p className="text-red-500 py-2 text-[12px]">
                    {formik?.errors?.sub_departments}
                  </p>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  {t("Position")}
                </Label>
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.position}
                  name={"position"}
                />
                {formik.errors.name_En ? (
                  <p className="text-red-500 py-2 text-[12px]">
                    {formik?.errors?.position}
                  </p>
                ) : null}
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  {t("Branch")}
                </Label>
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.branch}
                  name={"branch"}
                />
                {formik.errors.name_En ? (
                  <p className="text-red-500 py-2 text-[12px]">
                    {formik?.errors?.branch}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-5 flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-[#172B4C]">
              {t("Files_Links")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 py-2">
              <Label className="text-sm font-medium text-muted-foreground ps-2">
                {t("Contract File")}
              </Label>
              <div className=" flex items-center justify-between gap-2">
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.Resume}
                  name={"Resume"}
                  type="file"
                  id="Resume"
                  accept=".pdf"
                />
                <label
                  htmlFor="Resume"
                  className="text-sm cursor-pointer shadow-lg active:shadow-sm bg-primary px-4 py-2 rounded-md font-medium text-wrap text-white "
                >
                  {t("Upload your Resume")}
                </label>
              </div>
              {formik.errors.name_En ? (
                <p className="text-red-500 py-2 text-[12px]">
                  {formik?.errors?.Resume}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 py-2">
              <Label className="text-sm font-medium text-muted-foreground ps-2">
                {t("Contract File")}
              </Label>
              <div className=" flex items-center justify-between gap-2">
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.Resume}
                  name={"Resume"}
                  type="file"
                  id="Resume"
                  accept=".pdf"
                />
                <label
                  htmlFor="Resume"
                  className="text-sm cursor-pointer shadow-lg active:shadow-sm bg-primary px-4 py-2 rounded-md font-medium text-wrap text-white "
                >
                  {t("Upload your Resume")}
                </label>
              </div>
              {formik.errors.name_En ? (
                <p className="text-red-500 py-2 text-[12px]">
                  {formik?.errors?.Resume}
                </p>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <div className="flex flex-col gap-2 py-2">
              <Label className="text-sm font-medium text-muted-foreground ps-2">
                {t("Insurance File")}
              </Label>
              <div className=" flex items-center justify-between gap-2">
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.Resume}
                  name={"Resume"}
                  type="file"
                  id="Resume"
                  accept=".pdf"
                />
                <label
                  htmlFor="Resume"
                  className="text-sm cursor-pointer shadow-lg active:shadow-sm bg-primary px-4 py-2 rounded-md font-medium text-wrap text-white "
                >
                  {t("Upload your Resume")}
                </label>
              </div>
              {formik.errors.name_En ? (
                <p className="text-red-500 py-2 text-[12px]">
                  {formik?.errors?.Resume}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 py-2">
              <Label className="text-sm font-medium text-muted-foreground ps-2">
                {t("Contract File")}
              </Label>
              <div className=" flex items-center justify-between gap-2">
                <Input
                  className="bg-white "
                  onChange={formik.handleChange}
                  value={formik.values.Resume}
                  name={"Resume"}
                  type="file"
                  id="Resume"
                  accept=".pdf"
                />
                <label
                  htmlFor="Resume"
                  className="text-sm cursor-pointer shadow-lg active:shadow-sm bg-primary px-4 py-2 rounded-md font-medium text-wrap text-white "
                >
                  {t("Upload your Resume")}
                </label>
              </div>
              {formik.errors.name_En ? (
                <p className="text-red-500 py-2 text-[12px]">
                  {formik?.errors?.Resume}
                </p>
              ) : null}
            </div>
          </div>
            <h3 className="text-xl font-semibold text-[#172B4C]">
              {t("Links")}
            </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 py-3 ">
            <div className="flex flex-col  gap-2 py-2">
                <Label className="text-sm font-medium text-muted-foreground ps-2">
                  {t("LinkedIn File")}
                  </Label>
                  <Input value={'www.linkedin.com'} className="bg-white " />
            </div>
            <div className="flex flex-col gap-2 py-2">
              <Label className="text-sm font-medium text-muted-foreground ps-2">
                {t("FaceBook File")}
              </Label>
              <Input value={'www.facebook.com'} className="bg-white " />
            </div>
           
          </div>

          <div className="py-5">
            <Button className=" hover:bg-primary">Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
