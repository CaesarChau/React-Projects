import React, { useEffect } from "react";
import { useState } from "react";
import crosswordShape from "../crosswordShape";
import crosswordClueNumbers from "../crosswordClueNumbers";

const OldCrossword = (props) => {
  const [crossword, setCrossword] = useState([]);

  const length = props.length;
  const width = props.width;

  useEffect(() => {
    const tempCrossword = [];
    let counter = 0;
    let crosswordClueNumbersIndex = 0;

    for (let i = 0; i < length; i++) {
      const inner = [];
      for (let i = 0; i < width; i++) {
        if (crosswordShape[counter] == 0) {
          inner.push(
            <input
              id={counter}
              className="crossword-input-box-black"
              maxLength={0}
              disabled
            ></input>
          );
        } else {
          inner.push(
            <input
              id={counter}
              className="crossword-input-box"
              maxLength={1}
              placeholder={counter === crosswordClueNumbers[crosswordClueNumbersIndex] ? crosswordClueNumbersIndex + 1 : ""}
            ></input>
          );
        }
        if (counter === crosswordClueNumbers[crosswordClueNumbersIndex]) {
          crosswordClueNumbersIndex += 1;
        }
        counter += 1;
      }
      tempCrossword.push(inner);
    }

    setCrossword(tempCrossword);
  }, [length, width]);
  

  return (
    <div className="crossword-container">
      {crossword}
    </div>
  );
};

export default OldCrossword;
