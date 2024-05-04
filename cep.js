const read = require('readline-sync')

console.clear()
console.log("Node API CEP")
let cep = read.question('Digite o CEP :')
let urlAPI = "https://viacep.com.br/ws/"+ cep +"/json/"
console.log(urlAPI)
fetch(urlAPI)
.then((response) =>  {
      return response.json()
})
.then((dados) => {
    console.log(dados.logradouro)
    console.log(dados.complemento)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.uf)
})
.catch((error) => {
    console.log("Erro ao obter endereco")
})

