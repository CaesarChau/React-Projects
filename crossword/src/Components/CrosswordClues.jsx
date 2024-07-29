import clues from "../clues.js";

const CrosswordClues = () => {
  const downClues = [];
  for (let i in clues.down) {
    downClues.push(
      <div className="crossword-clues-clue">
        {i}: {clues.down[i]}
      </div>
    );
  }

  const acrossClues = [];
  for (let i in clues.across) {
    acrossClues.push(
      <div className="crossword-clues-clue">
        {i}: {clues.across[i]}
      </div>
    );
  }

  return (
    <div>
      <div className="crossword-clues-title">
        <u>DOWN</u>
      </div>
      {downClues}
      <div className="crossword-clues-title">
        <u>ACROSS</u>
      </div>
      {acrossClues}
    </div>
  );
};

export default CrosswordClues;
