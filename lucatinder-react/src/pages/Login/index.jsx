import React from "react";
import "./estilosLogin.css";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      usuarioActual: ""
    };
  }

  handleChange = event => {
    this.setState({
      usuarioActual: event.target.value
    })
  }
  

  loginButton() {
    window.localStorage.setItem('usuarioActual', this.state.usuarioActual);
  }

  render() {
    return (
      <div className="login fondo-login">
        <div className="card-login">
          <div className="box">
            <div className="logo"  />
            <h1>LUCATINDER</h1>

            <p className="text-muted">¡El lugar indicado si no te comes una rosca!</p>

            <input required className="btn-tin" placeholder="Usuario" type="text" />

            <input required className="btn-tin" placeholder="Contraseña" type="password"  onChange={this.handleChange}/>

            <button className="btn-tin__submit" onClick={() => this.loginButton()}>Entrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
