import React, { useState } from "react";
import "./estiloscard.css";
import ReactCardFlip from "react-card-flip";

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

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="Card">
      <ReactCardFlip
        className="tp-box"
        isFlipped={isFlipped}
        flipDirection="vertical"
      >
        <div class="tp-box">
          <div className="tp-box__front">
            <div
              className="img-nombre-edad"
              style={{
                backgroundImage: `url(${props.usuario.foto})`,
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
                <span title="flip_front" id="flip_front" onClick={handleClick}>
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

        <div class="tp-box">
          <div class="tp-box__back">
            <div class="nombre-edad-sex">
              <div class="nombre-edad">
                <h2 class="name">{usuario.name}</h2>
                <h3 class="edad">Edad {usuario.age}</h3>
              </div>
              <div class="sex"></div>
            </div>
            <div class="correo cont-corr-tel">
              <div class="back-logo logo-correo"></div>
              <h3 class="inner_h3">{usuario.email}</h3>
            </div>
            <div class="gustos">
              
            {usuario.gustos.map((gusto) => ( 
              <h4 class="gusto">{gusto}</h4>
             ))}  
            </div>
            <div class="div-buttons">
              <div class="btn flip_back_div">
                <span
                  title="flip_back"
                  class="flip_back_link"
                  id="flip_back_link"
                  onClick={handleClick}
                >
                  <div class="btn_imagen_inner b_back" alt=""></div>
                </span>
              </div>
              <div class="btn btn_chat_div" id="btn_chat_div">
                <span title="chat" class="chat_btn_link" class="chat_btn_link">
                  <div class="btn_imagen_inner b_chat" alt=""></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </section>
  );
}

export default Card;
