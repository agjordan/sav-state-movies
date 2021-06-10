import React from "react";
import { Film } from "../../services/movies.service";
import Search from "../Search";
import styles from "./TopBar.module.scss";

type TopBarProps = {
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

const TopBar = ({ setSpecificFilm }: TopBarProps) => {
  return (
    <div className={styles.TopBar}>
      <h1>Sav State Movies</h1>
      <Search setSpecificFilm={setSpecificFilm} />
    </div>
  );
};

export default TopBar;
