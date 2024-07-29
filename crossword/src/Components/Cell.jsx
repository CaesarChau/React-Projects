import React, { useState } from "react";
import "../App.css";

const Cell = (props) => {

  const handleKeyPress = (event) => {
    if (/^[a-zA-Z]$/.test(event.key)) {
      props.onKeyPress(props.id, event.key.toUpperCase());
    } else if (event.key === "Backspace") {
      props.onKeyPress(props.id, " ");
    }
  };

  const styles = {};
  if (props.active == "same") {
    styles["backgroundColor"] = "pink";
  } else if (props.active) {
    styles["backgroundColor"] = "purple";
  }

  return (
    <>
      <div
        className={props.blackedOut ? "crossword-input-box-black" : "cell"}
        onKeyDown={handleKeyPress}
        style={!props.blackedOut ? styles : {}}
        onClick={() => props.onClick(props.id)}
        tabIndex={"0"}
      >
        {props.letter}
      </div>
    </>
  );
};

export default Cell;
