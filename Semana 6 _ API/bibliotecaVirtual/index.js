const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3006;

let authors  = require('./authors');

//authors

app.get('/authors', function (req, res) {
  res.json(authors);
});

app.post('/authors', function (req, res) {
  authors.push(req.body)
  res.json("Author created");
});

//middleware

const validateAuthor = (req, res, next) => {
  const resultado = (authors.filter(authors => authors.id == req.params.id))
  if (resultado.length != 0){
    next() 
  }
  else res.send("El id no existe");
};

//authors/id

app.get('/authors/:id', validateAuthor, (req, res) => {
  const resultado = (authors.filter(authors => authors.id == req.params.id))
  res.json(resultado)
});

app.put('/authors/:id', validateAuthor, (req, res) => { 
  const index = authors.findIndex(authors => authors.id == req.params.id);
  authors[index] = req.body

  res.json("Author updated")
});

app.delete('/authors/:id', validateAuthor, (req, res) => {
  index = authors.findIndex(authors => authors.id == req.params.id);
  authors.splice(index, 1)

  res.json(`Author deleted`)
});

//author/id/books

app.get('/authors/:id/books', validateAuthor, (req, res) => {   
  const index = authors.findIndex(authors => authors.id == req.params.id);

  if(authors[index].books.length != 0)
  res.json(authors[index].books)
  else res.json("this author does not has books")
  
});

app.post('/authors/:id/books', validateAuthor, (req, res) => {
  const index = authors.findIndex(authors => authors.id == req.params.id);
  authors[index].books.push(req.body)

  res.json("added book")
});

//middleware

const validateBook = (req, res, next) => {
  const index = authors.findIndex(authors => authors.id == req.params.id)
  let book = authors[index].books 
  book = (book.filter(book => book.id == req.params.idBook))
  if (book.length != 0){
    next() 
  }
  else res.send("El id no existe");
};

//authors/id/books/booksid

app.get('/authors/:id/books/:idBook', validateAuthor, validateBook, (req, res) => {   
  const index = authors.findIndex(authors => authors.id == req.params.id)
  let book = authors[index].books 
  book = (book.filter(book => book.id == req.params.idBook))
  res.json(book)

});

app.put('/authors/:id/books/:idBook', validateAuthor, validateBook, (req, res) => {   
  const index = authors.findIndex(authors => authors.id == req.params.id)
  const indexBook = (authors[index].books.findIndex(book => book.id == req.params.idBook))
  authors[index].books[indexBook] = req.body

  res.json("Book uptated")
});

app.delete('/authors/:id/books/:idBook', validateAuthor, validateBook, (req, res) => {   
  const index = authors.findIndex(authors => authors.id == req.params.id)
  authors[index].books = authors[index].books.filter(book => book.id != req.params.idBook);
  res.json("Book deleted")
});

app.listen(port, function () {
    console.log(`Server listening on port http://localhost:${port}`);
  });
  