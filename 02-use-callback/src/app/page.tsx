"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const loginUser = (email: string, password: string, callback: Function) => {
    setTimeout(() => {
      console.log("user logged!");
      console.log("" + password);
      callback({ email });
    }, 5000);

    console.log("depois do setTimeout");
  };

  const user = loginUser("jhon@gmail.com", "1234596", (user: object) => {
    console.log({ user });
  });

  return <></>;
}
