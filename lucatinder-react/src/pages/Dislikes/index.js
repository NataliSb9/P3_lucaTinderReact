import React from "react";
import "./estilosdislikes.css";
import Card from "../Card";

const names = ["James", "Paul", "John", "George", "Ringo"];
const DisLikes = () => (
  <section className="DisLikes">
    <div className="centrator">
      <div className="likeContainer">
        {
          names.map(name =>
            <div className="cardDiv">{<Card />}</div>
            )
        }
      </div>
    </div>
  </section>
);

export default DisLikes;
