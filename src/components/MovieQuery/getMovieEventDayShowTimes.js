import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_BASE_URL } from "../api-client";
import { showtimeActions } from "../store/showtime";

export const useFetchMovieEventShowTime = () => {
  const dispatch = useDispatch();
  const { eventday_id, movie_id } = useSelector((state) => state.registerEvent);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["movie_event_showtimes", eventday_id],
    queryFn: async () => {
      const response = await fetch(
        BACKEND_BASE_URL +
          `/movie/eventday/showtimes?movie_id=${movie_id}&event_day_id=${eventday_id}`
      );
      const data = await response.json();
      dispatch(showtimeActions.setShowTimes(data.data));
      return data.data;
    },
    enabled: Boolean(movie_id),
  });
  return { isLoading, data, isError, error };
};
