import React from "react";

const Line = (props: any) => {
  return (
    <div
      style={{
        position: "absolute",
        border: 0,
        borderTopWidth: `5px`,
        borderStyle: "solid",
        transition: "all 0.6s ease, border 0.2s ease",
        transform: "rotate(56deg)",
        borderColor: `${"borderColor" in props.style ? props.style.borderColor : "white"}`,
        ...props.style,
      }}
    ></div>
  );
};

export default Line;
