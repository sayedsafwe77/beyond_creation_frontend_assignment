import style from "./FormInput.module.css";
function FormInput({ ...attr }) {
  return (
    <>
      <label htmlFor={attr.user_name} className={style.form_label}>
        {" "}
        {attr.label} :
      </label>
      <input type="text" {...attr} className={style.form_control} />
    </>
  );
}

export default FormInput;
