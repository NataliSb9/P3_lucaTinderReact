import React from "react";
import axios from "axios";
import Card from "../Card";
import Header from "../header";
import Footer from "../Footer";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      prefGen: "",
      candidatos: [],
      email: "react14",
      myEmail: "milja.aho@example.com",
      esLike: true,
    };
  }

  componentDidMount() {
    const email = localStorage.getItem("usuarioActual");
    axios.get(`http://localhost:3000/lucatinder/usuario?email=${email}`).then((res) => {
      console.log(email);
      this.setState({ prefGen:res.data[0].prefGen });
      // console.log(this.state.prefGen);

      //this.setState({prefGenero})
      axios.get(`http://localhost:3000/lucatinder/conocepersonas?prefGen=${this.state.prefGen}`).then((res) => {
        const candidatos = res.data;
        this.setState({ candidatos });
        console.log(this.state.candidatos);
      });
    });
  }

  render() {
    return (
      <section className="Home">
        <Header />
        <div className="centrator">
          <div className="likeContainer container">
            {this.state.candidatos.map((candidato) => (
              <Card usuario={candidato} key={candidato.id} papa="home"/>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Home;
