import React from "react";
import axios from "axios";

class Card extends React.Component {
  // ---------------------------------
  // MODELO
  // ---------------------------------
  constructor(props) {
    super(props);
    this.state = {
      email  : "react14",
      myEmail: "milja.aho@example.com",
      esLike : true,
    };
  }

  // --------------------
  // SERVICIOS CON AXIOS
  // --------------------
  addLikeOrDislike(esLike) {
    const userMatch = {
      email  : this.state.email,
      myEmail: this.state.myEmail,
      esLike : esLike,
    };

    console.log(userMatch);

    axios
      .put("http://localhost:3000/lucatinder/usuario", userMatch)
      .then((resp) => {
        // alert('Se ha guardado el libro [' + this.state.name + ']' + '\nActualiza la lista para verlo');
        // Puedo navegar a Lista. Hay que retocarlo
        // useNavigate("http://localhost:3000/list-books");
        // history.push('/list-books');
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.message });
        console.error("Ha habido un error", error);
      });
  }

  // ---------------------------------
  // RENDERIZO
  // ---------------------------------
  render() {
    return (
      <div className="container">
        <p className="btn">holaa</p>
        <button  onClick={() => this.addLikeOrDislike(true)}>Like</button>
        <button onClick={() => this.addLikeOrDislike(false)}>DisLike</button>
      </div>
    );
  }
}
export default Card;
