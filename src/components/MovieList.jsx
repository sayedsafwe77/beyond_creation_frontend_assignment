import { useSelector } from "react-redux";
import { useFetchMovie } from "../components/MovieQuery/MovieQueryCustomHooks";
import MovieCard from "./MovieCard";
import style from "./MovieList.module.css";
function MovieList() {
  const movies = useSelector((state) => state.movie.movies);
  const { isLoading, isError, error } = useFetchMovie();
  let cardContent;
  const isEmpty = movies;
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  if (isEmpty.length) {
    cardContent = movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  } else {
    console.log("else");
    cardContent = <p>No Movies Found</p>;
  }
  return <div className={style.movie_list}>{cardContent}</div>;
}
export default MovieList;
