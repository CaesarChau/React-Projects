import React, { useEffect } from "react";
import { useState } from "react";
import crosswordShape from "../crosswordShape";
import crosswordClueNumbers from "../crosswordClueNumbers";
import Cell from "./Cell";

const Crossword = (props) => {
  const [crossword, setCrossword] = useState([]);
  const [activeCell, setActiveCell] = useState(null);

  const length = props.length;
  const width = props.width;

  const handleCellOnClick = (cell) => {
    setActiveCell(cell);
  };

  useEffect(() => {
    const tempCrossword = [];
    let counter = 0;
    let crosswordClueNumbersIndex = 0;

    for (let i = 0; i < length; i++) {
      const inner = [];
      for (let j = 0; j < width; j++) {
        inner.push(
          <Cell
            id={counter}
            className="crossword-input-box"
            onclick={handleCellOnClick}
            active={false}
            blackedOut={crosswordShape[counter] == 0}
            clueNumber={
              counter === crosswordClueNumbers[crosswordClueNumbersIndex]
                ? crosswordClueNumbersIndex + 1
                : ""
            }
            nextCellAcross={counter % width != 6 ? counter + 1 : null}
            nextCellDown={
              counter + width < width * length ? counter + width : null
            }
          ></Cell>
        );
        if (counter === crosswordClueNumbers[crosswordClueNumbersIndex]) {
          crosswordClueNumbersIndex += 1;
        }
        counter += 1;
      }
      tempCrossword.push(inner);
    }

    setCrossword(tempCrossword);
  }, [length, width]);

  let gridTemplateColumns = "52px ".repeat(length).trim();
  const crosswordContainerStyle = {
    "grid-template-columns": gridTemplateColumns,
  };

  return (
    <div className="crossword-container" style={crosswordContainerStyle}>
      {crossword}
    </div>
  );
};

export default Crossword;
