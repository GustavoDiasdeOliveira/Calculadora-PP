document.getElementById('calculateBtn').addEventListener('click', () => {
  // Obter os dados do formulário
  let value = parseFloat(document.getElementById('value').value.replace(',', '.'));
  const quantity = parseInt(document.getElementById('quantity').value);
  const unit = document.getElementById('unit').value;
  const resultText = document.getElementById('resultText');

  // Função para formatar o valor com vírgula
  const formatValue = (num) => num.toFixed(1).replace('.', ',');

  // Verifica se a quantidade está correta
  if (!isNaN(quantity) && quantity > 0 && isNaN(value)) {
    // Apenas a quantidade foi fornecida
    const minValue = Math.round(quantity * 0.7); // 30% a menos (arredondado para o inteiro mais próximo)
    const maxValue = Math.round(quantity * 1.3); // 30% a mais (arredondado para o inteiro mais próximo)

    resultText.innerHTML = `
      <strong>Mínimo Qtd (30% a menos):</strong> ${formatValue(minValue)} UN<br>
      <strong>Máximo Qtd (30% a mais):</strong> ${formatValue(maxValue)} UN
    `;
    return;
  }

  // Verifica se os dados estão corretos
  if (isNaN(value) || value <= 0 || isNaN(quantity) || quantity <= 0) {
    resultText.textContent = 'Sem resultados';
    return;
  }

  // Calcular o valor total e os descontos
  const totalValue = value * quantity;
  const minDiscount = totalValue * 0.7; // 30% a menos
  const maxDiscount = totalValue * 1.3; // 30% a mais

  // Mostrar os resultados
  resultText.innerHTML = `
    <strong>Mínimo (30% a menos):</strong> ${formatValue(minDiscount)} ${unit}<br>
    <strong>Máximo (30% a mais):</strong> ${formatValue(maxDiscount)} ${unit}
  `;
});
