"use client";
import Button from "@elements/Button";
import TextBox from "@elements/TextBox";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "assets/img/logo.svg";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gray-50 gap-1 "
      }
    >
      <div className="px-20 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p>UNI SPIDER</p>
        </div>
        <b>Uni Spiderにログイン</b>
        <div className="">
          <TextBox
            lableText="Email address"
            onChange={(e) => (userName.current = e.target.value)}
          />
          <TextBox
            lableText="Password"
            type={"password"}
            onChange={(e) => (pass.current = e.target.value)}
          />
        </div>
        <div>
        <Button className="rounded-lg bg-slate-400 " onClick={onSubmit}>ログイン</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
