import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Default from "./Default";
import Navbar from "./Navbar";

import Task from "./Task";

export default function MyApp() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="default" element={<Default />} />
          <Route path="task" element={<Task />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}
