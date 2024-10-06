function calculateFairPrice() {
    // Captura os valores inseridos pelo usuário e substitui vírgulas por pontos
    let currentPrice = parseFloat(document.getElementById('currentPrice').value.replace(',', '.'));
    let currentDY = parseFloat(document.getElementById('currentDY').value.replace(',', '.')) / 100;
    let targetDY = parseFloat(document.getElementById('targetDY').value.replace(',', '.')) / 100;

    // Valida os valores
    if (isNaN(currentPrice) || isNaN(currentDY) || isNaN(targetDY)) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o preço justo
    let fairPrice = currentPrice * (currentDY / targetDY);

    // Exibe o resultado com vírgula ao invés de ponto
    document.getElementById('result').innerText = `O preço justo da ação é: R$ ${fairPrice.toFixed(2).replace('.', ',')}`;
}

function resetCalculator() {
    // Limpa os campos de input e o resultado
    document.getElementById('currentPrice').value = '';
    document.getElementById('currentDY').value = '';
    document.getElementById('targetDY').value = '';
    document.getElementById('result').innerText = '';
}