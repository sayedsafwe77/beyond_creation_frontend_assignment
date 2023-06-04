import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_BASE_URL } from "../api-client";
import { registerEventActions } from "../store/registerformovie";
import { uiActions } from "../store/ui";
import { toast } from "react-toast";

export const useRegisterEvent = () => {
  const registerEventState = useSelector((state) => state.registerEvent);
  const dispatch = useDispatch();
  const { mutate: registerEvent, isLoading } = useMutation({
    mutationFn: async () => {
      const response = await fetch(BACKEND_BASE_URL + "/register/event", {
        method: "POST",
        body: JSON.stringify(registerEventState),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
    onSuccess(data) {
      dispatch(registerEventActions.setNewEvent(data.data));
      dispatch(uiActions.setShowCreateEvent(false));
      toast.success("registration done successfully");
    },
    onError(e) {
      toast.error(e.response.data.details[0].message, {
        backgroundColor: "#b42929",
      });
    },
  });
  return { registerEvent, isLoading };
};
