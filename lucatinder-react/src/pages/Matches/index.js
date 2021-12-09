import React from "react";
import "./estilosmatches.css";
import Card from "../Card";

const names = ["James", "Paul", "John", "George", "Ringo"];
const Matches = () => (
  <section className="Matches">
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

export default Matches;
