const conteudos = [
    [
        'Grecia é linda',
        'Japão rima com mão',
        'Brasil é o melhor'
    ],
    [
        'Salvador me parece perigoso',
        'Morro de SP é a melhor ilha',
        'O Rio de Janeiro continua lindo'
    ],
    [
        'Paris é lindo',
        'Londres tinha a Rainha',
        'roma é minha origem'
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')


function displayContent(items) {
    let listaContent = ''
    for(const item of items){
        listaContent += `<li>${item}</li>`
    }

    const lista = document.createElement('ul')
    content.innerHTML = listaContent
    content.append(lista)
}
function activateButton(btn) {
    btnTab1.className = ""
    btnTab2.className = ""
    btnTab3.className = ""
    btn.className = "active"
}
function handleClick(event) {
    const btnId = event.target.id
    activateButton(event.target)

    if(btnId === "btn-tab1"){
        displayContent(conteudos[0])
    } else if (btnId === "btn-tab2") {
        displayContent(conteudos[1])
    } else {
        displayContent(conteudos[2])
    }
}


btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)

displayContent(conteudos[0])
