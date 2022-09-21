import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    /*console.log(data);*/
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    /*console.log(searchWithQueryURL);*/

    getSearchMovies(searchWithQueryURL);
  }, [query]);

  /*console.log(SearchMovies)*/

  return (
    <div className="container">
      <h2 className="title">
        Results to <span className="query-text">{query}</span>:
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
