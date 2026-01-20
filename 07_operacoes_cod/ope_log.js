// lógicos

// E / and / &&= todos devem ser True para ser True
// ou / OR / || = todos devem ser False para da False
// não / not / ! = inverte, nega

let idade = 18
let idade1 = 15

let visto_verif = true

console.log("")
console.log(`Idade de A é maior ou igual a 18 e o visto foi verificado? ` +((idade>=18)&&(visto_verif === true)))
console.log(`Idade de B é maior ou igual a 18 e o visto foi verificado? ` +((idade1>=18)&&(visto_verif === true)))
console.log("")

let condMoeda = 100
let condEstrela = 5
let condChefMorto = true

let user1_moed = 100
let user2_moed = 105
let user3_moed = 96
let user4_moed = 99

let user1_estre = 5
let user2_estre = 4
let user3_estre = 2
let user4_estre = 3

let user1_chef = true
let user2_chef = true
let user3_chef = false
let user4_chef = true

console.log(" ")
console.log(`Para passar de fase deve ter matado o chefão e mais de 99 moedas ou mais de 4 estrelas
User1 tem ${user1_moed} moedas ${user1_estre} estrelas e ${user1_chef} morte do chefão, 
User2 tem ${user2_moed} moedas ${user2_estre} estrelas e ${user2_chef} morte do chefão
User3 tem ${user3_moed} moedas ${user3_estre} estrelas e ${user3_chef} morte do chefão.
User4 tem ${user4_moed} moedas ${user4_estre} estrelas e ${user4_chef} morte do chefão.
User 1 passou de fase? ${(user1_chef===true)&&(user1_estre>4 || user1_moed > 99)}
User 2 passou de fase? ${(user2_chef===true)&&(user2_estre>4 || user2_moed > 99)}
User 3 passou de fase? ${(user3_chef===true)&&(user3_estre>4 || user3_moed > 99)}
User 4 passou de fase? ${(user4_chef===true)&&(user4_estre>4 || user4_moed > 99)}
User 2 roubou na contagem de moeda, nege seu resultado, ele passou de fase? ${!((user2_chef===true)&&(user2_estre>4 || user2_moed > 99))}`)

console.log(" ")

// | user | chefão morto | + de 99 moedas | + de 4 estrelas |
// | 1    | true         | 100            | 5               |
// | 2    | true         | 105            | 4               |
// | 3    | false        | 96             | 2               |
// | 3    | true         | 99             | 3               |

// | user | chefão morto | + de 99 moedas | + de 4 estrelas |
// | 1    | true         | true           | true            |
// | 2    | true         | true           | false           |
// | 3    | false        | false          | false           |
// | 4    | true         | false          | false           |

// | user | chefão morto %% (+ de 99 moedas || + de 4 estrelas) | 
// | 1    | true && ( true || true )  -> true && true == true
// | 2    | true && ( true || false )  -> true && true == true
// | 3    | false && ( false || false ) -> false && false == false
// | 3    | true && ( false || false ) -> true && false == false
