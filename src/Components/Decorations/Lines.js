import React from "react";
import { connect } from "react-redux";

import useRecursiveTimeout from "../../Functions/useRecursiveTimeout";

import Line from "./Line";

const colors = ["ffb38add", "#ff772d", "#ff782ea8", "#ffa16c", "#ffb38a"];

const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

const Lines = (props) => {
  const [currentColors, setCurrentColors] = React.useState(["white", "#ff772d", "#ff782ea8", "#ffa16c", "#ffb38a"]);
  const [mainColor, setMainColor] = React.useState(colors[getRandomInt(0, colors.length - 1)]);
  const [index, setIndex] = React.useState(0);

  const paiting = (index) => {
    if (currentColors[index] !== mainColor) {
      let newCurrentColors = [...currentColors];
      newCurrentColors[index] = mainColor;
      setCurrentColors(newCurrentColors);
    } else {
      let qty = currentColors.filter((color) => color !== mainColor).length;
      if (qty === 0) {
        let newMainColor = colors[getRandomInt(0, colors.length - 1)];
        while (newMainColor === mainColor) newMainColor = colors[getRandomInt(0, colors.length - 1)];
        let newCurrentColors = [...currentColors];
        newCurrentColors[index] = newMainColor;
        setMainColor(newMainColor);
        setCurrentColors(newCurrentColors);
      }
    }
    if (index >= currentColors.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  useRecursiveTimeout(() => paiting(index), 300);

  return (
    <React.Fragment>
      <Line
        style={{
          borderTopWidth: "3px",
          left: "-62px",
          width: "570px",
          top: "350px",
          zIndex: 0,
          borderColor: currentColors[0],
        }}
      />
      <Line
        style={{
          borderTopWidth: "2px",
          left: "-56px",
          width: "326px",
          top: "360px",
          borderColor: currentColors[1],
        }}
      />
      <Line
        style={{
          borderStyle: "outset",
          left: 0,
          width: "100px",
          top: "344px",
          borderColor: currentColors[2],
        }}
      />
      <Line
        style={{
          borderStyle: "outset",
          left: "88px",
          width: "150px",
          top: "457px",
          borderColor: currentColors[2],
        }}
      />
      <Line
        style={{
          borderStyle: "solid",
          left: "93px",
          width: "10px",
          top: "389px",
          borderRadius: "34px",
          borderBottom: "5px",
          borderBottomStyle: "solid",
          backgroundColor: currentColors[2],
          borderTopColor: currentColors[2],
          borderBottomColor: currentColors[2],
        }}
      />
      <Line
        style={{
          borderTopWidth: "8px",
          borderStyle: "solid",
          left: 0,
          width: "100px",
          top: "394px",
          borderColor: currentColors[3],
        }}
      />
      <Line
        style={{
          borderTopWidth: "8px",
          borderStyle: "solid",
          left: "88px",
          width: "150px",
          top: "507px",
          borderColor: currentColors[3],
        }}
      />

      <Line
        style={{
          borderTopWidth: "3px",
          left: "-40px",
          width: "180px",
          top: "412px",
          borderStyle: "dashed",
          borderColor: currentColors[4],
        }}
      />
    </React.Fragment>
  );
};

function mapStateToProps(state, props) {
  return {
    coordinates: state.configReducer.coordinates,
  };
}
export default connect(mapStateToProps)(Lines);
