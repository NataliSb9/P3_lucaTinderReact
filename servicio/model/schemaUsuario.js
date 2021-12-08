//Desarrollo del schema de la BBDD de mongo teniendo en cuenta lo indicado en Jira para crear los campos relativos a la colección usuario.

const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    id: String,
    name: String,
    genero: String,
    email: String,
    pass:String,
    age: Number,
    descripcion: String,
    gustos: Array,
    arrLikes: Array,
    arrDislike: Array,
    prefGen: String,
    foto: String,

})

//Personas es el nombre de la coleccion en la base de datos:
// User será el nombre de cada elemento de los que guardamos en la base de datos (usuarios en nuestro caso):

module.exports = mongoose.model("User", schema, "Personas");