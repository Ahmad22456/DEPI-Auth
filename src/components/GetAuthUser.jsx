import { useEffect } from "react";
export default function GetAuthUser() {
  useEffect(async () => {
    await fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return <div>getAuthUser</div>;
}
