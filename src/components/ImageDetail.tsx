import { useParams } from "react-router-dom";
import useReadiness from "../hooks/useReadiness";
import MediaCard from "./MyPicture";

export default function ImageDetail() {
  let { data } = useReadiness();

  console.log("🚀 ~ file: ImageDetail.tsx ~ line 9 ~ ImageDetail ~ data", data);
  let { id } = useParams();
  console.log("🚀 ~ file: ImageDetail.tsx ~ line 10 ~ ImageDetail ~ id", id);
  let myid = Number(id);

  const selecteddata = data[myid - 1];
  console.log(
    "🚀 ~ file: ImageDetail.tsx ~ line 11 ~ ImageDetail ~ selecteddata",
    selecteddata
  );

  let content = (
    <MediaCard
      sx={{ minWidth: "1000px" }}
      id={selecteddata.id}
      image={selecteddata.image}
      title={selecteddata.title}
      height={"450px"}
    />
  );

  return content;
}
