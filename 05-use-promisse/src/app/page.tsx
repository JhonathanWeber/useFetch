"use client";

interface userProps {
  email: string;
  password: string;
}

interface videoProps {
  id: string;
  title: string;
}

export default function Home() {
  const loginUserPromise = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      const error = false;
      if (error) {
        reject(new Error("Falha: ocorreu um error no login!!!"));
      }
      console.log("user logged!");
      setTimeout(() => {
        resolve({ email });
      }, 3000);
    });
  };

  const getUserVideosPromise = (email: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          resolve([
            { id: "1", title: "master title 1" },
            { id: "2", title: "myfault title 2" },
            { id: "3", title: "star title 3" },
          ]);
        } else {
          reject(new Error("Falha: ocorreu um error no login!!!"));
        }
      });
    });
  };

  const getVideoDetailsPromise = (video: videoProps) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(video));
      });
    });
  };

  loginUserPromise("jhon@gmail.com", "1234567")
    .then((user) => {
      console.log(user);
      return getUserVideosPromise(user.email);
    })
    .then((videos) => {
      console.log(videos);
      return videos;
    })
    .then((video) => getVideoDetailsPromise(video[0]))
    .catch((error) => console.log(error));

  return <></>;
}
