

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
const nome = document.getElementById('nome')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
      cep: cep.value,
      logradouro: logradouro.value,
      numero: numero.value,
      uf: uf.value,
      bairro: bairro.value,
      localidade: localidade.value,
      valorContaLuz: valorContaLuz.value,
      email: email.value,
      telefone: telefone.value,
      nome: nome.value
    };
  
    try {
      // Salvar
      const formId = await form(subscription);
  
      // Limpar os campos do formulário
      cep.value = '';
      logradouro.value = '';
      numero.value = '';
      uf.value = '';
      bairro.value = '';
      localidade.value = '';
      valorContaLuz.value = '';
      email.value = '';
      telefone.value = '';
      nome: nome.value = '';

        //alert
      alert('Dados salvos com sucesso!');
      
      // Exibir mensagem de sucesso
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
  
      // Ocultar a mensagem após alguns segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000); // Oculta após 3 segundos
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      alert('Ocorreu um erro ao salvar os dados. Tente novamente.');
    }
  });
  
//debbuger

