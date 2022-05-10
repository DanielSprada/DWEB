var n1, n2

n1 = parseInt(prompt("Digite o primeiro número: "))
n2 = parseInt(prompt("Digite o segundo número: "))

if (n1 > n2) {
    alert("O número "+n1+" é maior que "+n2)
} else if (n2 > n1) {
    alert("O número "+n2+" é maior que "+n1)
} else {
    alert("Os números "+n1+" e "+n2+" são iguais.")
}