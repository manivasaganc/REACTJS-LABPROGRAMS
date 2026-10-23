import './App.css';

function App() {
  const names=[
    {name:"Vijay"},
    {name:"Naveen"},
    {name:"Krishna"},
    {name:"Radha"},

  ]
  return (
    <div className="App">
   <h2>Names List</h2>

   {names.map((name) => (
    <ul>
  <li>{name.name}</li>
    </ul>
))}

    </div>
  );
}

export default App;
