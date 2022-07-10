import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import myPictures from "../types/Pictures";
import styles from "./Pictures.module.css";

const Pictures: any = (): React.ReactNode => {
  const [pic, setPic] = useState<myPictures | undefined>();

  useEffect(() => {
    fetch("https://61ee6204d593d20017dbadb4.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setPic(json));
  }, []);

  return pic?.map((item: myPictures): any => {
    return (
      <section key={item.id} className={styles.section}>
        <Link to={`/${item.id}`} className={styles.link}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} className={styles.image} />
        </Link>
      </section>
    );
  });
};

export default memo(Pictures);
