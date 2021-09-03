const coolImages = require("cool-images");
const chalk = require('chalk');

console.log((coolImages.one()))
const images = coolImages.many(600, 800, 10);

console.log(chalk.blueBright("Imagenes:"));

images.forEach(element => {
    console.log(element);
});