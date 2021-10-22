import React, { useState } from "react";
import "./layout.css";

export default function Layout({ children, leftcontent }) {
  return (
    <div className="layout">
      <aside className="left-side">
        <div className="left-content">{leftcontent}</div>
      </aside>
      <section className="right-side">
        <div className="right-content">{children}</div>
      </section>
    </div>
  );
}
