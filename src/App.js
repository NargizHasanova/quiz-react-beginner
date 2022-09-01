import { useContext } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { ResultContext } from "./Context";


function App() {
  const { showResult, setShowResult } = useContext(ResultContext)
  return (
    <div className="App">
      {showResult ? <Result /> : <Game />}
    </div>
  );
}

export default App;
