// funções

// a função de uma toradeira é torrar um pão - AÇÃO

// PODE OU NÃO TER PARAMETROS
// PODE OU NÃO TER RETURN
// SEM TEM UMA AÇÃO

// nomeando
// não inicia com n°
// snak case aaaBbb(), de preferença
// nome verbo que diz o que dizer, de preferença
// deixar fução com "único objetivo"

// identação mostra que bloco pertence a linha, 4 espaços


// nomear como ligarTorradeira
function torradeira(){
    console.log("\nligar torradeira e arrumar time")
}


function porPao(){
    torradeira()
    console.log("colocando pão na torradeira")

}

// nomearpegarPao
function pronto(){
    console.log("Pegar o pão e comer\n")
}

// chamar todas funções de uma vez
function mainChamar(){
    //chamando fução fora da função
porPao()
pronto()
// função que chama função
}


// fora da função
mainChamar()