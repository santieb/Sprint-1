var fs = require('fs');

fs.writeFile("./placeHorder.txt",
"Correo Electrónico",(err) => {
    if(err) console.log("err")
    else console.log ("Archivo creado")
})
