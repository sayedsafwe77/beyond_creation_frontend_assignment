import { useSelector } from "react-redux";
import style from "./index.module.css";
function ShowRegistartion() {
  const { new_event } = useSelector((state) => state.registerEvent);
  return (
    <div className={style.registration_container}>
      <p className={style.registeration_header}>Registartion Info</p>
      <div className={style.registration}>
        <img
          src={new_event.movie.poster}
          className={style.registration__image}
        />
        <div className={style.registration__info}>
          <p>Name: </p>
          <p>{new_event.name}</p>
          <p>Email: </p>
          <p>{new_event.email} </p>
          <p>Mobile: </p>
          <p>{new_event.mobile} </p>
          <p>Movie Name: </p>
          <p>{new_event.movie.name} </p>
          <p>Eventday: </p>
          <p>{new_event.eventday.event_day} </p>
          <p>Showtime: </p>
          <p>{new_event.showtime.showtime} </p>
        </div>
      </div>
    </div>
  );
}

export default ShowRegistartion;
