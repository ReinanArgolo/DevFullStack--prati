const filmes = [
    {titulo: "Tropa de Elite", genero: "Ação"},
    {titulo: "Capitão Fantástico", genero: "Drama"},
    {titulo: "O Poderoso Chefão", genero: "Crime"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Oppenheimer", genero: "Biografia"},
    {titulo: "High School Musical", genero: "Musical"},
    {titulo: "Barbie", genero: "Comédia"},
]

// let contagemGenero = {}

// filmes.forEach(filme => {
//     if(contagemGenero[filme.genero]){
//         contagemGenero[filme.genero]++
//     } else {
//         contagemGenero = 1
//     }
// })

// for (let genero in contagemGenero) {
//     console.log(`${contagemGenero[genero]} filme(s) do gênero ${genero}`)
// }
  
  let contagemGenero = {};
  
  filmes.forEach(filme => {
    if (contagemGenero[filme.genero]) {
      contagemGenero[filme.genero]++;
    } else {
      contagemGenero[filme.genero] = 1;
    }
  });
  
  for (let genero in contagemGenero) {
    console.log(`${contagemGenero[genero]} filme(s) do gênero ${genero}`);
  }

/* 
* Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
* Para cada filme no array, verifique se o gênero já existe no objeto contagem.
* Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1 
* Após loop, imprima cada gênero e o número de fillmes correspondente
*/