import React from "react";
import "./card.css";
import { ReactComponent as IconFile } from "assets/icon/file.svg";
import { ReactComponent as IconStar } from "assets/icon/star.svg";
import colorByLanguage from "constants/languageColor.json";
export default function Card({ name, visibility, language, watchers }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="c-head-section">
          <div className="icon">
            <IconFile />
          </div>
          <div className="title">{name}</div>
          <div className="visibility">{visibility}</div>
        </div>

        <div className="c-footer-section">
          {language ? (
            <>
              <div
                className="icon-rounded"
                style={{ backgroundColor: colorByLanguage[language]?.color }}
              ></div>
              <div className="language">{language}</div>
            </>
          ) : null}

          <div className="star">
            <IconStar className="star" />
            {watchers}
          </div>
        </div>
      </div>
    </div>
  );
}
