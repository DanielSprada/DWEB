var n1, n2, soma, frase

/*Exemplo de comentário em JS*/

n1 = 8
n2 = 20
soma = n1 + n2
frase = "O resultado da soma é: "

alert("O valor de "+n1+" + "+n2+" é igual a = "+(n1+n2))

alert(frase+soma)

var a = prompt("Digite o primeiro valor: ")
var b = prompt("Digite o segundo valor: ")
var op = prompt("Qual operação deseja realizar (1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão):")

switch (op) {
    case '1':
        var res = a + b
        break
    case '2':
        var res = a - b
        break
    case '3':
        var res = a * b
        break
    case '4':
        var res = a / b
        break
}

alert("O resultado é igual a: "+res)