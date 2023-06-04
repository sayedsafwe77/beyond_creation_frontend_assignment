/* eslint-disable react/prop-types */
import style from "./MovieCard.module.css";
function MovieCard({ movie }) {
  return (
    <div
      className={style.movie_card}
      style={{ backgroundImage: `url(${movie.poster})` }}
    >
      <div className={style.movie_card__content}>
        <p className={style.movie_card__title}>{movie.name}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}
export default MovieCard;
