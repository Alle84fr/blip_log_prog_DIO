<h1>Funçõe em .js .java .kotlin .py</h1>

<h3>JavaScript</h3>

```
function torradeira(){
    console.log("\nligar torradeira e arrumar time")
}


function porPao(){
    torradeira()
    console.log("colocando pão na torradeira")

}

//main.js

// chamando a função

porPao()

```

<h3>Java</h3>

Todas os métodos(ação) devem estar dentro de uma CLASSE

A classe é o conteiner de código que guardará os métodos(que são funçõe, mas em java são chamadas de métodos), variáveis e regras de comportamento

```
public class Cozinha {

    static void torradeira() {
        System.out.println("ligar torradeira");
    }

    static void porPao() {
        torradeira();
        System.out.println("colocando pão");
    }

    public static void main(String[] args) {
        // chamando o método
        porPao(); 
    }
}

```

Obervação

<b>void</b> método sem retorno
<b>static</b> método que pode ser chamado direto
<b>main</b> método que chama os outros


<h3>Kotlin</h3>

Para rodar DEVE  ter a função main, é esta função que mostra onde iniciar

```
fun torradeira() {
    println("\nligar torradeira e arrumar time")
}

fun porPao() {
    torradeira()
    println("colocando pão na torradeira")
}

// chama a funçao
fun main() {
    porPao() // chamada
}

```
<h3>Python</h3>

```
def torradeira():
    print("\nligar torradeira e arrumar time")


def por_pao():
    torradeira()
    print("colocando pão na torradeira")


// chama a função
por_pao()

```

Observação

<b>def</b> cria a função, seria function ou fun das outras linguagens

<h3>Observações</h3>

Variáveis dentro da função, que não tem seu "espelho" fora, não funcionará fora

```
function somar(valor){
    let nove = 9
    let soma = valor + nove
    console.log(`A soma de ${soma} e ${nove} = ${soma}`)

    if(soma>60){
        console.log("Maior de 60")
    }
}

// main.js

let valor = 58

somar(valor)

// atenção aqui
console.log(soma)

``````
A variável <u>soma</u> é uma variável interna da função, ela não existe fora
Ao rodas o retorno será:

console.log(soma)
            ^
ReferenceError: soma is not defined

Já a variável valor está fora, e ela pode ser chamanda

<h3>default</h3>

Parâmetro mais genérico

Se não passar o valor no parâmetro, ele pega o valor pré definido, se passar, o valor a ser recebido será o declarado fora



