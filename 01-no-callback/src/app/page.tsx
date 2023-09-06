"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const loginUser = (email: string, password: string) => {
    setTimeout(() => {
      console.log("user logged!");
      console.log("" + password);
      return { email };
    }, 5000);

    console.log("depois do login");
  };

  const user = loginUser("jhon@gmail.com", "1234596");

  console.log({ user });

  return <></>;
}
