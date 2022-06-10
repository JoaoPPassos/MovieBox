import React from "react";

import styles from "./styles.module.scss";

const Header = (props) => {
  return <header className={styles.Header}>{props.children}</header>;
};

export default Header;
