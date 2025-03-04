"use client";

import { LoginTab, SignupTab } from "@/components/auth";

import useAppStore from "@/store";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const AuthPage = () => {
  const router = useRouter();
  const { userInfo } = useAppStore();

  const [tab, setTab] = useState<"signup" | "login">("signup");

  useEffect(() => {
    if (!!userInfo.email) {
      if (userInfo.profileSetup) {
        router.push("/chat");
      } else router.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <main className="h-screen grid xl:grid-cols-2">
      <div className="bg-neutral-900 w-full h-full"></div>

      <div className="flex w-[85vw] max-w-[440px] xl:w-full xl:max-w-full mx-auto xl:mx-0 xl:pl-[20%] xl:pr-[30%] 2xl:pr-[35%] justify-center flex-col">
        <h1 className="text-3xl sm:text-4xl">Welcome to Chaters</h1>

        {tab === "signup" && <SignupTab setTab={setTab} />}
        {tab === "login" && <LoginTab setTab={setTab} />}
      </div>
    </main>
  );
};
export default AuthPage;
