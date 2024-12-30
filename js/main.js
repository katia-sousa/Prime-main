

import { form } from './form.js'

const cep = document.getElementById('cep')
const logradouro = document.getElementById('logradouro')
const numero = document.getElementById('numero')
const uf = document.getElementById('uf')
const bairro = document.getElementById('bairro')
const localidade = document.getElementById('localidade')
const valorContaLuz = document.getElementById('valorContaLuz')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () =>{
  const subscription = {
    cep: cep.value,
    logradouro: logradouro.value,
    numero: numero.value,
    uf: uf.value,
    bairro: bairro.value,
    localidade: localidade.value,
    valorContaLuz: valorContaLuz.value,
    email: email.value,
    telefone: telefone.value
  }
  //salvar
  const formId = await form(subscription)
  console.log('cadastrado com sucesso: ${subscription')

    cep.value = '',
    logradouro.value = '',
    numero.value = '',
    uf.value = '',
    bairro.value = '',
    localidade.value = '',
    valorContaLuz.value = '',
    email.value = '',
    telefone.value = ''
});
//debbuger

