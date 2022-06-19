import React from "react";
import Icon from "../Icon";
import Loading from "../Loading";
import styles from "./styles.module.scss";

const Input = (props) => {
  const {
    value = "",
    setter,
    autocomplete = false,
    loading = false,
    options = [
      {
        value: "texto",
        src: "https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg",
      },
      {
        value: "texto 1",
        src: "https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg",
      },
      {
        value: "texto 2",
        src: "https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg",
      },
      {
        value: "texto 2",
        src: "https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg",
      },
      {
        value: "texto 2",
        src: "https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg",
      },
    ],
  } = props;

  return (
    <div className={`${styles.Input} ${styles.w3}`}>
      <input
        value={value}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
      <Icon name="search" style={{ color: "#ffffff", cursor: "pointer" }} />
      {value.length > 0 && autocomplete && (
        <div className={styles.AutoComplete}>
          {loading ? (
            <Loading />
          ) : (
            <ul className={styles.AutoCompleteList}>
              {options?.map((option) => (
                <li>
                  <div className={styles.ListItem}>
                    <img src={option.src} className={styles.Image} />
                    <span className={styles.MovieTitle}>{option.value}</span>
                  </div>
                </li>
              )) ?? "não tem filmes"}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
