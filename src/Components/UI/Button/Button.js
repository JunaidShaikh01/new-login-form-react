import React from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <div>
      <button
        type={props.type || "button"}
        className={`button ${props.className}`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
}
