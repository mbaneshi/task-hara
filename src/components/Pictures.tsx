import myPictures from "../types/Pictures";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";
import IsLoading from "./IsLoading";
import ImageGrid from "./ImageGrid";
import MediaCard from "./MediaCard";
import style from "./Pictures.module.css";
import useStoreData from "../hooks/useStoreData";

const Pictures: any = (): React.ReactNode => {
  const { isLoading, data, isError } = useStoreData();

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
              <MediaCard
                image={item.image}
                title={item.title}
                id={item.id}
                height={"200px"}
              />
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
