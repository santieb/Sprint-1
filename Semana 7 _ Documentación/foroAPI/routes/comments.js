const express = require('express');
const router = express.Router();
const comments = require('../models/comments');
const topics = require('../models/topics');
const users = require('../models/users');

let idComments = 0;

router.post('/comments/:idTopic/:idUser', (req, res) => {
    const { comment } = req.body;
    const { idTopic, idUser } = req.params;

    const idTopicExists = topics.find(topics => topics.id == idTopic);
    const idUserExists = users.find(users => users.id == idUser);

    if(!idTopicExists || !idUserExists) return res.send( "Topico o usuario no encontrado" ).status(404)

    const data = { id: idComments++, idTopic: idTopic, idUser: idUser, comment: comment };
    comments.push(data); 

    res.json({ "Comentario creado": data});
});


router.put('/comments/:idComment', (req, res) => {
    const { comment } = req.body;
    const  idComment = req.params.idComment;

    const wantedComment = comments.find(comments => comments.id == idComment);
    if (!wantedComment) return res.status(404).send('Comentario no encontrado');
    const index = comments.findIndex(comments => comments.id == idComment);

    comments[index] = { id: idComment, idTopic: wantedComment.idTopic, idUser: wantedComment.idUser, comment: comment };

    res.json( { "Datos Cambiados": comments[index] } );
});


router.delete('/comments/:idComment', (req, res) => {
    const idComment = req.params.idComment;

    const index = (comments.findIndex(comments => comments.id == idComment));
    console.log(index);
    if(index == -1) return res.send('Comentario no encontrado');
    comments.splice(index, 1)
  
    res.json(`Comentario eliminado`)
});

module.exports = router;