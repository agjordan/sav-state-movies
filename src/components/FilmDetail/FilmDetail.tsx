import React from "react";
import { Film } from "../../services/movies.service";
import styles from "./FilmDetail.module.scss";

type FilmDetailProps = {
  film: Film;
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

const FilmDetail = ({ film, setSpecificFilm }: FilmDetailProps) => {
  const directors = Array.isArray(film.director)
    ? film.director.join(", ")
    : film.director;

  return (
    <div className={styles.filmDetail}>
      <div className={styles.imgContainer}>
        {/* <img src={film.poster} alt={`poster for ${film.title}`} /> */}
      </div>
      <div className={styles.detailsContainer}>
        <div>
          <h3>
            {film.title} ({film.imdb_rating})
          </h3>
          <h3>
            {film.released_on.slice(0, 4)} | {film.length} | {directors}
          </h3>
          <h3>Cast: {film.cast.join(", ")}</h3>
        </div>
        <div className={styles.starRating}>{film.imdb_rating}</div>
        <div className={styles.filmDescription}>
          <h3>Description</h3>
          {film.overview}
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
