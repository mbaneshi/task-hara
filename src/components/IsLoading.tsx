import { Box, CircularProgress, LinearProgress } from "@mui/material";
import React from "react";

export default function IsLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box sx={{ width: "100%", alignSelf: "center", padding: "2rem" }}>
        <LinearProgress color="secondary" sx={{ padding: "1rem" }} />
        <LinearProgress color="success" sx={{ padding: "1rem" }} />
        <LinearProgress color="inherit" sx={{ padding: "1rem" }} />
      </Box>
      <Box sx={{ alignSelf: "center", padding: "2rem" }}>
        <CircularProgress color="secondary" sx={{ padding: "1rem" }} />
        <CircularProgress color="success" sx={{ padding: "1rem" }} />
        <CircularProgress color="inherit" sx={{ padding: "1rem" }} />
      </Box>
    </Box>
  );
}
