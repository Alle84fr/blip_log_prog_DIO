class Heina{
    constructor(n, i, t){
        this.n = n
        this.i = i
        this.t = t
    }

    quemSou(){

        let foto

        switch(this.t){
            case "mago":
                foto = `🧙 Dame ${this.n} com idade de ${this.i}`
                break
            case "guerreiro":
                foto = `🧝 Dame ${this.n} com idade de ${this.i}`
                break
            case "monge":
                foto = `🧘 Dame ${this.n} com idade de ${this.i}`
                break
            case "ninja":
                foto = `🥷 Dame ${this.n} com idade de ${this.i}`
                break
            }

            console.log(foto)
        }

    atacar(){

        let ataque

        //tem que por this. 
        switch(this.t){
            case "mago":
                ataque = "usou magia"
                break
            case "guerreiro":
                ataque = "usou espada"
                break
            case "monge":
                ataque = "usou artes marciais"
                break
            case "ninja":
                ataque = "usou shuriken "
                break
        }

        console.log(`o ${this.t} atacou usando ${ataque}`)
    }
}

let nome = "Kabalu"
let idade = 100
let tipo = "mago"

let heroina = new Heina(nome, idade, tipo)

heroina.quemSou()
heroina.atacar()
