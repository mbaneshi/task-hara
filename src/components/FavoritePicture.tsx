import { useAppSelector } from "../app/hooks";
import ComponentWrapper from "../Layout/ComponentWrapper";
import MediaCard from "./MediaCard";

export default function FavoritePicture() {
  const favoritePic = useAppSelector((state) => state.picture.favoritePic);

  const fav = (
    <ComponentWrapper>
      {favoritePic.map(({ id, image, title }) => {
        return (
          <MediaCard
            key={id}
            sx={{ minWidth: "100%" }}
            id={id}
            image={image}
            title={title}
            height={"450px"}
          />
        );
      })}
    </ComponentWrapper>
  );
  return <>{favoritePic.length ? fav : "NO DATA YET"}</>;
}
