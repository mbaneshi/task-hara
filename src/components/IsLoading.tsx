import { CircularProgress, LinearProgress } from "@mui/material";
import React from "react";

export default function IsLoading() {
  return (
    <div style={{ height: "90vh" }}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </div>
  );
}
