### comparar vetor em linguagens diferentes

#### ________________ javacripst



- <b>criar lista</b>

<spin style="color: green;">let lista = [1, 7, 3, 7, 5, 1, 9, 7]</spin>

- <b>print lista</b>

<spin style="color: green;">console.log(lista)</spin>

- <b>print indice 5 da lista</b>

<spin style="color: green;">console.log(lista[5])</spin>

- <b>adicionar no início lista</b>

<spin style="color: green;">lista.unshift(0)</spin>

- <b>adicionar no final lista</b>

<spin style="color: green;">lista.push(10)</spin>

- <b>adicionar no indice 4 lista</b>

<spin style="color: green;">lista.splice(4, 0, 99)</spin>

- <b>deletar último lista</b>

<spin style="color: green;">lista.pop()</spin>

- <b>deletar primeiro lista</b>

<spin style="color: green;">lista.shift()</spin>

- <b>deletar indice 9 da lista</b>

<spin style="color: green;">lista.splice(9, 1)</spin>

- <b>ordenar a lista ordem crescente</b>

<spin style="color: green;">lista.sort((a, b) => a - b)</spin>

- <b>ordenar a lista ordem decrescente</b>

<spin style="color: green;">lista.sort((a, b) => b - a)</spin>

- <b>reverter ordem da lista</b>

<spin style="color: green;">lista.reverse()</spin>

- <b>tamanho da lista</b>

<spin style="color: green;">console.log(lista.length)</spin>

- <b>achar quantos 1 tem lista</b>

<spin style="color: green;">console.log(lista.filter(v => v === 1).length)</spin>

- <b>achar o 1° 7 na lista</b>

<spin style="color: green;">console.log(lista.indexOf(7))</spin>

- <b>somar valores</b>

<spin style="color: green;">let soma = lista.reduce((total, valor) => total + valor, 0)</spin>
<spin style="color: green;">console.log(soma)</spin>

<u>ou</u>

<spin style="color: green;">let soma = 0</spin>
<spin style="color: green;">for (let v of lista) { soma += v; }</spin>
<spin style="color: green;">console.log(soma)</spin>

- <b>somar valores com índice</b>

<spin style="color: green;">let lista = [1, 7, 3, 7];</spin>
<spin style="color: green;">let soma = lista.reduce((acc, valor, indice) => { return acc + indice * valor; }, 0);</spin>
<spin style="color: green;">console.log(soma)</spin>

- <b>ignorar valor repetido</b>

<spin style="color: green;">let lista = [1, 7, 3, 7, 5, 1, 9, 7];</spin>
<spin style="color: green;">clet semDuplicados = [...new Set(lista)];</spin>
<spin style="color: green;">console.log(semDuplicados);</spin>


- <b> outros métodos</b>

<u>includes()</u> - verifica se existe valor 
<u>find()</u> - retorna o primeiro valor que atende condição 
<u>findIndex()</u> - índice do primeiro que atende condição 
<u>some()</u> - existe pelo menos um ? 
<u>every()</u> - todos atendem condição ? 
<u>map()</u> - transforma os valores 
<u>filter()</u> - filtra valores  
<u>reduce()</u> - acumula (soma, produto, objeto, etc)

#### ________________ java

importar
<spin style="color: blue;">import java.util.*;</spin>

- <b>criar lista</b>

<spin style="color: blue;">List<Integer> lista = new ArrayList<>( Arrays.asList(1, 7, 3, 7, 5, 1, 9, 7) );</spin>

- <b>print lista</b>

<spin style="color: blue;">System.out.println(lista);</spin>

- <b>print indice 5 da lista</b>

<spin style="color: blue;">System.out.println(lista.get(5));</spin>

- <b>adicionar no início lista</b>

<spin style="color: blue;">lista.add(0, 0);</spin>

- <b>adicionar no final lista</b>

<spin style="color: blue;">lista.add(10);</spin>

- <b>adicionar no indice 4 lista</b>

<spin style="color: blue;">lista.add(4, 99);</spin>

- <b>deletar último lista</b>

<spin style="color: blue;">lista.remove(lista.size() - 1);</spin>

- <b>deletar primeiro lista</b>

<spin style="color: blue;">lista.remove(0);</spin>

- <b>deletar indice 9 da lista</b>

<spin style="color: blue;">lista.remove(9);</spin>

- <b>ordenar a lista ordem crescente</b>

<spin style="color: blue;">Collections.sort(lista);</spin>

- <b>ordenar a lista ordem decrescente</b>

<spin style="color: blue;">Collections.sort(lista, Collections.reverseOrder());</spin>

