import React from "react";

const Die = (props) => {
  const styles = props.isLocked ? "#59E391" : "ffffff";

  return (
    <div
      className={`w-16 h-16 rounded-2xl text-4xl font-bold text-center py-2 shadow-md shadow-black cursor-pointer bg-[${styles}]`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Die;
