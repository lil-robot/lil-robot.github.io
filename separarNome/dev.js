function SubistituirNomes(){
    const inputNomeCompleto = document.querySelector('#nome').value
    const inputPrimeiroNome = document.querySelector('#fnome')
    const inputSobreNome = document.querySelector('#sobrenome')

    const Pnome = inputNomeCompleto.split(" ")[0]
    const Snome = inputNomeCompleto.split(" ")[1]
    inputPrimeiroNome.value = Pnome
    inputSobreNome.value = Snome
}
