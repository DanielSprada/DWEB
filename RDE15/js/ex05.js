var a = parseInt(prompt("Digite o primeiro valor: "))
var b = parseInt(prompt("Digite o segundo valor: "))
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

alert("O resultado da operação é igual a: "+res)