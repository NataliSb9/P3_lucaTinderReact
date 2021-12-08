//En este archivo se agrega lo necesario y relativo a la conexión con la BBDD y luego se agrega un module export para exportar la conexión 
const express = require("express");

let mongoose = require("mongoose");
let User = require('../model/schemaUsuario');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



//Cuenta usada (credenciales): Lucatinder ; Pass: LucatinderG4.

mongoose.connect('mongodb+srv://Lucatinder:LucatinderG4.@cluster0.f6f84.mongodb.net/LucatinderDataBase?retryWrites=true&w=majority',
    function (err) {
        if (err) {
            throw err;
        } else {
            console.log('Te has conectado a Mongo Atlas!!')

        }
    }
)





//--------------------------------------------------------------------------------------------- Funcion para añadir personas a la base de datos: ---------------------------------


function createUser( id,name, genero, email,pass, age, descripcion, gustos, arrLikes, arrDislike, prefGen, foto) {
    function checkRespuesta(err, res) {
        if (err) {
            console.log('Error' + err)
        } else {
            //res.send(User)
        }
    }

    let user = new User({
        id:id,
        name: name,
        genero: genero,
        email: email,
        pass:pass,
        age: age,
        descripcion: descripcion,
        gustos: gustos,
        arrLikes: arrLikes,
        arrDislike: arrDislike,
        prefGen: prefGen,
        foto: foto,

    })
    user.save(checkRespuesta)
}

module.exports = createUser;