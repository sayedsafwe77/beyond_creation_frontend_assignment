import MovieList from "../components/MovieList";
import style from "./Home.module.css";
function Home() {
  return (
    <div className={style.list}>
      <MovieList />
    </div>
  );
}
export default Home;
