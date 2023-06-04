import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { movieActions } from "./store/movie";

export default function StyledNavbar() {
  const dispatch = useDispatch();
  const movieSearch = (e) => {
    dispatch(movieActions.search(e.target.value));
  };
  return (
    <div className="navbar-links">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "navbar-links__item active" : "navbar-links__item";
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => {
          return isActive ? "navbar-links__item active" : "navbar-links__item";
        }}
        to="/register/event"
      >
        Register Event
      </NavLink>
      <input
        className="navbar-links__search"
        type="text"
        onChange={movieSearch}
        placeholder="search for movie"
      />
    </div>
  );
}
