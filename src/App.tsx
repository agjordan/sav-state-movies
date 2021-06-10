import React, { useState, useEffect } from "react";
import "./App.css";
import AllFilms from "./components/AllFilms";
import FilmDetail from "./components/FilmDetail";
import TopBar from "./components/TopBar";
import { getAllFilms, Film } from "./services/movies.service";

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [specificFilm, setSpecificFilm] = useState<Film | undefined>(undefined);

  useEffect(() => {
    const setFilmsForPage = async () => {
      const temp: Film[] = await getAllFilms();
      setFilms(temp);
    };

    setFilmsForPage();
  }, []);

  return (
    <div className="App">
      <TopBar setSpecificFilm={setSpecificFilm} />
      {specificFilm ? (
        <FilmDetail film={specificFilm} setSpecificFilm={setSpecificFilm} />
      ) : (
        <AllFilms films={films} setSpecificFilm={setSpecificFilm} />
      )}
    </div>
  );
}

export default App;
