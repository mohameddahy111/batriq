// import Logo from "@/components/client/logo";

import { LanguageList } from "@/components/client/language-list";
import Login from "@/components/client/login";
import Logo from "@/components/client/logo";

export default async function Home() {
  return (
    <div className="w-full md:h-screen h-[700px] pb-10 flex-col flex px-2 sm:px-0 items-center justify-between">
      <div className="flex bg-white w-full items-center justify-between gap-4 px-4 py-2 ">
        <Logo />
        <LanguageList />
      </div>
      <Login />
    </div>
  );
}
