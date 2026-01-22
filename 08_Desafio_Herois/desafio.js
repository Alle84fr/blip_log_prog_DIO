console.log("\n 🧙‍♂️ Em um mundo mundo distante, onde o movimento é gerado com energias correndo cabos, uma heroína ヽ༼ຈل͜ຈ༽ﾉ surge para salvar o sistema da água do copo que caiu do teclado ಠ_ಠ ")
console.log("JáSalvei percorreu os mundo CPU Quente, RAM cega e PlacaMãe molhada e agora ela retona na sua casa Carteira Vazia")
console.log("Cansada e com fome. o mago do local vai até ela, faz um ritual de irá fazer um glow up")
console.log("Já animada, JáSalvei pergunta qual seu novo nível 🧝\n")

let nome = "JaSalvei"
let nivel = " "
//let XP = 1.000
//let XP = 2.000
let XP = 10.000

// atenção
// no .js a comparação não pode ser (1.001 <= XP <= 2.000)
// comparação deve usar &&

if(XP<=1.000){
    nivel = "🪄  Ferro - 🏅"
}
else if (1.001 <= XP && XP <= 2.000) {
    nivel = "🪄  Bronze - 🥉"
}
else if (2.001 <= XP && XP <= 5.000) {
    nivel = "🪄  Prata - 🥈"
}
else if (5.001 <= XP && XP <= 7.000) {
    nivel = "🪄  Ouro - 🥇"
}
else if (7.001 <= XP && XP <= 8.000) {
    nivel = "🪄  Platina Diamamte - 💎"
}
else if (8.001 <= XP && XP <= 9.000) {
    nivel = "🪄  Ascendente - 🚀"
}
else if (9.001 <= XP && XP <= 10.000) {
    nivel = "🪄  Imortal - 🐩"
} else {
    nivel = "🪄  Radiante - 🦄"
}

console.log(`A 🧝 heroína  de nome ${nome} está no nível de ${nivel}`)

// parte extra

if(nivel == "🪄  Ferro - 🏅"){
    console.log("🤯\n")
}
else if (nivel == "🪄  Bronze - 🥉") {
    console.log("😵‍💫\n")
}
else if (nivel = "🪄  Prata - 🥈") {
    console.log("🥴\n")
}
else if (nivel == "🪄  Ouro - 🥇") {
    console.log("😐\n")
}
else if (nivel == "🪄  Platina Diamamte - 💎") {
    console.log("🧐\n")
}
else if (nivel == "🪄  Ascendente - 🚀") {
    console.log("🙂\n")
}
else if (nivel == "🪄  Imortal - 🐩") {
    console.log("😃\n")
} else {
    console.log("🤩\n")
}