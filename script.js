// script.js
document.getElementById('calculateBtn').addEventListener('click', () => {
  // Obter os dados do formulário
  let value = parseFloat(document.getElementById('value').value.replace(',', '.'));
  const quantity = parseInt(document.getElementById('quantity').value);
  const unit = document.getElementById('unit').value;
  const resultText = document.getElementById('resultText');

  // Verificar se os dados estão corretos
  if (isNaN(value) || value <= 0 || isNaN(quantity) || quantity <= 0) {
      resultText.textContent = 'Sem resultados';
      return;
  }

  // Calcular o valor total e o desconto
  const totalValue = value * quantity;
  const minDiscount = totalValue * 0.7; // 30% a menos
  const maxDiscount = totalValue * 1.3; // 30% a mais

  // Função para formatar o valor com vírgula
  const formatValue = (num) => num.toFixed(1).replace('.', ',');

  // Mostrar os resultados
  resultText.innerHTML = `
      <strong>Mínimo com (30% a menos):</strong> ${formatValue(minDiscount)} ${unit}<br>
      <strong>Máximo com (30% a mais):</strong> ${formatValue(maxDiscount)} ${unit}
  `;
});
