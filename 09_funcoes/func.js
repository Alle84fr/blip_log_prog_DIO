// funções

// a função de uma toradeira é torrar um pão - AÇÃO

// PODE OU NÃO TER PARAMETROS
// PODE OU NÃO TER RETURN
// SEM TEM UMA AÇÃO

function torradeira(){
    console.log("\nligar torradeira e arrumar time")
}

function porPao(){
    torradeira()
    console.log("colocando pão na torradeira")

}

function pronto(){
    console.log("Pegar o pão e comer\n")
}



//chamando fução fora da função
porPao()
pronto()
// função que chama função