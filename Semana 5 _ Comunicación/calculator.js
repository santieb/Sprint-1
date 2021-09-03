sumar = (num1,num2) =>{
    return `El resultado de ${num1} + ${num2} es = ${num1+num2}`
}
restar = (num1,num2) =>{
    return `El resultado de ${num1} - ${num2} es = ${num1-num2}`
}
multiplicar = (num1,num2) =>{
    return `El resultado de ${num1} * ${num2} es = ${num1*num2}`
}
dividir = (num1,num2) =>{
    if(num2 === 0)  return `No se puede dividir por 0`
    else return `El resultado de ${num1} / ${num2} es = ${num1/num2}`
}

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
