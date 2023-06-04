import { ToastContainer } from "react-toast";
import CreateEvent from "../components/event/CreateEvent";

import style from "./RegisterEvent.module.css";
import { useSelector } from "react-redux";
import ShowRegistartion from "../components/event/ShowRegistartion";

function RegisterEvent() {
  const { show_create_event } = useSelector((state) => state.ui);
  return (
    <div className={style.register_event_list}>
      <ToastContainer position="bottom-center" />
      {show_create_event && <CreateEvent />}
      {!show_create_event && <ShowRegistartion />}
    </div>
  );
}
export default RegisterEvent;
