import { Stack, Box } from "@mui/material";

import * as Colors from "../../Constants/Colors";

const Background = () => {
  return (
    <Stack direction={"row"} sx={styles.container}>
      <Box sx={{ flex: 1 }}></Box>
      <Box sx={styles.blackBg}></Box>
    </Stack>
  );
};

const styles = {
  container: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "space-between",
    height: "120vh",
    width: "100%",
  },
  blackBg: {
    minWidth: "30%",
    backgroundColor: Colors.ContrastColor,
  },
};

export default Background;
