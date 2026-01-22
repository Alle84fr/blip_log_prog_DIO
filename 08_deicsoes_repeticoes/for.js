// repete até condição for true, depois sai do laço

// for -> repetir várias vezes
// verificar, tem valor inicial e final
// muitas pessoas colocar let i, de INTERADOR
// for (variável contadorea = valor inicial; até onde será executado; como será incrementado)

//atenção é ponto e virgula entre eles
for(let val_inci = 1; val_inci <= 10; val_inci ++){
    console.log(`Tabuada do ${val_inci} *4 = ${val_inci*4}\n`)

}

console.log(" ")

let pontuacao = 0

for (let i=9; i >= 0; i--){
    if(i==0){
        console.log(`Você morreu com ${pontuacao} pontos \n`)
    } else {
    console.log(`Jogador tem ${i} de vida`)
    pontuacao += 5
    console.log(`Jogador tem ${pontuacao} de pontos\n`)
    }
}