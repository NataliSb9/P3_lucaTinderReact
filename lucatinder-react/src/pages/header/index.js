import React from "react";
import "./estilosheader.css";
import {
  Link,
  //Antes era Redirect
  //Navigate
} from "react-router-dom";
const Header = () => (
  <section className="Header">
    <div className="header-component">
      <header>
        <div className="h1-img">
          <h1>LucaTinder</h1>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/likes">Likes</Link>
          <Link to="/dislikes">DisLikes</Link>
          <Link to="/matches">Matches</Link>
        </nav>
      </header>
    </div>
  </section>
);

export default Header;
