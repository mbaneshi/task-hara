import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Input } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addToFavorite,
  deleteFromStore,
} from "../features/picture/pictureSlice";

export default function MediaCard(props: any) {
  //! Hooks
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState(false);
  const data = useAppSelector((state) => state.picture.data);

  //! Handlers
  const handleDelete = (e: any) => {
    dispatch(deleteFromStore(data[Number(props.id - 1)]));
  };
  const handleEdit = (e: any) => {
    console.log(e);
    setShowInput(true);
  };
  const handleInput = (e: any) => {
    console.log(e.target.value);
  };
  const handleBlur = (e: any) => {
    console.log(e.target.value);
    setShowInput(false);
  };
  const handleFavorite = (e: any) => {
    dispatch(addToFavorite(data[Number(props.id)]));
  };
  //! JSX
  return (
    <Card>
      <Link to={`${props.id}`}>
        <CardMedia
          sx={{ aspectRatio: "16 / 9 " }}
          component="img"
          height={props.height}
          image={props.image}
          alt={props.title}
        />
      </Link>
      <CardContent sx={{ textAlign: "center", margin: 0, padding: 0 }}>
        <Typography variant="button" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex" }}>
        <Button size="small" onClick={handleFavorite}>
          <FavoriteIcon />
        </Button>
        <Button size="small" onClick={handleDelete}>
          <DeleteIcon />
        </Button>

        <Button size="small" onClick={handleEdit}>
          {showInput && (
            <Input
              autoFocus={true}
              color="secondary"
              name="title"
              onChange={handleInput}
              onBlur={handleBlur}
            />
          )}
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
//TODO
/*
Omit Link in detail view to prevent link 
*/
