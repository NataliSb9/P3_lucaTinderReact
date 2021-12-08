const express = require("express");
//Importo la función de express que hace posible crear una aplicación express
const app = express();

// route() miniaplicación”, capaz solo de realizar funciones de middleware y enrutamiento. Cada aplicación Express tiene un enrutador de aplicaciones incorporado.
//  Router() method that creates a new router object.
const usuarioRoute = express.Router();




//importo el schema de la BBDD
let Usuario = require("../model/schemaUsuario.js");

//PETICIONES

//endpoint: traer la info del usuario
usuarioRoute.route("/usuario").get((req, res) => {
  Usuario.find({ email: req.query.email }, checkRespuesta);
  function checkRespuesta(err, usuario) {
    if (err) {
      res.status(400).send("Error" + err);
    } else {
      res.status(200).send(usuario);
      console.log("infoenviada");
    }
  }
});


//Cambiar el endpoint y poner /usuario
//Endpoint: Registro
//con este endPoint registro al usuario
usuarioRoute.route("/join").post(function (req, res, next) {
  let usuarioNuevo = new Usuario({
    id: req.body.id,
    name: req.body.name,
    genero: req.body.genero,
    email: req.body.email,
    age: req.body.age,
    descripcion: req.body.descripcion,
    gustos: req.body.gustos,
    arrLikes: req.body.arrLikes,
    arrDislike: req.body.arrDislike,
    prefGen: req.body.prefGen,
    foto: req.body.foto,
  });
  usuarioNuevo.save(usuarioNuevo, checkRespuesta);
  function checkRespuesta(err, usuarioNuevo) {
    if (err) {
      res.send(`Error:${err}`);
    } else {
      res.send(usuarioNuevo);
      console.log(`usuario creado`);
    }
  }
});

//endpoint home:
//mostrar 10 usuarios:

usuarioRoute.route('/conocepersonas')
    .get( (req,res) => {

    Usuario.find({genero:req.query.prefGen},checkRespuesta).limit(10);

        function checkRespuesta(err,candidatos){
            if(err){
            res.status(400).send(`Error:${err}`)
            }else {
                res.status(200).send(candidatos)
                console.log(`Usuarios enviados`)
            }
        }
    }
);

// usuarioRoute.route('/conocepersonas')
//     .post( (req,res) => {

//     Usuario.find({genero:req.body.prefGen}, { arrLikes:{"$nor":[req.body.arrLikes]}},{arrDislike:{"$nor":[req.body.arrDislike]}},checkRespuesta).limit(10);

//         function checkRespuesta(err,candidatos){
//             if(err){
//             res.status(400).send(`Error:${err}`)
//             }else {
//                 res.status(200).send(candidatos)
//                 console.log(`Usuarios enviados`)
//             }
//         }
//     }
// );

// Add likes o dislikes según el Boolean "esLike:" del modelo
// UsuarioMatch

// - "Email" es el mail de la persona que le damos likes"
// - "myEmail" es el mail del usuario de la tarjeta

usuarioRoute.route("/usuario").put((req, res) => {
  data = req.body;

  if (data.esLike == true) {
    console.log("Es like");
    Usuario.findOneAndUpdate({ email: data.myEmail }, { $addToSet: { arrLikes: data.email } }, checkRespuesta);
  } else {
    console.log("Es Dislike");
    Usuario.findOneAndUpdate({ email: data.myEmail }, { $addToSet: { arrDislike: data.email } }, checkRespuesta);
  }

  function checkRespuesta(err, usuario) {
    if (err) {
      res.status(400).send("Error" + err);
    } else {
      res.status(200).send(usuario);
      console.log("Actualizado");
    }
  }
});

//endpoint: editar perfil de usuario
module.exports = usuarioRoute;
