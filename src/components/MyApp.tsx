import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import styles from "./MyApp.module.css";
import Task from "./Task";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Pictures from "./Pictures";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ComponentWraper from "../Layout/ComponentWraper";
import ImageDetail from "./ImageDetail";

const queryClient = new QueryClient();
export default function MyApp() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ComponentWraper>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="task" element={<Task />} />
                <Route path="/*" element={<Pictures />} />
                <Route path="/:id" element={<ImageDetail />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ComponentWraper>
      </div>
      <Footer />
    </div>
  );
}
