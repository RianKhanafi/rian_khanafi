import React from "react";
import "./paging.css";
export default function Paging({ current, total, onChange }) {
  const totalPage = Math.ceil(total / 30);
  const prevOnclick = () => onChange((current -= 1));
  const nextOnClick = () => onChange((current += 1));

  return (
    <div className="paging-container">
      <div
        className={`${
          (current === 1 && current === totalPage) ||
          (current === 1 && current < totalPage)
            ? "page__nonactive "
            : ""
        }`}
      >
        <button
          disabled={
            (current === 1 && current === totalPage) ||
            (current === 1 && current < totalPage)
          }
          onClick={prevOnclick}
        >
          Previous
        </button>
      </div>
      <div className={`${current === totalPage ? "page__nonactive " : ""}`}>
        <button disabled={current === totalPage} onClick={nextOnClick}>
          Next
        </button>
      </div>
    </div>
  );
}
