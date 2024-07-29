import React from "react";
import { useEffect, useState } from "react";
import API_LINK from "../Assets/API_LINK";

const CharacterInfoPanel = (props) => {
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetch(`${API_LINK}/characters/${props.name}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data));
  }, [props.name]);

  console.log(characterData);

  return (
    <div className="character-info-panel">
      <img
        className="character-info-panel-image"
        alt={characterData.name}
        src={`/images/characters/${characterData.name}/card`}
      ></img>
      <div className="character-info-panel-content">
        <div className="character-info-panel-text character-info-panel-name">
          {characterData.name}
        </div>
        <img
            className="character-info-panel-element"
            alt="element"
            src={`/images/elements/${characterData.vision}/icon`}
          ></img>
        <img
          className="character-info-panel-rarity"
          alt="rarity"
          src={`/rarity_${characterData.rarity}.png`}
        ></img>
        <div className="character-info-panel-text">
          {characterData.birthday
            ? `Birthday: ${characterData.birthday.slice(5)}`
            : "BIRTHDAY"}
        </div>
        <div className="character-info-panel-text">
          {characterData.description}
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoPanel;
