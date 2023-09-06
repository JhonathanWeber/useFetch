"use client";

import { resolve } from "path";
import { useEffect } from "react";

export default function Home() {
  function teste() {
    return "Buscando dados primeira API teste";
  }

  const teste2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Buscando dados segunda API teste2");
      }, 5000);
    });
  };

  async function getAPI3() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  const getData1 = new Promise((resolve) => {
    resolve(teste());
  });
  const getData2 = new Promise((resolve) => {
    resolve("BUSCANDO DADOS SEGUNDA API");
  });

  const getData3 = new Promise((resolve) => {
    resolve(getAPI3());
  });

  const getTeste2 = new Promise((resolve) => resolve(teste2()));

  Promise.all([getData1, getData2, getTeste2, getData3]).then((resolve) =>
    console.log(resolve)
  );

  const getAPIPlaceHolder = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  getAPIPlaceHolder().then((data) => console.log(data));

  return <></>;
}
