import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallbackChild";
export default function useCallbackHook() {
  const list = ["Ahmed", "Mohamed", "Ali", "Saad"];
  const [users, setUsers] = useState(list);

  const filterUsers = useCallback(
    (val) => {
      const filteredUsers = list.filter((e) =>
        e.toLowerCase().includes(val.toLowerCase())
      );
      setUsers(filteredUsers);
      console.log(users[0]);
    },

    [users]
  );
  // const filterUsers = (val) => {
  //   const filteredUsers = list.filter((e) =>
  //     e.toLowerCase().includes(val.toLowerCase())
  //   );
  //   setUsers(filteredUsers);
  //   // console.log(users[0]);
  // };

  const changeState = () => {
    const newArr = [...users];
    newArr.push("test");
    setUsers(newArr);
  };
  return (
    <>
      <h2>useCallback Hook</h2>
      <UseCallBackChild onChange={filterUsers} />
      <button onClick={changeState} className="btn btn-primary">
        Change State
      </button>
      <ul className="list-group">
        {users.map((item, i) => (
          <li key={i} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
