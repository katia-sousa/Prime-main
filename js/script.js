
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
/*document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var text = document.getElementById("myText");

  // Defina o tempo em que deseja alterar a cor (em segundos)
  var tempoParaMudarCor = 4; // por exemplo, 5 segundos

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= tempoParaMudarCor) {
      text.style.color = " #676c72"; // mude para a cor desejada
   // }else{text.style.color = "white";}
  });
});
*/
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

function buscarEndereco(cep) {
  // Remover caracteres não numéricos do CEP
  cep = cep.replace(/\D/g, '');

  // Verificar se o CEP tem 8 dígitos
 // if (cep.length !== 8) {
   // alert("CEP inválido. Por favor, insira um CEP válido com 8 dígitos.");
   // return;
  //}

  // Construir a URL da API do Via CEP
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Fazer uma requisição HTTP GET para a API do Via CEP
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verificar se a resposta da API contém um erro
      if (data.erro) {
        alert("CEP não encontrado. Por favor, insira um CEP válido.");
        return;
      }

      // Preencher os campos de rua, bairro, cidade e estado
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("localidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    })
    .catch(error => console.error("Erro ao buscar o endereço:", error));
}


function formatarValor(input) {
  // Remove caracteres não numéricos
  let valor = input.value.replace(/[^\d]/g, '');

  // Adiciona pontos e vírgulas no valor
  valor = (parseFloat(valor) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // Atualiza o valor no campo
  input.value = valor;
}
// Função para alternar o menu
function toggleMenu() {
  const menu = document.querySelector('.list-items');
  menu.classList.toggle('show'); // Alterna a classe que exibe/oculta o menu
}
// Escutando o evento de envio do formulário
document.getElementById("myForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
      cep: document.getElementById("cep").value,
      logradouro: document.getElementById("logradouro").value,
      numero: document.getElementById("numero").value,
      uf: document.getElementById("uf").value,
      bairro: document.getElementById("bairro").value,
      localidade: document.getElementById("localidade").value,
      valorContaLuz: document.getElementById("valorContaLuz").value,
      email: document.getElementById("email").value,
  };

  try {
      // Adicionando os dados na coleção "orcamentos"
      await addDoc(collection(db, "orcamentos"), formData);
      alert("Informações salvas com sucesso!");
  } catch (error) {
      console.error("Erro ao salvar informações:", error);
      alert("Erro ao salvar as informações. Verifique o console para mais detalhes.");
  }
});
