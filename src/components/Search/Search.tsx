import React, { useState, useEffect } from "react";
import { Film, getFilmsFromSearch } from "../../services/movies.service";
import styles from "./Search.module.scss";

type SearchProps = {
  setSpecificFilm: React.Dispatch<React.SetStateAction<Film | undefined>>;
};

const Search = ({ setSpecificFilm }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filmList, setFilmList] = useState<Film[]>([]);
  // const filterFunc = () => {};

  useEffect(() => {
    const getFilmsAndSet = async () => {
      setFilmList(await getFilmsFromSearch(searchTerm!));
    };

    if (searchTerm) getFilmsAndSet();
  }, [searchTerm]);

  return (
    <div>
      <button>Search</button>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="search"
        onBlur={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm !== "" ? (
        <div className={styles.searchResults}>
          {filmList.length > 0 ? (
            filmList.map((film: Film) => {
              return (
                <div
                  className={styles.resultFilm}
                  onClick={() => {
                    setSpecificFilm(film);
                    setFilmList([]);
                    setSearchTerm("");
                  }}
                >
                  {film.title}
                </div>
              );
            })
          ) : (
            <div>No Results</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
