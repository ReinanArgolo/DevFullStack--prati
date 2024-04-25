const biblicoteca = [
    { titulo: '12 regras para Vida', autor: 'Jordan Peterson', ano: 1925},
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
    { titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009 },
    { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940},
    { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021},
]

for (let livro of biblicoteca){
    if (livro.ano < 2000) {
        console.log(`O livro "${livro.titulo}" foi publicado em ${livro.ano}`)
    }
}