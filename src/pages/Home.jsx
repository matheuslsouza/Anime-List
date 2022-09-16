import { useState, useEffect } from "react";
import AnimeCard from "../Components/AnimeCard";

const animeURL = import.meta.env.VITE_API;

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);

  const getTopRatedAnime = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopAnime(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${animeURL}/trending/anime`;
    getTopRatedAnime(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores avaliados:</h2>
      <div className="animes-container">
        {topAnime === 0 && <p>Carregando...</p>}
        {topAnime > 0 &&
          topAnime.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </div>
    </div>
  );
};

export default Home;
