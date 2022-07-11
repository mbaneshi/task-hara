import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Salam from "./Salam";
import Navbar from "./Navbar";
import styles from "./MyApp.module.css";
import Task from "./Task";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Pictures from "./Pictures";
import IsLoading from "./IsLoading";
import ImageGrid from "./ImageGrid";

export default function MyApp() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Salam />} />
          <Route path="app" element={<App />} />
          <Route path="task" element={<Task />} />
          <Route path="picture/*" element={<Pictures />} />
          <Route path="isloading" element={<IsLoading />} />
          <Route path="imagegrid" element={<ImageGrid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
