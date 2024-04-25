// Funções avançadas: String
/* 
    String é considerado um valor primitivo, poré,, ao ser interpretado o JS os converte em objetos,
    possuindo propriedades e métodos.
*/

// Funções Avançadas: Matemáticas

let a = Math.ceil(10.100) // arredondar pra cima

let b = Math.floor(10.000) // arredondar pra baixo

let c = Math.round(10.100) // arredondar média

let d = Math.random() // gerar num aleatório


// Funções Avançadas: Datas

let data = new Date(2006, 3, 17);
console.log('Hoje é: ', data.getDate(), '/', data.getMonth()+1, '/', data.getFullYear())

let e = data.toLocaleDateString();
console.log(e)

let data1 = new Date(2024, 3, 17)

let miliseg = Math.abs(data.getTime() - data1.getTime())
console.log(miliseg)