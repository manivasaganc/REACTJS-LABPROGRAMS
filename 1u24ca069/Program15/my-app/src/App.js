import useToggle from "./useToggle";

function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <h2>{isOn ? "ON" : "OFF"}</h2>

      <button onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;
