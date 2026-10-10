import React from "react";
import Props from "./Props";

function App() {
  const names=[
    { 
      name:"Naveen",
      regno:"1U24CA063"
    },
    { 
      name:"Ajay",
      regno:"1U24CA066"
    },
    { 
      name:"Mani",
      regno:"1U24CA072"
    },
    {
      name:"Krishna",
      regno:"1U24CA076"
    },
  ]
  return (
    <div className="App" >
     {names.map((name,regno)=>{
     return <ul>
       <li><Props users={name} regno={regno}/></li>
     </ul>
     })}
    </div>
  );
}

export default App;
