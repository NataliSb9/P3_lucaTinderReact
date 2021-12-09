import React from "react";
import "./estiloslikes.css";
import Header from "../header/index";
import Footer from "../Footer/index";

let user1 = {
  name: "Liva Jørgensen",
  descripcion: "No pierdas el tiempo buscando tu media naranja, ya la has encontrado.",
  foto: "https://randomuser.me/api/portraits/women/68.jpg",
};
let user2 = {
  name: "Xavier Wang",
  descripcion: "Si ser sexy fuese un delito, te pasarías la vida en la cárcel.",
  foto: "https://randomuser.me/api/portraits/men/55.jpg",
};
let user3 = {
  name: "Lindaura Duarte",
  descripcion: "Si fueras salsa me pasaría el día mojando.",
  foto: "https://randomuser.me/api/portraits/women/6.jpg",
};
let user4 = {
  name: "Bernice Stevens",
  descripcion: "Me encantaría verte sin maquillaje cada mañana de mi vida.",
  foto: "https://randomuser.me/api/portraits/women/95.jpg",
};
const users = [user1, user2, user3, user4];
const Likes = () => (
    <section className="Likes">
    <Header />
      <div className="centrator">
        <div className="likeContainer container">
          {users.map((user) => (
            <section className="Card">
              <div class="tp-box">
                <div className="tp-box__side tp-box__front">
                  <div
                    className="img-nombre-edad"
                    style={{
                      backgroundImage: `url(${user.foto})`,
                    }}
                  >
                    <h2 className="name">{user.name}</h2>
                  </div>
                  <div className="div-descripcion">
                    <h3 className="descripcion">{user.descripcion}</h3>
                  </div>
                  <div className="div-buttons">
                    <div className="btn btn_like_div" id="btn_like_div">
                      <span title="like_link" className="btn-inner" id="like_link">
                        <div className="btn_imagen_inner b_dislike" alt=""></div>
                      </span>
                    </div>
                    <div className="btn flip_front-div">
                      <span title="flip_front" id="flip_front">
                        <div className="btn_imagen_inner b_front" alt=""></div>
                      </span>
                    </div>
                    <div className="btn btn_dislike_div" id="btn_dislike_div">
                      <span title="dislike_link" id="dislike_link">
                        <div className="btn_imagen_inner b_like" alt=""></div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </section>
);

export default Likes;
