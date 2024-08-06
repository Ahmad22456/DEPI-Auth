import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import { useState } from "react";
import GetAuthUser from "./components/GetAuthUser";
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = async (uname, pass) => {
    await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: uname,
        password: pass,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((json) => localStorage.setItem("token", json.token));
  };
  return (
    <>
      <div className="container">
        <div className="row g-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              auth(userName, password);
            }}
          >
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="username"
              type="text"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              type="password"
            />
            <button type="submit">LOGIN</button>
          </form>

          <GetAuthUser />
          {/* <div className='col-12 col-md-6 border p-4'>
            <UseStateHook />
          </div>

          <div className='col-12 col-md-6 border p-4'>
            <UseEffectHook />
          </div>

          <div className='col-12 col-md-6 border p-4'>
            <UseRefHook />
          </div>

          <div className='col-12 col-md-6 border p-4'>
            <UseMemoHook />
          </div>

          <div className='col-12 col-md-6 border p-4'>
            <UseCallbackHook />
          </div>
        */}
        </div>
      </div>
    </>
  );
}

export default App;
