import { useSelector, useDispatch } from "react-redux";
import style from "./Index.module.css";
import Select from "../UI/Select";
import {
  useFetchMovieEventShowTime,
  useFetchMovieEvents,
} from "../MovieQuery/MovieQueryCustomHooks";
import FormInput from "../UI/FormInput";
import { registerEventActions } from "../store/registerformovie";
import Button from "../UI/Button";
function CreateEvent() {
  const { isLoading } = useFetchMovieEvents();
  const { error } = useFetchMovieEventShowTime();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const { eventdays } = useSelector((state) => state.eventday);
  const { showtimes } = useSelector((state) => state.showtime);
  const { movie_id, eventday_id, showtime_id, name, email, mobile } =
    useSelector((state) => state.registerEvent);

  let disableEventInput = eventdays.length ? {} : { disabled: true };
  let disableShowTimeInput = showtimes.length ? {} : { disabled: true };
  const fetchMovieEvenDaysHandler = (e) => {
    dispatch(registerEventActions.setMovieId(e.target.value));
  };
  const fetchMovieShowTimeHandler = (e) => {
    dispatch(registerEventActions.setEventDayId(e.target.value));
  };
  const setShowTimeHandler = (e) => {
    dispatch(registerEventActions.setShowTimeId(e.target.value));
  };
  const formInputHandler = (e) => {
    switch (e.target.name) {
      case "name":
        dispatch(registerEventActions.setName(e.target.value));
        break;
      case "email":
        dispatch(registerEventActions.setEmail(e.target.value));
        break;
      case "mobile":
        dispatch(registerEventActions.setMobile(e.target.value));
        break;
    }
  };
  return (
    <div className={style.container}>
      <form action="">
        <FormInput
          label="Name"
          value={name}
          onChange={formInputHandler}
          placeholder="Enter Your Name"
          name="name"
        />
        <FormInput
          label="Email"
          value={email}
          placeholder="Enter Your Email"
          onChange={formInputHandler}
          name="email"
        />
        <FormInput
          label="Mobile"
          value={mobile}
          placeholder="Enter Your Mobile Number"
          onChange={formInputHandler}
          name="mobile"
        />
        <Select
          value="id"
          options={movies}
          selectoption={movie_id}
          onChange={fetchMovieEvenDaysHandler}
          label="Movie"
          name="movie_id"
        />
        <Select
          value="id"
          options={eventdays}
          selectoption={eventday_id}
          label="EventDay"
          name="event_day_id"
          onChange={fetchMovieShowTimeHandler}
          {...disableEventInput}
        />
        <Select
          value="showtime_id"
          selectoption={showtime_id}
          options={showtimes}
          onChange={setShowTimeHandler}
          label="ShowTime"
          name="showtime_id"
          {...disableShowTimeInput}
          //   disabled
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
export default CreateEvent;
