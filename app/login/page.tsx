"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { TransitionLink } from "@/components/animations";

import { Input, PasswordInput } from "@/components/inputs";

import { LOGIN_ROUTE } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";

import { authErrors } from "@/utils/errors";

import useAppStore from "@/store";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useAppStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  useEffect(() => {
    if (!!userInfo.email) {
      if (userInfo.profileSetup) {
        router.push("/chat");
      } else router.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleLogin = async () => {
    if (authErrors(email, password, setErrorEmail, setErrorPassword)) {
      try {
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );

        if (response.data.user._id) {
          setUserInfo(response.data.user);

          if (response.data.user.profileSetup) {
            router.push("/app");
          } else {
            router.push("/profile");
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.status === 401) {
          setErrorPassword("Password is incorrect");
        } else if (error.status === 404) {
          setErrorEmail("No user found with this email");
        } else {
          setErrorEmail("Internal Server Error");
        }
        console.log(error);
      }
    }
  };

  return (
    <main className="relative min-h-screen xl:p-8 grid place-content-center xl:place-content-stretch xl:grid-cols-2 gap-8">
      <Link
        href="/"
        className="absolute top-4 left-4 lg:top-10 lg:left-10 text-white py-2 px-4 bg-zinc-900 bg-opacity-30 border-2 border-zinc-800 rounded-md"
      >
        Home
      </Link>
      
      <section className="min-h-screen px-8 xl:px-0 xl:min-h-full flex flex-col items-center w-screen xl:w-full justify-center">
        <div className="grid gap-4 w-full max-w-[460px]">
          <h1 className="text-3xl font-semibold xl:text-5xl 2xl:text-5xl">
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <TransitionLink
              href="/sign-up"
              className="text-primaryLight dark:text-primaryDark font-bold"
            >
              Sign Up
            </TransitionLink>
          </p>
        </div>

        <form
          className="mt-12 w-full max-w-[460px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="flex flex-col gap-5 items-start">
            <Input
              value={email}
              setValue={setEmail}
              error={errorEmail}
              type="email"
            />

            <PasswordInput
              password={password}
              setPassword={setPassword}
              errorPassword={errorPassword}
            />

            <button className="font-bold mt-5 w-full py-[14px] text-black bg-primary rounded-xl hover:text-white hover:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300">
              Login
            </button>
          </div>
        </form>
      </section>
      <section className="relative hidden xl:flex flex-col gap-3 items-center justify-center min-h-full rounded-xl bg-zinc-900 overflow-hidden">
        <div className="absolute -top-4 -left-1 w-[420px] border-4 border-zinc-800 rounded-xl overflow-hidden rotate-12">
          <img src="/interface.png" alt="chat" className=" object-contain" />
        </div>
        <div className="absolute -top-4 -right-6 w-[420px] border-4 border-zinc-800 rounded-xl overflow-hidden -rotate-[30deg]">
          <img src="/chat-3.png" alt="chat" className=" object-contain" />
        </div>
        <div className="absolute -bottom-2 -left-3 w-[420px] border-4 border-zinc-800 rounded-xl overflow-hidden rotate-6">
          <img src="/profile.png" alt="chat" className=" object-contain" />
        </div>
        <div className="absolute -bottom-0 -right-10 w-[420px] border-4 border-zinc-800 rounded-xl overflow-hidden -rotate-[20deg]">
          <img src="/chat-2.png" alt="chat" className=" object-contain" />
        </div>
        <h2 className="text-5xl font-extrabold">Chaters</h2>
        <div className="text-lg font-bold">Encrypted Messages!!</div>
      </section>{" "}
    </main>
  );
};

export default SignUpPage;
