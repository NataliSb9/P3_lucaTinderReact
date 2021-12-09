export default ListaLikes;
import Header from "../header/index";
import Footer from "../Footer/index";
import Card from "../Card";

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
}


/* FLATA LLENAR EL ARRAY USERS */

let users = [];

function Likes () {
    return (
      <section className="Likes">
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



export default Likes;
