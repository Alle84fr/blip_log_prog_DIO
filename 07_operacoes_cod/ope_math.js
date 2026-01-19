// Aritmédicos

// ps + também concatena valores, junta valores

let idade = 30;

console.log("A idade inicial é " + idade)

idade = 30 + 11

console.log("Soma da idadade com 11 é: " + idade + " ,usei operador soma +")

idade = 30 - 5.5

console.log("Subtrai da idadade 5.5 : " + idade + " ,usei operador subtração -")

idade = 30 / 5

console.log("Dividi a idadade por 5 : " + idade + " ,usei operador divisão /")

idade = 30 * 2

console.log("Multipliquei a idadade por 2 : " + idade + " ,usei operador multiplicação 2")

let ano_atual = 2026
let ano_nasc = 1950
let m_idade = ano_atual - ano_nasc

console.log("Se nasci em " + ano_nasc + "em " + ano_atual + " terei " + m_idade)

let produto = 10.57
let quant = 9
let valor_total = produto * quant
let desconto = 1.3
let valor_desc = valor_total * desconto

console.log(`  Produto: ${produto}
  Quantidade: ${quant}
  Valor total: ${valor_total}
  Desconto: ${desconto}
  Valor com desconto: ${valor_desc.toFixed(2)}`)

// formatação com casas decimais
// Java script - console.log(valor_desc.toFixed(2))
// Java - System.out.printf("%.2f%n", valorDesc);
// Kotlin - println(String.format("%.2f", valorDesc))
// Python - f-string - print(f"{valor_desc:.2f}")

let valor = 48
let cond = valor % 2

console.log(`Como o resto de ${valor} é ${cond}, então ele é multiplo de 2`)