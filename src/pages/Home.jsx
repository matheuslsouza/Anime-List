import { useState, useEffect } from "react";

const animeURL = import.meta.env.VITE_API;

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);

  const getTopRateAnime = async (url) => {
    const res = await fetch(url);
    const data = await res.json;

    console.log(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${animeURL}/reviews`;
    getTopRateAnime(topRateUrl);
  }, []);

  return (
    <div>
      {topAnime &&
        topAnime.map((anime) => {
          anime.title;
        })}
    </div>
  );
};

export default Home;
