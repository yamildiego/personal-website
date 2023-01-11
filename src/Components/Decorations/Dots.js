import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Dots = () => {
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box sx={{ position: "absolute", left: 0, top: "16%", zIndex: -1 }}>
      {dots.map((dot, index) => {
        return (
          <Stack direction="row" key={index}>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
            <Box sx={{ width: "5px", height: "5px", backgroundColor: "#ddd", borderRadius: "60px", m: 1, color: "blue" }}></Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Dots;
