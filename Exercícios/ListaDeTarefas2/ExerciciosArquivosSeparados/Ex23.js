matriz = [[], [], [], [], [], [], []]

for (let l = 0; l < 7; l++) {
    for (i = 0; i < 7; i++) {
        if (i == l) {
            matriz[l][i] = 1
        } else {
            matriz[l][i] = 0
        }
    }
    console.log(`[${matriz[l]}]`)
}

