import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const increaseCount=()=>{
    setCount(count+1);
  }
  const decreaseCount=()=>{
    setCount(count-1);
    if(count===0){
      setCount(0)
    }
  }
  const resetCount=()=>{
    setCount(0);
  }

  return (
    <div className="App">
        <h1>Value: {count}</h1><br></br>
      <section className='btn'>
        <button onClick={increaseCount} id='increment'>+</button>
        <button onClick={decreaseCount} id='decrement'>-</button>
        <button onClick={resetCount} id='reset'>reset</button>
      </section>
      </div>
  );
}

export default App;
