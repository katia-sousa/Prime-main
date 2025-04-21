function calcularSistema() {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const resultado = document.getElementById('resultadoSimulador');
  
    if (isNaN(valorConta) || valorConta <= 0) {
      resultado.textContent = 'Por favor, insira um valor válido para a conta de luz.';
      return;
    }
  
    // Estimativa baseada em média nacional: cada R$100 de conta precisa de cerca de 0.75kWp
    const fator = 0.75; // kWp por R$100
    const potenciaNecessaria = (valorConta / 100) * fator;
  
    // Estimativa de custo do sistema (média de R$5,5 por Wp)
    const precoPorWp = 5.5;
    const precoEstimado = potenciaNecessaria * 1000 * precoPorWp;
  
    resultado.innerHTML = `
      <strong>Sistema recomendado:</strong> ~${potenciaNecessaria.toFixed(2)} kWp<br>
      <strong>Estimativa de investimento:</strong> R$ ${precoEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    `;
  }
  