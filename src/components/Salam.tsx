import { Box } from "@mui/material";
import styles from "./Salam.module.css";

function Salam() {
  return (
    <Box
      sx={{
        display: "flex",
        maxWith: "90%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "blue", wordWrap: "break-word", fontSize: "20vw" }}>
        Shahrzad
      </h1>
    </Box>
  );
}

export default Salam;
