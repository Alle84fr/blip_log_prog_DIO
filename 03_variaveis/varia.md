<h1>Variáveis</h1>

<b>Variável </b> valor armazenado na mamória, armazena um valor

<h3>Unicode</h3>

É case sensitive - maiusculas e minusculas são diferentes

Usa Unicode - lista com todos caracteres do alfabeto unicope

Caracteres = símbolo tipográfico

Parte da tabela:


| n° unicode | caractere |
|:---:| :---|
| 0          | Null      |
| 32         | espaço    |
| 48         | 0         |
| 49         | 1         |
| 50         | 2         |
| 51         | 3         |
| 52         | 4         |
| 53         | 5         |
| 54         | 6         |
| 55         | 7         |
| 56         | 8         |
| 57         | 9         |
| 65         | A         |
| 97         | a         |
| 66         | B         |
| 98         | b         |
| 67         | C         |
| 99         | c         |

https://naveenr.net/unicode-character-set-and-utf-8-utf-16-utf-32-encoding/

<h3>Declaração</h3>


<h4>Scope, escopo</h4>

Local onde uma variável pode ou não ser acessada

<b>Global</b> acesso em qualquer parte do código

<b>Loval</b> acesso apenas dentro de bloco ou função em que foi declarada

<h4>let</h4>

- mutável
- respeita o escopo (scope - local onde uma variável pode ser acessada) de bloco
- modificada apenas dentro da função em que foi declarada

<h4>const</h4>

- imutável
- respeita o escopo de bloco

<h4>var</h4>

- não respeita o scope do código
- pode ser acessada fora de if, for ...
- não recomendada