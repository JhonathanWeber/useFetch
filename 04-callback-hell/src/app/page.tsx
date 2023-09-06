"use client";
import { useEffect, useState } from "react";

// Problema dos callbacks

interface userProps {
  email: string;
  password: string;
}

interface videoProps {
  id: string;
  title: string;
}

export default function Home() {
  const loginUser = (
    email: string,
    password: string,
    onSucess: Function,
    onError: Function
  ) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        return onError(new Error("erro no login"));
      }

      console.log("user logged!");
      console.log("" + password);
      onSucess({ email });
    }, 5000);

    console.log("depois do setTimeout");
  };

  const getUserVideos = (email: string, getVideos: Function) => {
    setTimeout(() => {
      getVideos([
        { id: "1", title: "master title 1" },
        { id: "2", title: "myfault title 2" },
        { id: "3", title: "star title 3" },
      ]);
    }, 3000);
  };

  const getVideoDetails = (video: any, getDetails: Function) => {
    setTimeout(() => {
      getDetails(video, (videoDetails: videoProps) => {
        console.log(videoDetails);
      });
    }, 2500);
  };

  loginUser(
    "jhon@gmail.com",
    "1234596",
    (user: userProps) => {
      console.log({ user });
      getUserVideos(user.email, (videos: string[]) => {
        console.log({ videos });
        getVideoDetails(videos[1], (details: any) => {
          console.log({ details });
        });
      });
    },
    (error: any) => {
      console.log(error);
    }
  );

  return <></>;
}
