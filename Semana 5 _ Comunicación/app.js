const calculadora = require("./calculator")
var fs = require('fs');

fs.writeFile("./results.txt",
`${calculadora.restar(4,2)}
\n${calculadora.restar(6,3)}
\n${calculadora.multiplicar(2,2)}
\n${calculadora.dividir(10,2)}
\n${calculadora.dividir(2,0)} `,(err)=>{
    if(err) console.log("err")
    else console.log ("Archivo creado")
})
