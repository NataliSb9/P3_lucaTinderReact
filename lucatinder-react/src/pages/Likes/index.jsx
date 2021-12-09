import React from "react";
import "./estiloslikes.css";
import Header from "../header/index";
import Footer from "../Footer/index";
import Card from "../Card";


/* FLATA LLENAR EL ARRAY USERS */

let users = [];

function Likes () {
    return (
      <section className="Likes">
        <Header />
        <div className="centrator">
          <div className="likeContainer container">
            {users.map((user) => (
              <Card user={user}/>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    );
  }

export default Likes;
