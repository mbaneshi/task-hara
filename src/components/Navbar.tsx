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

        <li>
          <Link to="/about" className={style.link}>
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
