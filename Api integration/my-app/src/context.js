import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext();

export default function Context() {
  const [user, setUser] = useState("Dineshkumar");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Child user={user} />
    </UserContext.Provider>
  );
}

function Child() {
   
  return (
    <>
      <h1>I'm Child</h1>
      
      <Sibling/>
    </>
  );
}



function Sibling() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>I'm sibling</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}