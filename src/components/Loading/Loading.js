import React from "react";

import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <div className={styles.DivCircle_1}>
        <div className={styles.Circle} />
      </div>
      <div className={styles.DivCircle_2}>
        <div className={styles.Circle} />
      </div>
      <div className={styles.DivCircle_3}>
        <div className={styles.Circle} />
      </div>
      <div className={styles.DivCircle_4}>
        <div className={styles.Circle} />
      </div>
      <div className={styles.DivCircle_5}>
        <div className={styles.Circle} />
      </div>
    </div>
  );
};

export default Loading;
