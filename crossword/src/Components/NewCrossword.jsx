import React from "react";
import { useEffect, useState, useRef } from "react";
import Cell from "./Cell";
import crosswordShape from "../crosswordShape";

const NewCrossword = (props) => {
  const [crosswordData, setCrosswordData] = useState([]);
  const [activeCell, setActiveCell] = useState(null);
  const [across, setAcross] = useState(true);

  useEffect(() => {
    let start = new Array(49).fill(" ");
    setCrosswordData(start);
  }, []);

  const handleCellOnClick = (id) => {
    if (activeCell == id) {
      setAcross(!across);
    } else {
      setActiveCell(id);
    }
  };

  const handleCellKeyPress = (id, value) => {
    const tempCrosswordData = [...crosswordData];
    tempCrosswordData[id] = value;
    setCrosswordData(tempCrosswordData);
    //console.log("ACTIVE CELL", activeCell, "NEXT CELL", getNextCell(), "ACROSS", across);
    setActiveCell(getNextCell());
    //https://stackoverflow.com/questions/68860819/vanilla-js-when-key-press-up-and-down-change-active-class
  };

  const isNeighbour = (index) => {
    if (index == activeCell) {
        return "same"
    }
    if (across) {
      return (
        Math.floor(index / props.length) ==
        Math.floor(activeCell / props.length)
      );
    } else {
      return index % props.length == activeCell % props.length;
    }
  };

  const getNextCell = () => {
    if (across) {
      return activeCell + 1;
    } else {
      return activeCell + props.length;
    }
  };

  const crossword = crosswordData.map((cellData, index) => {
    return (
      <Cell
        id={index}
        key={index}
        blackedOut={crosswordShape[index] == "0"}
        letter={cellData}
        active={isNeighbour(index)}
        onKeyPress={handleCellKeyPress}
        onClick={handleCellOnClick}
      ></Cell>
    );
  });

  let gridTemplateColumns = "52px ".repeat(props.length).trim();
  const crosswordContainerStyle = {
    "grid-template-columns": gridTemplateColumns,
  };

  return (
    <div className="crossword-container" style={crosswordContainerStyle}>
      {crossword}
    </div>
  );
};

export default NewCrossword;
