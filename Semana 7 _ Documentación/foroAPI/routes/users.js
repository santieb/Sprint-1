const express = require('express');
const router = express.Router();
const users = require('../models/users');

let id=0
router.post('/users', (req, res) => {
    const { name, lastname, email } = req.body;

    const user = { id: id++, name: name, lastname: lastname, email: email }
    users.push(user); 

    res.json({ "Usuario creado": user});
});

router.put('/users/:idUser', (req, res) => {
    const { name, lastname, email } = req.body;
    const idUser = req.params.idUser;

    const index = (users.findIndex(users => users.id == idUser));
    if(!index) return res.send('Usuario no encontrado');

    users[index] = { id: idUser, name: name, lastname: lastname, email: email}; 

    res.json( { "Datos Cambiados": users[index] } );
});

router.delete('/users/:idUser', (req, res) => {
    const idUser = req.params.idUser;

    const index = (users.findIndex(users => users.id == idUser));
    if(!index) return res.send('Usuario no encontrado');
    users.splice(index, 1)
  
    res.json(`user deleted`)
});

module.exports = router ;