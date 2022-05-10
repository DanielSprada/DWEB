var ano = prompt("Digite o ano de seu nascimento: ")
var apto = confirm("Clique em OK se foi aprovado no exame de direção.")

idade = 2022 - parseInt(ano)

switch (apto) {
    case true:
        if(idade >= 18) {
            alert("Você está apto a tirar a Carteira de Habilitação.")
        } else {
            alert("Você está inapto a tirar a CNH por não ter 18 anos.")
        }
        break
    case false:
        if(idade >= 18) {
            alert("Você está inapto a tirar a CNH por não ter passado no exame de direção.")
        } else {
            alert("Você está inapto a tirar a CNH por não ter 18 anos nem ter passado no exame de direção.")
        }
        break
}