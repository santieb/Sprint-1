const express = require('express');
const app = express();
const port = 3011;

const cursos = [
  {
    nombre: 'desarrollo web Backend',
    sprints: 3,
    url: 'http://cursos/dwbe',
  },
  {
    nombre: 'desarrollo web Frontend',
    sprints: 3,
    url: 'http://cursos/dwfe',
  },
  {
    nombre: 'desarrollo web FullStack',
    sprints: 4,
    url: 'http://cursos/dwfs',
  },
  {
    nombre: 'DevOps',
    sprints: 2,
    url: 'http://cursos/devops',
  }
];

const logger = (req, res, next) => {
  console.log(req.path);
  next();
};

const validacionCursos = (req, res, next) => {
  if (req.params.id <= cursos.length && req.params.id > 0){
    console.log("El curso existe");
    next() 
  }
  else res.send("El curso no existe");
};

app.use(logger);

app.get('/cursos', function (req, res) {
  res.json(cursos);
});

app.get('/cursos/:id', validacionCursos, (req, res, next) => {
  const id = req.params.id-1
  res.json(cursos[id]);
});

app.listen(port, function () {
  console.log(`Server listening on port http://localhost:${port}`);
});
