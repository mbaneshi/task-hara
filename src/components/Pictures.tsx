import { Link } from "react-router-dom";
import myPictures from "../types/Pictures";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";
import IsLoading from "./IsLoading";
import ImageGrid from "./ImageGrid";
import MediaCard from "./MyPicture";
import { useQuery } from "react-query";
import style from "./Pictures.module.css";

const Pictures: any = (): React.ReactNode => {
  const fetchPicture = async () => {
    const res = await fetch(
      "https://61ee6204d593d20017dbadb4.mockapi.io/items"
    );
    return res.json();
  };

  const { data, isError, isLoading } = useQuery("pictures", fetchPicture);

  if (isLoading) {
    return (
      <>
        <IsLoading />
        <ImageGrid />
      </>
    );
  }
  if (isError) {
    return <h1> ooooopsss some error occured</h1>;
  }

  return (
    <>
      <Grid container direction="row" spacing={1} justifyContent="space-evenly">
        {data?.map((item: myPictures): any => {
          return (
            <Grid item key={item.id} justifyContent="center">
              <MediaCard image={item.image} title={item.title} id={item.id} />
            </Grid>
          );
        })}
        <Grid item>
          <div className={style.pag}>
            <Pagination
              count={5}
              color="secondary"
              size="large"
              variant="outlined"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Pictures;
