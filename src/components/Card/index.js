import React from "react";
import "./card.css";
import { ReactComponent as IconFile } from "assets/icon/file.svg";

export default function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="c-head-section">
          <div className="icon">
            <IconFile />
          </div>
          <div className="title">E-GraphQl-Sequelize-BolerPalate</div>
          <div className="visibility">Public</div>
        </div>

        <div className="c-footer-section">
          <div className="icon-rounded"></div>
          <div className="language">Javascript</div>
          <div className="star">Public</div>
        </div>
      </div>
    </div>
  );
}
