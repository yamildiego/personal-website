import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import * as Colors from "../../Constants/Colors";

const Background = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "space-between",
        height: "120vh",
        width: "100%",
      }}
    >
      <Box sx={{ flex: 1 }}></Box>
      <Box sx={{ minWidth: "30%", backgroundColor: Colors.ContrastColor }}></Box>
    </Stack>
  );
};

export default Background;
