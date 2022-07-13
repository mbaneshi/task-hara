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
import { QueryClient, QueryClientProvider } from "react-query";
import Test from "./Test";

const queryClient = new QueryClient();
export default function MyApp() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Salam />} />
              <Route path="app" element={<App />} />
              <Route path="task" element={<Task />} />
              <Route path="picture/*" element={<Pictures />} />
              <Route path="picture/:id" element={<Test />} />
              <Route path="isloading" element={<IsLoading />} />
              <Route path="imagegrid" element={<ImageGrid />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
      <Footer />
    </div>
  );
}
