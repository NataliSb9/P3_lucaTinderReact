import React from "react";
import "./estilosmatches.css";
import Header from "../header/index";
import Footer from "../Footer/index";
import Card from "../Card";


/* FLATA LLENAR EL ARRAY USERS */

let users = [];

function Matches () {
    return (
      <section className="Matches">
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

export default Matches;
