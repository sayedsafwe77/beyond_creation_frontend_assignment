/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

import style from "./Button.module.css";
import { useRegisterEvent } from "../MovieQuery/MovieQueryCustomHooks";

function Button({ children, ...attr }) {
  const { registerEvent } = useRegisterEvent();
  const { movie_id, eventday_id, showtime_id, name, email, mobile } =
    useSelector((state) => state.registerEvent);
  let ButtonAttr = { className: style.form_button };
  if (movie_id && eventday_id && showtime_id && name && email && mobile) {
    ButtonAttr.className = ButtonAttr.className + " " + style.active;
  } else {
    ButtonAttr.disabled = "disabled";
  }
  const submitEventHandler = (e) => {
    e.preventDefault();
    registerEvent();
  };
  return (
    <>
      <button {...attr} {...ButtonAttr} onClick={submitEventHandler}>
        {children}
      </button>
    </>
  );
}

export default Button;
