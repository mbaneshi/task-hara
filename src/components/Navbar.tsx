import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/default">Default</Link> |{" "}
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

<Link to="/task">Task</Link>;
