import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const AnimeCard = ({ anime, showLink = true }) => {
  return (
    <div className="anime-card">
      <img src={imageUrl + anime.posterImage} alt={anime.canonicalTitle} />
      <h2>{anime.canonicalTitle}</h2>
      <p>
        <Fastar />
        {anime.favoritesCount}
      </p>
      {showLink && <Link to={`/anime/${anime.id}`}>Detalhes</Link>}
    </div>
  );
};

export default AnimeCard;
