import style from "./Select.module.css";
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Select({ options, ...attr }) {
  return (
    <div>
      <label htmlFor={attr.label + "_id"} className={style.form_label}>
        {attr.label} :
      </label>
      <select
        {...attr}
        value={attr.selectoption}
        className={style.form_control}
      >
        <option>Select {attr.label}</option>
        {options.map((option) => (
          <option value={option[attr.value]} key={option[attr.value]}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
