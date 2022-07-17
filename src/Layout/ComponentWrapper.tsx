import { Box } from "@mui/material";
import React from "react";
let bg: string =
  "https://uploads-ssl.webflow.com/60e3d740d6e5994e4a0d47ff/60e3d740d6e59970350d4cb4_60e3a35bffa1cada219c6fa8_Mesh%252097-p-500.jpeg";
let bg2: string =
  "https://uploads-ssl.webflow.com/60e3d740d6e5994e4a0d47ff/60e3d740d6e5994ab00d4ca2_60e3a3594f3257494f95dd7e_Mesh%252088-p-500.jpeg";
export default function ComponentWraper(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "0 1rem",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundImage: `url(${bg})`,
        background: "white",
        backgroundPposition: "center",
        backgroundRrepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </Box>
  );
}
//TODO
/*
make robust grid layout with break point 
*/