- <b>reverter ordem da lista</b>

<spin style="color: blue;">Collections.reverse(lista);</spin>

- <b>tamanho da lista lista</b>

<spin style="color: blue;">System.out.println(lista.size());</spin>

- <b>achar quanto 1 tem lista</b>

<spin style="color: blue;">long count = lista.stream().filter(v -> v == 1).count();</spin>
<spin style="color: blue;">System.out.println(count);</spin>

- <b>achar o 1° 7 na lista</b>

<spin style="color: blue;">System.out.println(lista.indexOf(7));</spin>

- <b>somar valores</b>

<spin style="color: blue;">List<Integer> lista = Arrays.asList(1, 7, 3, 7, 5, 1, 9, 7);</spin>
<spin style="color: blue;">int soma = lista.stream().mapToInt(Integer::intValue).sum();</spin>
<spin style="color: blue;">System.out.println(soma);</spin>

<u>ou</u>

<spin style="color: blue;">int soma = 0;</spin>
<spin style="color: blue;">for (int v : lista) { soma += v; }</spin>
<spin style="color: blue;">System.out.println(soma);</spin>

- <b>somar valores com índice</b>

<spin style="color: blue;">List<Integer> lista = Arrays.asList(1, 7, 3, 7);</spin>
<spin style="color: blue;">int soma = 0;</spin>
<spin style="color: blue;">for (int i = 0; i < lista.size(); i++) { soma += i * lista.get(i); }</spin>
<spin style="color: blue;">System.out.println(soma);</spin>

- <b>ignorar valor repetido</b>

<spin style="color: blue;">List<Integer> lista = Arrays.asList(1, 7, 3, 7, 5, 1, 9, 7);</spin>
<spin style="color: blue;">List<Integer> semDuplicados =</spin>
<spin style="color: blue;">....lista.stream().distinct().toList();</spin>
<spin style="color: blue;">System.out.println(semDuplicados);</spin>

<b>outro métodos</b>

<u>contains()</u> - existe valor 
<u>isEmpty()</u> - lista vazia ? 
<u>clear()</u> - limpa lista 
<u>subList()</u> - parte da lista 
<u>stream()</u> - base para filter, map, sum, count

#### ________________kotlin

- <b>criar lista</b>

<spin style="color: orange;">val lista = mutableListOf(1, 7, 3, 7, 5, 1, 9, 7)</spin>

- <b>print lista</b>

<spin style="color: orange;">println(lista)</spin>

- <b>print indice 5 da lista</b>

<spin style="color: orange;">println(lista[5])</spin>

- <b>adicionar no início lista</b>

<spin style="color: orange;">lista.add(0, 0)</spin>

- <b>adicionar no final lista</b>

<spin style="color: orange;">lista.add(10)</spin>

- <b>adicionar no indice 4 lista</b>

<spin style="color: orange;">lista.add(4, 99)</spin>

- <b>deletar último lista</b>

<spin style="color: orange;">lista.removeAt(lista.size - 1)</spin>

- <b>deletar primeiro lista</b>

<spin style="color: orange;">lista.removeAt(0)</spin>

- <b>deletar indice 9 da lista</b>

<spin style="color: orange;">lista.removeAt(9)</spin>

- <b>ordenar a lista ordem crescente</b>

<spin style="color: orange;">lista.sort()</spin>

- <b>ordenar a lista ordem decrescente</b>

<spin style="color: orange;">lista.sortDescending()</spin>

- <b>reverter ordem da lista</b>

<spin style="color: orange;">lista.reverse()</spin>

- <b>tamanho da lista lista</b>

<spin style="color: orange;">println(lista.size)</spin>

- <b>achar quanto 1 tem lista</b>

<spin style="color: orange;">println(lista.count { it == 1 })</spin>

- <b>achar o 1° 7 na lista</b>

<spin style="color: orange;">println(lista.indexOf(7))</spin>

- <b>somar valores</b>

<spin style="color: orange;">val lista = listOf(1, 7, 3, 7, 5, 1, 9, 7)</spin>
<spin style="color: orange;">val soma = lista.sum()</spin>
<spin style="color: orange;">println(soma)</spin>

<u>ou</u>

<spin style="color: orange;">var soma = 0</spin>
<spin style="color: orange;">for (v in lista) { soma += v }</spin>
<spin style="color: orange;">println(soma)</spin>

- <b>somar valores com índice</b>

<spin style="color: orange;">val lista = listOf(1, 7, 3, 7)</spin>
<spin style="color: orange;">val soma = lista.mapIndexed { index, valor -></spin>
<spin style="color: orange;">....index * valor</spin>
<spin style="color: orange;">}.sum()</spin>
<spin style="color: orange;">println(soma)</spin>

