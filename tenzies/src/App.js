import { useEffect, useState } from "react";
import "./App.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isLocked);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isLocked: false,
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollOnClicked() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice(
        dice.map((die) =>
          die.isLocked ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function dieOnClicked(id) {
    setDice(
      dice.map((die) =>
        die.id !== id ? die : { ...die, isLocked: !die.isLocked }
      )
    );
  }

  const dieElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isLocked={die.isLocked}
        onClick={() => dieOnClicked(die.id)}
      />
    );
  });

  return (
    <div className="w-screen h-screen bg-slate-800 flex items-center justify-center">
      {tenzies && <Confetti />}
      <div className="bg-white rounded-2xl h-1/2 w-1/2 font-bold">
        <h1 className="text-center m-10 text-5xl">Tenzies</h1>
        <h3 className="text-center p-4 text-2xl">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>

        <div className="grid grid-cols-5 grid-rows-2 p-6 gap-2 justify-center items-center">
          {dieElements}
        </div>
        <button
          className="bg-slate-700  h-20 w-32 text-white font-bold rounded-lg"
          onClick={rollOnClicked}
        >
          {tenzies ? "Restart" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default App;
