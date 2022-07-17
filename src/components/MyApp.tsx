import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import styles from "./MyApp.module.css";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Pictures from "./Pictures";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ComponentWrapper from "../Layout/ComponentWrapper";
import ImageDetail from "./ImageDetail";
import AboutUs from "./AboutUs";
//import DataFetcher from "./DataFetcher";
import FavoritePicture from "./FavoritePicture";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchPicAsync } from "../features/picture/pictureSlice";

const queryClient = new QueryClient();
export default function MyApp() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchPicAsync("https://61ee6204d593d20017dbadb4.mockapi.io/items")
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ComponentWrapper>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="about" element={<AboutUs />} />
                <Route path="/" element={<Pictures />} />
                <Route path="/:id" element={<ImageDetail />} />
                <Route path="favorite" element={<FavoritePicture />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ComponentWrapper>
      </div>
      <Footer />
    </div>
  );
}
//!
//*
//?
//TODO
//@param
