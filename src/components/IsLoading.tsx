import { Box, CircularProgress, Grid, LinearProgress } from "@mui/material";
import React from "react";

export default function IsLoading() {
  return (
    <div style={{ height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ width: "100%", alignSelf: "center", padding: "2rem" }}>
          <LinearProgress color="secondary" sx={{ padding: "3rem" }} />
          <LinearProgress color="success" sx={{ padding: "3rem" }} />
          <LinearProgress color="inherit" sx={{ padding: "3rem" }} />
        </Box>
        <Box sx={{ alignSelf: "center", padding: "2rem" }}>
          <CircularProgress color="secondary" sx={{ padding: "3rem" }} />
          <CircularProgress color="success" sx={{ padding: "3rem" }} />
          <CircularProgress color="inherit" sx={{ padding: "3rem" }} />
        </Box>
      </Box>
    </div>
  );
}
