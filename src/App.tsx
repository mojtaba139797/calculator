import "./App.css";
import LayOut from "./components/layOut.tsx";
import Calculator from "./components/calculator.tsx";
import NumKey from "./components/numKey.tsx";
import Key from "./components/key.tsx";

function App() {
  return (
    <>
      <LayOut>
        <Calculator>
          <NumKey numKey={2} />
          <Key operator="/" />
        </Calculator>
      </LayOut>
    </>
  );
}

export default App;
