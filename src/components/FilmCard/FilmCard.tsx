import React from "react";
import { Film } from "../../services/movies.service";
import styles from "./FilmCard.module.scss";

type FilmCardProps = {
  film: Film;
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

const FilmCard = ({ film, setSpecificFilm }: FilmCardProps) => {
  return (
    <div className={styles.card} onClick={() => setSpecificFilm(film)}>
      <div className={styles.imgContainer}>
        {/* <img src={film.poster} alt={`poster for ${film.title}`} /> */}
        <span className={styles.filmTitle}>{film.title}</span>
      </div>
    </div>
  );
};

export default FilmCard;
