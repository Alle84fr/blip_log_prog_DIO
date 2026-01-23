
function getFirstName (name){
    // split, função que quebra o texto em palavras - coloca em vetores [] criando indices
    // como quero posição do nome, 1°, pego incide 0
    // como estou indo do 0 a n, eu acesso de froma direta[]
    let firstName = name.split(" ")[0]
    return firstName
}

function getLastName (name, splitChar){
    // como quero acessar do último ao 1° uso :
    // .at = função que diz que n° netativo conta do final
    // como é uma função chama com () e o valor desejado
    let lastName = name.split(splitChar).at(-1)
    return lastName

}

let user = "Amadeu Amadariano Fulano"

let nomes = getFirstName(user)


console.log(`${nomes} é seu nome de usuário`)

user = "Berenun-Ama-Fulaniou"
let sobrenome = getLastName(user, "-")

console.log(`Sua senha é seu sobrenome ${sobrenome}`)
