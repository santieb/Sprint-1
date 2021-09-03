const express = require('express');
const app = express();
const puerto = 3003;

const telefonos = [
{
    marca: 'Samsung',
    gama: 'alta',
    modelo: 'Galaxy S7',
    precio: 1299,
    pantalla: '6',
    sistema_operativo : 'Android'
},
{
    marca: 'Apple',
    gama: 'alta',
    modelo: 'iPhone 6',
    precio: 1299,
    pantalla: '6',
    sistema_operativo: 'iOS'
},
{
  marca: 'Motorola',
  gama: 'baja',
  modelo: 'e7 plus',
  precio: 150,
  pantalla: '7',
  sistema_operativo: 'Android'
},
{
  marca: 'Samsung',
  gama: 'baja',
  modelo: 'A5',
  precio: 110,
  pantalla: '6',
  sistema_operativo: 'Android'
},
{
    marca: 'Xiaomi',
    gama: 'media',
    modelo: 'Redmi Note 3',
    precio: 399,
    pantalla: '4',
    sistema_operativo: 'Android'
},
{
    marca: 'Realme',
    gama: 'media',
    modelo: '7',
    precio: 244,
    pantalla: '5',
    sistema_operativo: 'Android'
},
{
  marca: 'Sony Ericsson',
  gama: 'alta',
  modelo: 'k850',
  precio: 544,
  pantalla: '5',
  sistema_operativo: 'Java'
}];


precios = telefonos;
precios.sort((a,b)=>a.precio-b.precio);

let gamaAlta = (telefonos.filter(telefono => telefono.gama === 'alta'))
let gamaMedia = (telefonos.filter(telefono => telefono.gama === 'media'))
let gamaBaja = (telefonos.filter(telefono => telefono.gama === 'baja'))
const gamas = [gamaAlta,gamaMedia,gamaBaja];


app.get('/telefonos', (req, res) => {
  res.json(telefonos);
});

app.get('/gamas', (req, res) => {
    res.json(gamas);
});

app.get('/menorPrecio', (req, res) => {
  res.json(precios[0])
});

app.get('/mayorPrecio', (req, res) => {
  res.json(precios[telefonos.length-1])
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
