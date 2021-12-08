import React from 'react'
import axios from 'axios';
import './estiloshome.css';


class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
          response: '',
          prefGen:'',
          candidatos: [],
      }
  }
  componentDidMount(){
    const email = "milja.aho@example.com"
    axios.get(`http://localhost:3000/lucatinder/usuario?email=${email}`).then((res) => {
        const prefGen = res.data[0].prefGen;
        this.setState({prefGen})
        console.log(this.state.prefGen)
        
        //this.setState({prefGenero})
        axios.get(`http://localhost:3000/lucatinder/conocepersonas?prefGen=${prefGen}`).then((res) => {
            const candidatos = res.data;
            this.setState({candidatos})
            console.log(this.state.candidatos)    
  
        })   
      })
  };
  
  render() {
    return  (
      <section className="Card container">
    <div className="row sec-cards">
        {
        this.state.candidatos.length > 0 ? (this.state.candidatos.map((candidato) =>

        (
        <div class="tp-box ">
            <div className="tp-box__side tp-box__front ">
                <div className="img-nombre-edad" style={{
              backgroundImage: `url(${candidato.foto})`,
            }}>
                    <h2 className="name">{candidato.name}</h2>
                </div>
                <div className="div-descripcion">
                    <h3 className="descripcion">{candidato.descripcion}</h3>
                </div>
                <div className="div-buttons">
                    <div className="btn btn_like_div" id="btn_like_div">
                        <div title="like_link" className="btn-inner" id="like_link">
                            <div className="btn_imagen_inner b_dislike" alt=""></div>
                        </div>
                    </div>
                    <div className="btn flip_front-div">
                        <div title="flip_front" id="flip_front">
                            <div className="btn_imagen_inner b_front" alt=""></div>
                        </div>
                    </div>
                    <div className="btn btn_dislike_div" id="btn_dislike_div">
                        <div title="dislike_link" id="dislike_link">
                            <div className="btn_imagen_inner b_like" alt=""></div>
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
    )
    
}
}

export default Home