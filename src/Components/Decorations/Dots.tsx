import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Dots = () => {
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box sx={styles.container}>
      {dots.map((dot, index) => {
        return (
          <Stack direction="row" key={index}>
            <Box sx={styles.dot}></Box>
            <Box sx={styles.dot}></Box>
            <Box sx={styles.dot}></Box>
            <Box sx={styles.dot}></Box>
            <Box sx={styles.dot}></Box>
            <Box sx={styles.dot}></Box>
          </Stack>
        );
      })}
    </Box>
  );
};

const styles = {
  container: {
    position: "absolute",
    left: 0,
    top: "16%",
    zIndex: -1,
  },
  dot: {
    width: "5px",
    height: "5px",
    backgroundColor: "#ddd",
    borderRadius: "60px",
    m: 1,
    color: "blue",
  },
};

export default Dots;
