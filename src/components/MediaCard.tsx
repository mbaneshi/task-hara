import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MediaCard(props: any) {
  const handleDelete = (e: any) => {
    console.log(e);
    console.log(props.id);
  };
  const handleEdit = (e: any) => {
    console.log(e);
  };
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
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete}>
          <DeleteIcon />
        </Button>

        <Button size="small" onClick={handleEdit}>
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
//TODO
/*
Omit Linke in detail view to prevent link 
*/
