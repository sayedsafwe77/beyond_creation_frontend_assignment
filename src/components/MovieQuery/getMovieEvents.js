import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_BASE_URL } from "../api-client";
import { eventdayActions } from "../store/eventday";

export const useFetchMovieEvents = () => {
  const dispatch = useDispatch();
  const { movie_id } = useSelector((state) => state.registerEvent);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["movie_events", movie_id],
    queryFn: async () => {
      const response = await fetch(
        BACKEND_BASE_URL + `/movie/eventdays?movie_id=${movie_id}`
      );
      const data = await response.json();
      dispatch(eventdayActions.setEventDays(data.data));
      return data.data;
    },
    enabled: Boolean(movie_id),
  });
  return { isLoading, data, isError, error };
};
