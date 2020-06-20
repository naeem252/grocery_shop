import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  let inputEl = null;

  switch (props.inputtype) {
    case "input":
      inputEl = <input onChange={props.changed} {...props.config} />;
      break;
    case "textareat":
      inputEl = <textarea onChange={props.changed} {...props.config} />;
      break;
    case "select":
      inputEl = (
        <select onChange={props.changed}>
          {props.config.map((opt, index) => {
            return (
              <option key={index} value={opt.value}>
                {opt.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputEl = <input {...props.config} />;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputEl}
    </div>
  );
}

export default Input;
