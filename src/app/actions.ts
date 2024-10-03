"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";

export async function LanguageService(lang: string) {
  cookies().set("locale", lang);
}

export async function LoginAction(formData: FormData) {
  cookies().set("token", "1");
  // return redirect("/admin/");
}

// export async function AddCompany(formData: FormData) {
//   await axios.post('/api/company', formData);
//   return redirect('/admin/setting/company');
// }
