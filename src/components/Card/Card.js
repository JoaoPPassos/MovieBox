import React from "react";

import styles from "./styles.module.scss";

const Card = (props) => {
  const {
    title = "",
    genre = "",
    imdb_score = "",
    release_date = "",
    country = "",
    image_src = "",
    type = "",
  } = props;

  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
        <div className={styles.Shadow} />
        {type !== "Actor" && <div className={styles.Badge}>{type}</div>}

        <img src={image_src} />
      </div>
      <div className={styles.Descriptions}>
        <span className={styles.Small}>
          {country && release_date && `${country}, ${release_date}`}
        </span>

        <span className={styles.Title}>{title}</span>
        <div className={styles.Score}>
          <span>{imdb_score}</span>
        </div>
        <span className={styles.Small}>{genre}</span>
      </div>
    </div>
  );
};

export default Card;
