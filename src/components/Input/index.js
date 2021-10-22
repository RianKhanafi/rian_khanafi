import React from "react";
import "./input.css";

export default function Input({ className, placeholder, onChange }) {
  return (
    <div className={["input-container", className].join(" ")}>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
