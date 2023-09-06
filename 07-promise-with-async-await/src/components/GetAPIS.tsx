"use client";

import { useEffect, useState } from "react";

export function GetAPIS() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUsers(users);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="flex gap-4 bg-slate-500 p-2 m-2">
          <p>Cód: {user.id}</p>
          <p>Nome: {user.name}</p>
        </div>
      ))}
    </div>
  );
}
