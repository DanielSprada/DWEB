var n1 = parseInt(prompt("Digite o primeiro número: "))
var n2 = parseInt(prompt("Digite o segundo número: "))

if (n1 >= n2) {
    var sub = n1 - n2
} else {
    var sub = n2 - n1
}

alert("O resultado da subtração é igual a: "+sub)