import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/default" style={{ textDecoration: "none" }}>
            Default
          </Link>
        </li>
        <li>
          <Link to="/task" style={{ textDecoration: "none" }}>
            Task
          </Link>
        </li>
        <li>
          <Link to="/picture" style={{ textDecoration: "none" }}>
            Picture
          </Link>
        </li>
        <li>
          <Link to="/mypictures" style={{ textDecoration: "none" }}>
            MyPicture
          </Link>
        </li>
      </ul>
    </nav>
  );
}
