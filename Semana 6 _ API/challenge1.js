const express = require('express');
let Alumnos = ["juan", "marcelo", "roberto"]
const app = express();

app.listen(3000, function () {
    console.log('Escuchando el puerto 3000!');
  });

app.get('/Alumnos', function (req, res) {
        res.send(`Lista de alumnos: ${Alumnos}`);
  });

