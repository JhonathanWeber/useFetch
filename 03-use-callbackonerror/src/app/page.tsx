"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const loginUser = (
    email: string,
    password: string,
    onSucess: Function,
    onError: Function
  ) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        return onError(new Error("erro no login"));
      }

      console.log("user logged!");
      console.log("" + password);
      onSucess({ email });
    }, 5000);

    console.log("depois do setTimeout");
  };

  const user = loginUser(
    "jhon@gmail.com",
    "1234596",
    (user: object) => {
      console.log({ user });
    },
    (error: any) => {
      console.log(error);
    }
  );

  return <></>;
}
