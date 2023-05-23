function calcular() {
    var salario = document.getElementById('sal').value;
    var horas = document.getElementById('ho').value;
    var valorhora = salario / horas;

    var valorporcentagem = document.getElementById('vp').value;
    var porcentagem = valorporcentagem.replace('%', '') / 100;

    var hetrabalhadas = document.getElementById('het').value;
    var calculo = (valorhora * porcentagem) + valorhora;
    var hefaturada = (hetrabalhadas * calculo);

    if (!salario || !horas || !valorporcentagem || !hetrabalhadas) {
        alert("Por favor, preencha todas as informações antes de calcular.");
        return;
    }
    var respostaHTML = `Este é o valor da sua hora comum: ${valorhora.toFixed(2)} reais. <p>`;
    respostaHTML += `Deverá receber: ${hefaturada.toFixed(2)} reais pelas horas extras trabalhadas.`;

    var divResultados = document.getElementsByClassName('resultados')[0];
    divResultados.innerHTML = respostaHTML;

    document.getElementById('vh').value = valorhora.toFixed(2);
    document.getElementById('hef').value = hefaturada.toFixed(2);
}

function addPercentSymbol() {
    var vp = document.getElementById('vp');
    vp.value = vp.value.replace('%', '') + '%';
}

function limpar() {
    document.getElementById('sal').value = "";
    document.getElementById('ho').value = "";
    document.getElementById('vp').value = "";
    document.getElementById('het').value = "";
    document.getElementById('vh').value = "";
    document.getElementById('hef').value = "";
    document.getElementById('hef_resultado').textContent = "";
}
