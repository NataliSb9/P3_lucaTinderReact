import React, { useState } from "react";
import "./estiloscard.css";
import ReactCardFlip from "react-card-flip";
import axios from "axios";


function addLikeOrDislike(esLike, emailCandidato) {
  const userMatch = {
    email: emailCandidato,
    myEmail: localStorage.getItem("usuarioActual"),
    esLike: esLike,
  };

  axios
    .put("http://localhost:3000/lucatinder/usuario", userMatch)
    .then((resp) => {})

    .catch((error) => {
      console.error("Ha habido un error", error);
    });
}



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
        <div className="tp-box">
          <div className="tp-box__front">
            <div
              className="img-nombre-edad"
              style={{
                backgroundImage: `url(${props.usuario.foto})`,
              }}
            >
              <h2 className="name">{props.usuario.name}</h2>
            </div>
            <div className="div-descripcion">
              <h3 className="descripcion">{props.usuario.descripcion}</h3>
            </div>
            <div className="div-buttons">
              <div className={`btn btn_like_div ${props.papa}`} id="btn_like_div">
                <span title="like_link" className="btn-inner" id="like_link" onClick={()=>addLikeOrDislike(false, props.usuario.email)}>
                  <div className="btn_imagen_inner b_dislike" alt=""></div>
                </span>
              </div>
              <div className="btn flip_front-div">
                <span title="flip_front" id="flip_front" onClick={handleClick}>
                  <div className="btn_imagen_inner b_front" alt=""></div>
                </span>
              </div>
              <div className={`btn btn_dislike_div ${props.papa}`} id="btn_dislike_div" >
                <span title="dislike_link" id="dislike_link" onClick={()=>addLikeOrDislike(true, props.usuario.email)}>
                  <div className="btn_imagen_inner b_like" alt=""></div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-box">
          <div className="tp-box__back">
            <div className="nombre-edad-sex">
              <div className="nombre-edad">
                <h2 className="name">{props.usuario.name}</h2>
                <h3 className="edad">Edad {props.usuario.age}</h3>
              </div>
              <div className="sex"></div>
            </div>
            <div className="correo cont-corr-tel">
              <div className="back-logo logo-correo"></div>
              <h3 className="inner_h3">{props.usuario.email}</h3>
            </div>
            <div className="gustos">
              
            {props.usuario.gustos.map((gusto) => ( 
              <h4 key={props.usuario.email+gusto+1} className="gusto">{gusto}</h4>
             ))}  
            </div>
            <div className="div-buttons">
              <div className="btn flip_back_div">
                <span
                  title="flip_back"
                  className="flip_back_link"
                  id="flip_back_link"
                  onClick={handleClick}
                >
                  <div className="btn_imagen_inner b_back" alt=""></div>
                </span>
              </div>
              <div className="btn btn_chat_div" id="btn_chat_div">
                <span title="chat" className="chat_btn_link">
                  <div className="btn_imagen_inner b_chat" alt=""></div>
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
