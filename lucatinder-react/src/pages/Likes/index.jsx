import React from "react";
import "./estiloslikes.css";
import axios from "axios";

export class Usuario {
  constructor( id,name,genero,email,age,descripcion,gustos,arrLikes,arrDislikes,prefGen,foto,) {
    this._id = id;
    this.name = name;
    this.genero = genero;
    this.email = email;
    this.age = age;
    this.descripcion =descripcion;
    this.gustos = gustos;
    this.arrLikes = arrLikes;
    this.arrDislikes = arrDislikes;
    this.prefGen = prefGen;
    this.foto = foto;
  }
}

class ListaLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      prefGen: "",
      candidatos: [],
      email: "react14",
      myEmail: "milja.aho@example.com",
      esLike: true,
      usuarioToAdd: null,
			lista: [],
      
    };
  }

  componentDidMount() {
    //const email = localStorage.getItem("usuarioActual");
    const email= "william.johnson@example.com";
    axios.get(`http://localhost:3000/lucatinder/usuario?email=${email}`).then((res) => {
      console.log(res.data[0])
			this.setState(this.lista=res.data[0].arrLikes);
            console.log(this.lista)
            const prefGen = res.data[0].prefGen;
            this.setState({ prefGen });

            for (let i= 0;i<this.lista.length;i++){
              axios.get(`http://localhost:3000/lucatinder/usuario?email=${this.lista[i]}`).then((res) => {
              const candidatos = res.data;
              let likeados= res.data;
              this.setState({ likeados })
              this.setState({ candidatos });
              console.log(this.state.candidatos); 
            });

          }
          
    });
    
  }


  render() {
    return (
      <section className="Card container">
        <div className="row sec-cards">
          {this.state.candidatos.length > 0 ? (
            this.state.likeados.map((candidato) => (
              <div className="tp-box" key={candidato._id}>
                <div className="tp-box__side tp-box__front ">
                  <div
                    className="img-nombre-edad"
                    style={{
                      backgroundImage: `url(${candidato.foto})`,
                    }}
                  >
                    <h2 className="name">{candidato.name}</h2>
                  </div>
                  <div className="div-descripcion">
                    <h3 className="descripcion">{candidato.descripcion}</h3>
                  </div>
                  <div className="div-buttons">
                    
                    <div className="btn flip_front-div">
                      <div title="flip_front" id="flip_front">
                        <div className="btn_imagen_inner b_front" alt=""></div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>--- No se pueden cargar los usuarios</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ListaLikes;