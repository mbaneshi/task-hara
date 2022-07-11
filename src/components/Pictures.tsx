import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import myPictures from "../types/Pictures";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPic, setErr, setIsloading } from "../features/picture/pictureSlice";
import { Pagination } from "@mui/material";
import style from "./Pictures.module.css";
import IsLoading from "./IsLoading";
import ImageGrid from "./ImageGrid";

const Pictures: any = (): React.ReactNode => {
  const [pic, setPic] = useState<myPictures | undefined>();
  const dispatch = useAppDispatch();
  const { items, err, islodings } = useAppSelector((state) => state.picture);
  console.log("items", items);

  useEffect(() => {
    try {
      dispatch(setIsloading(true));
      fetch("https://61ee6204d593d20017dbadb4.mockapi.io/items")
        .then((response) => response.json())
        .then((json) => {
          setPic(json);

          dispatch(getPic(json));
          dispatch(setIsloading(false));
        });
    } catch (e) {
      dispatch(setErr(e as any));
    }
  }, []);

  if (islodings) {
    return (
      <>
        <ImageGrid />
      </>
    );
  }
  if (err) {
    return <h1> ooooopsss some error occured</h1>;
  }

  return (
    <>
      <Grid container direction="row" spacing={4} justifyContent="space-evenly">
        {pic?.map((item: myPictures): any => {
          return (
            <Grid item key={item.id} justifyContent="center">
              <h1
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  marginBottom: "0",
                }}
              >
                {item.title}
              </h1>
              <Link to={`picture/${item.id}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
              </Link>
            </Grid>
          );
        })}
        <div className={style.pag}></div>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sx={{
            height: 100,
          }}
        >
          <Pagination
            count={5}
            color="secondary"
            size="large"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(Pictures);
