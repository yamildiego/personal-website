import Box from "@mui/material/Box";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <Box sx={styles.backdrop} onClick={props.onClick} />;
};

const styles = {
  backdrop: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 100,
  },
};

export default Backdrop;
