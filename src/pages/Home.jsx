import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Home = () => {
  const [topMovie, setTopMovie] = useState([]);

  const getTopRatedMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setTopMovie(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;

    console.log(topRatedUrl);

    getTopRatedMovie(topRatedUrl);
  }, []);

  console.log(topMovie);

  return (
    <div className="container">
      <h2 className="title">Melhores avaliados:</h2>
      <div className="movies-container">
        {topMovie.length > 0 &&
          topMovie.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
