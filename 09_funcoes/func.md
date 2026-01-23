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