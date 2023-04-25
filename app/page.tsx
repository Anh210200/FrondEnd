"use client";

// import Button from "@elements/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import logo from "assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
const HomePage = () => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gray-100 "
      }
    >
      <div className="px-20 py-10 shadow bg-white rounded-md flex flex-col">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p>UNI SPIDER</p>
        </div>
        <b
          className=" margin-top: 0.75rem; margin-bottom: 0.75rem;	"
        >
          Uni Spiderにログイン
        </b>
        <div className="rounded-lg bg-slate-400">
          <Button className="text-white" onClick={() => signIn()}>
            　ログインを続ける
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
