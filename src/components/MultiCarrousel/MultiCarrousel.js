import React from "react";

import styles from "./styles.module.scss";

const MultiCarrousel = (props) => {
  const { title, redirect } = props;
  return (
    <div className={styles.MultiCarrousel}>
      <div className={styles.Title}>
        <h2>{title}</h2>
        <div>
          <span>Ver Mais</span>
        </div>
      </div>
      <div className={styles.Carrousel}>{props.children}</div>
    </div>
  );
};

export default MultiCarrousel;
