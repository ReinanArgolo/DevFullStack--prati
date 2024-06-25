/* Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array */

const arrayDeStrings = [
    "abobora",
    "banana",
    "laranja",
    "lima",
    "uva",
    "banana",
    "pera",
    "laranja",
    "limao",
    "morango",
    "uva"
];

const contador = arrayDeStrings.reduce((cont, val) => {
    if (val in cont) {
        cont[val]++
    } else {
        cont[val] = 1
    }
    return cont
}, {});

  console.log(contador) 