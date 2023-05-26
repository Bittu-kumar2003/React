// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const loadusers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };
  return (
    <div className="App">
      <h1>Hello all</h1>
      <button onClick={loadusers}>Get data</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login }) => (
          <li key={id}>Name: {login}</li>
        ))}
      </ul>
    </div>
  );
  //  return  (
  //    <div>
  //      <h1>hello</h1>
  //      <p>Name</p>
  //      </div>

  //  );
};
export default App;
