import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <Button>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
        </Button>
        <li style={{ listStyleType: "none" }}>
          <Link to="/app" className={style.link}>
            App
          </Link>
        </li>
        <li>
          <Link to="/task" className={style.link}>
            Task
          </Link>
        </li>
        <li>
          <Link to="/picture" className={style.link}>
            Picture
          </Link>
        </li>
        <li>
          <Link to="/mypictures" className={style.link}>
            MyPicture
          </Link>
        </li>
        <li>
          <Link to="/isloading" className={style.link}>
            isloading
          </Link>
        </li>
        <li>
          <Link to="/imagegrid" className={style.link}>
            imagegrid
          </Link>
        </li>
      </ul>
    </nav>
  );
}
