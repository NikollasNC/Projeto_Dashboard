const botaoMercadoAcoes = document.getElementById("button_mercado_acoes");
const botaoSatisfacaoCliente = document.getElementById("button_satisfacao_cliente");
const botaoPerformanceFinanceira = document.getElementById("button_performance_financeira");

let secaoAtual = document.getElementById("mercado_de_acoes");

const secaoMercadoDeAcoes = document.getElementById("mercado_de_acoes");
const secaoSatisfacaoCliente = document.getElementById("satisfacao_e_cliente");
const secaoPerformanceFinanceira = document.getElementById("performance_financeira");

botaoMercadoAcoes.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;

    secaoMercadoDeAcoes.style.position = 'static';
    secaoMercadoDeAcoes.style.zIndex = 1;
    
    secaoAtual = secaoMercadoDeAcoes;
});

botaoSatisfacaoCliente.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;
    
    secaoSatisfacaoCliente.style.position = 'static';
    secaoSatisfacaoCliente.style.zIndex = 1;

    secaoAtual = secaoSatisfacaoCliente;
});

botaoPerformanceFinanceira.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;

    secaoPerformanceFinanceira.style.position = 'static';
    secaoPerformanceFinanceira.style.zIndex = 1;

    secaoAtual = secaoPerformanceFinanceira;
});