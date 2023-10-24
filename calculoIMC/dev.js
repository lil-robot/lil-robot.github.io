function calcular(){
    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value
    const nome = document.querySelector("#nome").value
    const imc = peso / (altura * altura)

    console.log(peso, nome, altura);

    const textarea = document.querySelector("#text")
    textarea.innerHTML = "Olá, " + nome + " seu IMC é de " + imc
}
