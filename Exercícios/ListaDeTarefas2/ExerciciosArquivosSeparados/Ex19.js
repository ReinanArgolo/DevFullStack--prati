const prompt = require("prompt-sync")();

/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

solicitarHorarios();

function solicitarHorarios() {
    for (i=0; i<5;i++) {
        console.log(`\nHorário ${i+1}\n`)
        let hora = parseInt(prompt('Hora: '))
        let minuto = parseInt(prompt('Minutos: '))
        let segundo = parseInt(prompt('Segundos: '))

        validarHorarios(hora, minuto, segundo)
}
}

function validarHorarios(hora, minuto, segundo) {
    let horarios = []
    
    if (hora > 23) {
        console.log('Horario inválido!')
        horarios.push('00')
        horarios.push('00')
        horarios.push('00')
    } else {
        horarios.push(hora)
    }

    if (minuto > 59) {
        console.log('Horario inválido!')
        horarios[0] = '00'
        horarios.push('00')
        horarios.push('00')
    } else {
        horarios.push(minuto)
    }

    if (segundo > 59) {
        console.log('Horario inválido!')
        horarios[0] = '00'
        horarios[1] ='00'
        horarios.push('00')
    
    } else {
        horarios.push(segundo)
    }

    imprimirHora(horarios)
}

function imprimirHora(arrayDeHorarios) {
    console.log(`${arrayDeHorarios[0]}:${arrayDeHorarios[1]}:${arrayDeHorarios[2]}`)
}