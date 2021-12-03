const express = require('express');
const router = express.Router();
const topics = require('../models/topics');

let idTopic=0
router.post('/topics', (req, res) => {
    const { tittle, description } = req.body;
    
    const topic = { id: idTopic++, description: description, tittle: tittle};
    topics.push(topic); 

    res.json({ "Topico creado": topic});
});

router.put('/topics/:idTopic', (req, res) => {
    const { tittle, description } = req.body;
    const idTopic = req.params.idTopic;

    const index = (topics.findIndex(topics => topics.id == idTopic));
    if(index == -1) return res.send('Topico no encontrado');

    topics[index] = { id: idTopic, description: description, tittle: tittle};

    res.json( { "Datos Cambiados": topics[index] } );
});

router.delete('/topics/:idTopic', (req, res) => {
    const idTopic = req.params.idTopic;

    const index = (topics.findIndex(topics => topics.id == idTopic));
    if(index == -1) return res.send('Topico no encontrado');
    topics.splice(index, 1)
  
    res.json(`topico eliminado`)
});

module.exports = router;