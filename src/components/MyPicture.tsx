import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pictures from "../types/Pictures";

const MyPicture: any = () => {
  const [pic, setPic] = useState<Pictures[]>([]);
  console.log(" I am within MyPicture components");
  const params = useParams();
  useEffect(() => {
    fetch("https://61ee6204d593d20017dbadb4.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setPic(json));
  }, []);
  const [picshow] = pic;

  return (
    <div key={picshow?.id}>
      <h2>{picshow?.title}</h2>
      <img src={picshow?.image} alt={picshow?.title} />
    </div>
  );
};
export default MyPicture;
