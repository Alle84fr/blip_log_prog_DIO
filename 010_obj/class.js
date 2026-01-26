//Classe e objetos

// criando a forma, classe ou class

class FormaBolo{

    // MÉTODO CONTRUTOR É UMA FUNÇÃO, que tem infromações e comportamentos
    constructor(sabor, recheio = "sem recheio"){

        //this = este =representa a classe em questão
        // podes ser o mesmo nome que dos parâmetro
        //não precisa da palavra let e outras para criar variável
        this.sabor_massa = sabor
        this.sabor_recheio = recheio 

    }

    //mensagem padrão
    //não usa palavra function para criar função
    // quando se usa o `${}` se chama interpolação


        mensagemValor(){

            //   SEMPRE DECLARAR VARIÁVEL ANTES
            let valor

            if(this.sabor_massa == "limão siciliano" && this.sabor_recheio != "sem recheio"){
                valor = 63.00
            } 
            else if(this.sabor_massa == "limão siciliano" && this.sabor_recheio == "sem recheio") {
                valor = 54.00
            } 
            else if(this.sabor_massa != "limão siciliano" && this.sabor_recheio != "sem recheio") {
                valor = 41.00
            } else {
                valor = 31.20
            }

            console.log(`\n._______________________________________.\n| Bolos dona Donilde \n|.......................................|\n| Sabor: ${this.sabor_massa} - ${this.sabor_recheio}\n|.......................................|\n| Total: R$${valor}\n._______________________________________.\n `)
        }
}

let massa = "limão siciliano"

// como no java, quando se tem a palavra new e chama um classe ou objeto dela é porque é uma classe ou objeto que deve ser INSTANCIADO e não um objeto STATIC
let bolo = new FormaBolo(massa)

//para exibir o construtor
console.log("\n",bolo)

//para exibir o um sabor
console.log("\n",bolo.sabor_massa, "\n")

//para exibir método, lembrar que tem de ter ()
// como o retorno é um print, não se coloca console.log, porque da´ra erro = UNDEFINED
bolo.mensagemValor()

massa = "limão siciliano"
let recheio = "creme de limão taiti com amora"

bolo = new FormaBolo(massa,recheio)

//para exibir o construtor
console.log("\n",bolo)

//para exibir o um sabor
console.log("\n",bolo.sabor_massa, "\n")

//para exibir método, lembrar que tem de ter ()
// como o retorno é um print, não se coloca console.log, porque da´ra erro = UNDEFINED
bolo.mensagemValor()

massa = "abacaxi"
recheio = "creme de abacaxi e marshmallow"

// como no java, quando se tem a palavra new e chama um classe ou objeto dela é porque é uma classe ou objeto que deve ser INSTANCIADO e não um objeto STATIC
bolo = new FormaBolo(massa, recheio)

//para exibir o construtor
console.log("\n",bolo)

//para exibir o um sabor
console.log("\n",bolo.sabor_massa, "\n")

//para exibir método, lembrar que tem de ter ()
// como o retorno é um print, não se coloca console.log, porque da´ra erro = UNDEFINED
bolo.mensagemValor()

massa = "abacaxi"


// como no java, quando se tem a palavra new e chama um classe ou objeto dela é porque é uma classe ou objeto que deve ser INSTANCIADO e não um objeto STATIC
bolo = new FormaBolo(massa)

//para exibir o construtor
console.log("\n",bolo)

//para exibir o um sabor
console.log("\n",bolo.sabor_massa, "\n")

//para exibir método, lembrar que tem de ter ()
// como o retorno é um print, não se coloca console.log, porque da´ra erro = UNDEFINED
bolo.mensagemValor()


