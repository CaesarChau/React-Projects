import "./App.css";
import Crossword from "./Components/Crossword";
import CrosswordClues from "./Components/CrosswordClues";
import Cell from "./Components/Cell";
import NewCrossword from "./Components/NewCrossword";

function App() {
  return (
    <div className="app">
      <span>
        <NewCrossword length={7} width={7} />
        {/* <CrosswordClues /> */}
      </span>
    </div>
  );
}

export default App;
