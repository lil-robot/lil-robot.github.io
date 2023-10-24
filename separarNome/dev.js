function SubstituirNomes(){
    const NomeCompleto = document.querySelector('#nome').value
    const PrimeiroNome = document.querySelector('#fnome')
    const SobreNome = document.querySelector('#sobrenome')

    const Pnome = NomeCompleto.split(" ")[0]
    const Snome = NomeCompleto.split(" ")[1]
    PrimeiroNome.value = Pnome
    SobreNome.value=Snome
}