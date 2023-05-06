import Box from "@mui/material/Box";

import * as Colors from "../../../Constants/Colors";

import yamil from "../../../Assets/yamil.png";

const RightPanel = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.container}>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
          <img src={yamil} alt="" style={styles.imgLarge} />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" } }}>
          <img src={yamil} alt="" style={styles.imgSmall} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  mainContainer: {
    flex: 1,
    position: "relative",
    margin: "16px",
    border: `5px solid ${Colors.MainColor}`,
  },
  container: {
    border: `10px solid white`,
    backgroundColor: "#ffc2a4f0",
  },
  imgLarge: {
    width: "100%",
    maxWidth: "550px",
  },
  imgSmall: {
    width: "50%",
    maxWidth: "550px",
    display: "flex",
    margin: "auto",
  },
};

export default RightPanel;
