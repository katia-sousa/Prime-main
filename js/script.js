

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item-carrossel");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const section = document.getElementById('quem-somos');
  let triggerHeight = 250; // Altura em pixels a partir do topo da página para acionar a animação

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > triggerHeight) {
      section.classList.add('scroll-trigger');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  function updateTriggerHeight() {
    if (window.innerWidth <= 768) {
      triggerHeight = 100; // Altura de acionamento menor para dispositivos móveis
    } else {
      triggerHeight = 250; // Altura de acionamento padrão para telas maiores
    }

    handleScroll(); // Chama a função para verificar a posição imediatamente após a atualização da altura
  }

  // Adiciona os ouvintes de evento
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateTriggerHeight);

  // Chama a função inicialmente para verificar a posição no carregamento da página
  updateTriggerHeight();
});

function processarCEP(input) {
  let cep = input.value.replace(/\D/g, '');
  input.value = cep; // Atualiza o campo CEP com apenas números

  if (cep.length === 8) {
    buscarEndereco(cep);
  }
}

function buscarEndereco(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado. Por favor, insira o endereço manualmente.");
        return;
      }

      document.getElementById("logradouro").value = data.logradouro || "";
      document.getElementById("bairro").value = data.bairro || "";
      document.getElementById("localidade").value = data.localidade || "";
      document.getElementById("uf").value = data.uf || "";
    })
    .catch(error => console.error("Erro ao buscar o endereço:", error));
}

function buscarCEP() {
  const logradouro = document.getElementById("logradouro").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("localidade").value;
  const uf = document.getElementById("uf").value;

  if (logradouro && cidade && uf) {
    const url = `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          alert("Endereço não encontrado. Por favor, revise os dados.");
          return;
        }

        const resultado = data.find(endereco => endereco.bairro === bairro) || data[0];
        document.getElementById("cep").value = resultado.cep || "";
      })
      .catch(error => console.error("Erro ao buscar o CEP:", error));
  }
}

function formatarValor(input) {
  let valor = input.value.replace(/[^\d]/g, '');
  valor = (parseFloat(valor) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  input.value = valor;
}

function validarTelefone(input) {
  const telefone = input.value.replace(/\D/g, '');

  if (!/^\d{10,11}$/.test(telefone)) {
    alert("Telefone inválido. Por favor, insira o número com o DDD.");
    input.focus();
    input.value = "";
  }
}

function validarEmail(input) {
  const email = input.value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    alert("E-mail inválido. Por favor, insira um e-mail válido.");
    input.focus();
    input.value = "";
  }
  // Função para alternar o menu
function toggleMenu() {
  const menu = document.querySelector('.list-items');
  menu.classList.toggle('show'); // Alterna a classe que exibe/oculta o menu
}
}


