import './App.css';
import Card from './Card';
import './Card.css';

function App() {
  const items1=[
                {name:"Computer", price:9000 },
                {name:"Mobile ", price:10000 },
                {name:"Iphone ", price:80000}
              ];
  return (
    <div className="App">
      {items1.map((item)=>{
      return <Card items={item}/>
      })
      }
    </div>
  );
}
export default App;