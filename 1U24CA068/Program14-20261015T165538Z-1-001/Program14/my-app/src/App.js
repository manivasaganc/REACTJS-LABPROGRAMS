import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Welcome!!");

  useEffect(() => {
    if(message===0){
    setMessage("Page loaded successfully!");}
  }, [message]);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>setMessage(0)}>Page Load</button>
    </div>
  );
}

export default App;
