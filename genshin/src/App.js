import "./App.css";

import CharacterThumbnail from "./Components/CharacterThumbnail";
import CharacterList from "./Assets/CharacterList";
import CharacterInfoPanel from "./Components/CharacterInfoPanel";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import React from "react";
import { useState } from "react";

function App() {
  const [currentCharacter, setCurrentCharacter] = useState("eula");

  const characterThumbnailComponent = CharacterList.map((characterName) => {
    return (
      <CharacterThumbnail
        onClick={characterThumbnailOnClick}
        name={characterName}
      />
    );
  });

  function characterThumbnailOnClick(name) {
    console.log(name);
    setCurrentCharacter(name);
  }

//   return (
//     <div className="App">
//       <CharacterInfoPanel name={currentCharacter} />
//     </div>
//   );
// }

// export default App;

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <div className="characters">
          <CharacterInfoPanel name={currentCharacter} />
          <div className="character-thumbnail-container">
            {characterThumbnailComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
