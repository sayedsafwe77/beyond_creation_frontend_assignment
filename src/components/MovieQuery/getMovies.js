import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_BASE_URL } from "../api-client";
import { movieActions } from "../store/movie";

export const useFetchMovie = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.movie);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["movie", search],
    queryFn: async () => {
      const response = await fetch(BACKEND_BASE_URL + `/movies?name=${search}`);
      const data = await response.json();
      dispatch(movieActions.setMovies(data.data));
      return data.data;
    },
  });
  return { isLoading, data, isError, error };
};
