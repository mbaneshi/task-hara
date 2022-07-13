import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props: any) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <Link to={`${props.id}`}>
        <CardMedia
          component="img"
          height="140"
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
        <Button size="small">add</Button>
        <Button size="small">remove</Button>
      </CardActions>
    </Card>
  );
}
