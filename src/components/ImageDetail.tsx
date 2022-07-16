import { useParams } from "react-router-dom";
import useStoreData from "../hooks/useStoreData";
import IsLoading from "./IsLoading";
import MediaCard from "./MediaCard";

export default function ImageDetail() {
  const { isLoading, data, isError } = useStoreData();
  const { id } = useParams();

  if (isError) {
    console.log("inside isError condition");
    return <h1>Opsss Error</h1>;
  }

  if (isLoading) {
    console.log("inside data condition");

    return <IsLoading />;
  }
  let myid = Number(id) - 1;

  const selecteddata = data[myid];

  const { image, title } = selecteddata;

  return (
    <MediaCard
      sx={{ minWidth: "100%" }}
      id={id}
      image={image}
      title={title}
      height={"450px"}
    />
  );
}

//TODO
/*
 ! this ia alert
? querry

*/
