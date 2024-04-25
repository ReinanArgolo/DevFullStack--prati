const celular = {
    marca: 'Samsung',
    modelo: 'SM-M526b',
    conectado: true,
    carregando: true,
}

celular.desconectar = function() {
    if(this.conectado == true){
        this.conectado = !this.conectado
    }
    return this.conectado
}

console.log(celular, celular.desconectar())