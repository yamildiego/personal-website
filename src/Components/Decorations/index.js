import React from "react";

import Box from "@mui/material/Box";

import Background from "./Background";
import Dots from "./Dots";
import Balls from "./Balls";

const Decorations = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
      <Background />
      <Dots />
      <Balls />
    </Box>
  );
};

export default Decorations;
