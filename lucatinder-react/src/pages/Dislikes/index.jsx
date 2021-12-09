import React from "react";
import "./estilosdislikes.css";
import Header from "../header/index";
import Footer from "../Footer/index";
import Card from "../Card";


/* FLATA LLENAR EL ARRAY USERS */

let users = [];

function DisLikes () {
    return (
      <section className="DisLikes">
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
export default DisLikes;
