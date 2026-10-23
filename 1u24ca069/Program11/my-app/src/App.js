import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const inputRef = useRef();

  const handleLogin = () => {
    setName(inputRef.current.value);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName("");
  };

  return (
    <div className="title">
      {loggedIn ? (
        <>
          <h1>Welcome Student {name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
          />

          <button onClick={handleLogin}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;