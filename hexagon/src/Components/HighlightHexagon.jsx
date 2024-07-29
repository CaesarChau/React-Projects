import React from "react";
import { useState } from "react";
//import Hexagon from "react-hexagon"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
} from "react-hexgrid";

const HighlightHexagon = () => {
  const width = 20;
  const height = 20;
  const [hexagons, setHexagons] = useState(
    GridGenerator.orientedRectangle(20, 20)
  );

  const getColour = (q, r, s) => {
    let colour = "#";
    colour += Math.floor((Math.abs(q) / width) * 15).toString(16);
    colour += Math.floor((Math.abs(q) / width) * 15).toString(16);
    colour += Math.floor((Math.abs(r) / width) * 15).toString(16);
    colour += Math.floor((Math.abs(r) / width) * 15).toString(16);
    colour += Math.floor((Math.abs(s) / width) * 15).toString(16);
    colour += Math.floor((Math.abs(s) / width) * 15).toString(16);
    return colour;
  };

  const handleHexagonOnClick = (event, source) => {
    const targetHex = source.state.hex;

    const coloredHexes = hexagons.map((hex) => {
      hex.props = hex.props || {};
      if (
        targetHex.q === hex.q &&
        targetHex.r === hex.r &&
        targetHex.s === hex.s
      ) {
        hex.props.className = "hexagon";
        hex.props.style = { stroke: getColour(hex.q, hex.r, hex.s) };
      } else {
        hex.props.className = null;
        hex.props.style = null;
      }
      return hex;
    });

    setHexagons(coloredHexes);
  };

  return (
    <div>
      <HexGrid width={1200} height={1000} className="hexgrid">
        <Layout size={{ x: 7, y: 7 }} spacing={1.1}>
          {hexagons.map((hex, i) => (
            <Hexagon
              style={hex.props ? hex.props.style : null}
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              onMouseEnter={(event, source) =>
                handleHexagonOnClick(event, source)
              }
              className={hex.props ? hex.props.className : null}
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default HighlightHexagon;
