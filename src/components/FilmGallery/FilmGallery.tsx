import React from "react";
import { Film } from "../../services/movies.service";
import FilmCard from "../FilmCard";
import styles from "./FilmGallery.module.scss";

type FilmGalleryProps = {
  title: string;
  films: Film[];
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

const FilmGallery = ({ title, films, setSpecificFilm }: FilmGalleryProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.gallery}>
        {films.map((film) => (
          <FilmCard film={film} key={film.id} setSpecificFilm={setSpecificFilm} />
        ))}
      </div>
    </div>
  );
};

export default FilmGallery;
