import React from "react";
import "./estiloscard.css";

let usuario = {
  id: "1",
  name: "Milja Aho",
  genero: "female",
  email: "milja.aho@example.com",
  pass: "sabrina1",
  age: 66,
  descripcion: "¿No tendremos un amigo en común que pueda presentarnos?",
  gustos: [
    "Netflix",
    "Youtube",
    "Andorra",
    "Cine",
    "Té",
    "Filetes",
    "Pan",
    "Chocololate",
  ],
  arrLikes: [
    "hiba.truong@example.com",
    "liva.jorgensen@example.com",
    "afet.bakircioglu@example.com",
    "bernice.stevens@example.com",
  ],
  arrDislike: [
    "stella.roussel@example.com",
    "lindaura.duarte@example.com",
    "stella.roussel@example.com",
  ],
  prefGen: "female",
  foto: "https://randomuser.me/api/portraits/women/36.jpg",
};

const Card = () => (
    <section className="Card">
    <div class="tp-box">
      <div className="tp-box__side tp-box__front">
        <div
          className="img-nombre-edad"
          style={{
            backgroundImage: `url(${usuario.foto})`,
          }}
        >
          <h2 className="name">{usuario.name}</h2>
        </div>
        <div className="div-descripcion">
          <h3 className="descripcion">{usuario.descripcion}</h3>
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
);

export default Card;
