import * as yup from "yup";
export const loginSchema = yup.object({
  email: yup
    .string()
    .email()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , "HomePage.email_error"
    )
    .required("HomePage.email_error"),
  password: yup.string().required("HomePage.password_error"),
  remember: yup.boolean().default(false)
});


export const editProfile = yup.object({
  name_En : yup.string().min(2, "min 2 characters").required("required"),
  name_Ar : yup.string().min(2, "min 2 characters").required("required"),
  secondary_Phone : yup.string().min(2, "min 2 characters").required("required"),
  nationality : yup.string().min(2, "min 2 characters").required("required"),
  residence : yup.string().min(2, "min 2 characters").required("required"),
  passport_Number : yup.string().min(2, "min 2 characters").required("required"),
  id_Number : yup.string().min(2, "min 2 characters").required("required"),
  insurance_Number : yup.string().min(2, "min 2 characters").required("required"),
  phone : yup.string().min(2, "min 2 characters").required("required"),
  direct_manager : yup.string().min(2, "min 2 characters").required("required"),
  sub_departments : yup.string().min(2, "min 2 characters").required("required"),
  position : yup.string().min(2, "min 2 characters").required("required"),
  branch : yup.string().min(2, "min 2 characters").required("required"),
})