- <b>ignorar valor repetido</b>

<spin style="color: orange;">val lista = listOf(1, 7, 3, 7, 5, 1, 9, 7)</spin>
<spin style="color: orange;">val semDuplicados = lista.distinct()</spin>
<spin style="color: orange;">println(semDuplicados)</spin>

<b>outros métodos</b>

<u>contains()</u> 
<u>isEmpty()</u> 
<u>map { }</u> 
<u>filter { }</u> 
<u>any { }</u> - algum ? 
<u>all { }</u> - todos ? 
<u>distinct()</u> - remove duplicados

#### ________________python

- <b>criar lista</b>

<spin style="color: #a100f2;">lista = [1, 7, 3, 7, 5, 1, 9, 7]</spin>


- <b>print lista</b>

<spin style="color: #a100f2;">print(lista)</spin>

- <b>print indice 5 da lista</b>

<spin style="color: #a100f2;">print(lista[5])</spin>

- <b>adicionar no início lista</b>

<spin style="color: #a100f2;">lista.insert(0, 0)</spin>

- <b>adicionar no final lista</b>

<spin style="color: #a100f2;">lista.append(10)</spin>

- <b>adicionar no indice 4 lista</b>

<spin style="color: #a100f2;">lista.insert(4, 99)</spin>

- <b>deletar último lista</b>

<spin style="color: #a100f2;">lista.pop()</spin>

- <b>deletar primeiro lista</b>

<spin style="color: #a100f2;">lista.pop(0)</spin>

- <b>deletar indice 9 da lista</b>

<spin style="color: #a100f2;">lista.pop(9)</spin>

- <b>ordenar a lista ordem crescente</b>

<spin style="color: #a100f2;">lista.sort()</spin>

- <b>ordenar a lista ordem decrescente</b>

<spin style="color: #a100f2;">lista.sort(reverse=True)</spin>

- <b>reverter ordem da lista</b>

<spin style="color: #a100f2;">lista.reverse()</spin>

- <b>tamanho da lista lista</b>

<spin style="color: #a100f2;">print(len(lista))</spin>

- <b>achar quanto 1 tem lista</b>

<spin style="color: #a100f2;">print(lista.count(1))</spin>

- <b>achar o 1° 7 na lista</b>

<spin style="color: #a100f2;">print(lista.index(7))</spin>

- <b>percorrer lista obtendo valor e inidice</b>

<spin style="color: #a100f2;">lista = ['a', 'b', 'c']</spin>
<spin style="color: #a100f2;">for indice, valor in enumerate(lista):</spin>
<spin style="color: #a100f2;">....print(indice, valor)</spin>

<u>ou</u>

<spin style="color: #a100f2;">i = 0</spin>
<spin style="color: #a100f2;">for valor in lista:</spin>
<spin style="color: #a100f2;">....print(i, valor)</spin>
<spin style="color: #a100f2;">....i += 1</spin>

- <b>somar valores</b>

<spin style="color: #a100f2;">lista = [1, 7, 3, 7, 5, 1, 9, 7]</spin>
<spin style="color: #a100f2;">soma = sum(lista)</spin>
<spin style="color: #a100f2;">print(soma)</spin>

<u>ou</u>

<spin style="color: #a100f2;">soma = 0</spin>
<spin style="color: #a100f2;">for v in lista:</spin>
<spin style="color: #a100f2;">... soma += v</spin>
<spin style="color: #a100f2;">print(soma)</spin>

- <b>somar valores com índice</b>

<spin style="color: #a100f2;">lista = [1, 7, 3, 7]</spin>
<spin style="color: #a100f2;">soma = 0</spin>
<spin style="color: #a100f2;">for indice, valor in enumerate(lista):</spin>
<spin style="color: #a100f2;">...soma += indice * valor</spin>
<spin style="color: #a100f2;">print(soma)</spin>

- <b>ignorar valor repetido</b>

<spin style="color: #a100f2;">lista = [1, 7, 3, 7, 5, 1, 9, 7]</spin>
<spin style="color: #a100f2;">sem_duplicados = list(set(lista))</spin>
<spin style="color: #a100f2;">print(sem_duplicados)</spin>

<b>outros métodos</b>

<u>in</u> - existe valor 
<u>any()</u> 
<u>all()</u> 
<u>map()</u> - transformar
<u>filter()</u> - selecionar
<u>set()</u> - remove duplicados 
<u>reduce/sum</u> = acumular