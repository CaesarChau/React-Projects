import React from "react";

const CharacterThumbnail = (props) => {

  //const style = props.rarity == "4" ? "#BA68C8" : "#F9A825";
  console.log("RARITY " + props.rarity);
  const style = props.rarity === 4 ? "box-shadow-purple" : "box-shadow-yellow";

  return (
    <div className="character-thumbnail" onClick={() => props.onClick(props.name)}>
      <img
        className={`character-thumbnail-icon ${style}`}
        alt={props.name}
        src={`/images/characters/${props.name}/icon`}
      ></img>
      <div className="character-thumbnail-text">
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </div>
    </div>
  );
};
//        style={{box-shadow : 2px 2px 7px 1px #1C6EA4}}
export default CharacterThumbnail;
