import React from "react";
import { Film } from "../../services/movies.service";
import FilmGallery from "../FilmGallery";
import styles from "./AllFilms.module.scss";

type AllFilmsProps = {
  films: Film[];
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

type Gallery = {
  genre: string;
  films: Film[];
};

type Galleries = {
  [any: string]: Gallery;
};

const AllFilms = ({ films, setSpecificFilm }: AllFilmsProps) => {
  const filmsByCategory = (films: Film[]): Galleries => {
    let galleries: Galleries = {};

    for (let film of films) {
      for (let genre of film.genres) {
        if (!galleries[genre]) {
          galleries[genre] = { genre: genre, films: [film] };
        } else {
          galleries[genre].films.push(film);
        }
      }
    }

    return galleries;
  };

  const galleries: Galleries = filmsByCategory(films);
  return (
    <div className={styles.allFilms}>
      {Object.values(galleries).map((gallery: Gallery) => (
        <FilmGallery
          title={gallery.genre}
          films={gallery.films}
          setSpecificFilm={setSpecificFilm}
          key={gallery.genre + gallery.films.length}
        />
      ))}
    </div>
  );
};

export default AllFilms;
