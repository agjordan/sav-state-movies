import films from "../data/films.json";

export type Film = {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string[] | string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
};

export const getAllFilms = async () => {
  const url = "https://sav.state/movies";

  //eslint-disable-next-line
  const filmsFake = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer savstate2021",
    },
  }).catch(() => console.log("fails as expected"));

  return films.movies;
};

export const getFilmsFromSearch = async (keyword: string) => {
  const url = `https://sav.state/movies/?q=${keyword}`;

  //eslint-disable-next-line
  const filmsFake = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer savstate2021",
    },
  }).catch(() => console.log("fails as expected"));

  const filterFilms = films.movies;

  const filmsToReturn = filterFilms.filter((film) =>
    film.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return filmsToReturn;
};
