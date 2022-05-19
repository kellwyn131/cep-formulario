const pegaCEP = async() => {
    const cep = document.getElementById("ICEP").value
    const link = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(link)
    const endereco = await dados.json()
    if(endereco.hasOwnProperty('erro')){
        document.getElementById('CepT').textContent = 'CEP INVÁLIDO'
        document.getElementById('ICEP').classList.add("error")
        document.getElementById("Rua").classList.add("invisivel")
        document.getElementById("Bairro").classList.add("invisivel")
        document.getElementById("Cidade").classList.add("invisivel")
        document.getElementById("UF").classList.add("invisivel")
        document.getElementById("IBGE").classList.add("invisivel")
        document.getElementById("DDD").classList.add("invisivel")
        document.getElementById("Rua").classList.add("invisivel")
        document.getElementById("Bairro").classList.add("invisivel")
        document.getElementById("Cidade").classList.add("invisivel")
        document.getElementById("UF").classList.add("invisivel")
        document.getElementById("IBGE").classList.add("invisivel")
        document.getElementById("DDD").classList.add("invisivel")
        document.getElementById("RuaT").classList.add("invisivel")
        document.getElementById("BairroT").classList.add("invisivel")
        document.getElementById("CidadeT").classList.add("invisivel")
        document.getElementById("UFT").classList.add("invisivel")
        document.getElementById("IBGET").classList.add("invisivel")
        document.getElementById("DDDT").classList.add("invisivel")
    }
    else{
    insereDados(endereco)}
}
erro = () => {}

insereDados = (endereco) => {
    document.getElementById('CepT').textContent = 'CEP'
    document.getElementById('ICEP').classList.remove("error")
    document.getElementById("Rua").value = endereco.logradouro
    document.getElementById("Bairro").value = endereco.bairro
    document.getElementById("Cidade").value = endereco.localidade
    document.getElementById("UF").value = endereco.uf
    document.getElementById("IBGE").value = endereco.ibge
    document.getElementById("DDD").value = endereco.ddd
    document.getElementById("ICEP").classList.add("sucess")
    document.getElementById("Rua").classList.add("sucess")
    document.getElementById("Bairro").classList.add("sucess")
    document.getElementById("Cidade").classList.add("sucess")
    document.getElementById("UF").classList.add("sucess")
    document.getElementById("IBGE").classList.add("sucess")
    document.getElementById("DDD").classList.add("sucess")
    document.getElementById("Rua").classList.remove("invisivel")
    document.getElementById("Bairro").classList.remove("invisivel")
    document.getElementById("Cidade").classList.remove("invisivel")
    document.getElementById("UF").classList.remove("invisivel")
    document.getElementById("IBGE").classList.remove("invisivel")
    document.getElementById("DDD").classList.remove("invisivel")
    document.getElementById("Rua").classList.remove("invisivel")
    document.getElementById("Bairro").classList.remove("invisivel")
    document.getElementById("Cidade").classList.remove("invisivel")
    document.getElementById("UF").classList.remove("invisivel")
    document.getElementById("IBGE").classList.remove("invisivel")
    document.getElementById("DDD").classList.remove("invisivel")
    document.getElementById("RuaT").classList.remove("invisivel")
    document.getElementById("BairroT").classList.remove("invisivel")
    document.getElementById("CidadeT").classList.remove("invisivel")
    document.getElementById("UFT").classList.remove("invisivel")
    document.getElementById("IBGET").classList.remove("invisivel")
    document.getElementById("DDDT").classList.remove("invisivel")
}

document.getElementById("ICEP").addEventListener('focusout',pegaCEP)