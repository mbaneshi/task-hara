import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Salam from "./Salam";
import Navbar from "./Navbar";
import Pictures from "./Pictures";
import styles from "./MyApp.module.css";
import MyPicture from "./MyPicture";
import Task from "./Task";
import Footer from "./Footer";

export default function MyApp() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Salam />} />
          <Route path="default" element={<App />} />
          <Route path="task" element={<Task />} />
          <Route path="picture" element={<Pictures />} />
          <Route path="mypictures" element={<MyPicture />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className={styles.para}>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
