let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoDb =
    "mongodb+srv://Lucatinder:LucatinderG4.@cluster0.f6f84.mongodb.net/LucatinderDataBase?retryWrites=true&w=majority";

//mongoDb => es la BBDD.
mongoose.Promise = global.Promise;
mongoose.connect(
  mongoDb,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Te has conectado con éxito a la base de datos");
    }
  }
);

const usuarioRoute = require("./routes/usuario.routes");

const app = express();

// !parseo no funciona
// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//MIDLEWARE

//Inicio la aplicación con express con la función

app.use(bodyParser.json());

//este middleware analiza el texto como datos codificados de URL (que es la forma en que los navegadores tienden a enviar datos de formularios) y expone el objeto resultante (que contiene las claves y valores) en req.body.

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

//Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función de middleware incorporado express.static de Express.

//No tengo clara la funcionalidad de este middleware para la aplicación de LucaTinder
//app.use(express.static(path.join(__dirname, '')));

app.use("/lucatinder", usuarioRoute);

// variables para la integracion de swagger

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

//endpoint donde se puede ver la interfaz de usuario de Swagger
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

//Codigo para seleccionar el puerto desde el que escucha el servidor
const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Estoy escuchando por el puerto: ${puerto}`);
});

//Manejo de errores

//Manejo de 404

app.use(function (request, response, next) {
  respuesta = { codigo: 404, mensaje: "URL no encontrada" };
  response.status(404).send(respuesta);
});

app.get("/", (req, res) => {
  res.send("endpoint incorrecto");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ""));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
