//Classe e objetos

// criando a forma, classe ou class

class FormaBolo{

    // MÉTODO CONTRUTOR É UMA FUNÇÃO, que tem infromações e comportamentos
    constructor(sabor, recheio = "sem recheio"){

        //this = este =representa a classe em questão
        // podes ser o mesmo nome que dos parâmetro
        this.sabor_massa = sabor
        this.sabor_recheio = recheio 

    }
}

let massa = "limão siciliano"

// como no java, quando se tem a palavra new e chama um classe ou objeto dela é porque é uma classe ou objeto que deve ser INSTANCIADO e não um objeto STATIC
let bolo = new FormaBolo(massa)

//para exibir o construtor
console.log(bolo)

//para exibir o construtor
console.log(bolo)