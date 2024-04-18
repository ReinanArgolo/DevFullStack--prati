let prompt = require('prompt-sync')();
function greeting(name) {
    console.log("Olá " + name);
}
  
function processUserInput(callback) {
    var name = prompt("Por favor insira seu nome.");
    callback(name);
}
  
processUserInput(greeting);