const botaoMercadoAcoes = document.getElementById("button_mercado_acoes");
const botaoSatisfacaoCliente = document.getElementById("button_satisfacao_cliente");
const botaoPerformanceFinanceira = document.getElementById("button_performance_financeira");

const secaoMercadoDeAcoes = document.getElementById("mercado_de_acoes");
const secaoSatisfacaoCliente = document.getElementById("satisfacao_e_cliente");
const secaoPerformanceFinanceira = document.getElementById("performance_financeira");

let botaoSelecionado = document.getElementById("button_mercado_acoes");
let secaoAtual = document.getElementById("mercado_de_acoes");

botaoMercadoAcoes.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;

    secaoMercadoDeAcoes.style.position = 'static';
    secaoMercadoDeAcoes.style.zIndex = 1;
    secaoAtual = secaoMercadoDeAcoes;

    botaoSelecionado.classList.add('button_disable');
    botaoMercadoAcoes.classList.remove('button_disable');
    botaoSelecionado = botaoMercadoAcoes;
});

botaoSatisfacaoCliente.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;
    
    secaoSatisfacaoCliente.style.position = 'static';
    secaoSatisfacaoCliente.style.zIndex = 1;
    secaoAtual = secaoSatisfacaoCliente;

    botaoSelecionado.classList.add('button_disable');
    botaoSatisfacaoCliente.classList.remove('button_disable');
    botaoSelecionado = botaoSatisfacaoCliente;
});

botaoPerformanceFinanceira.addEventListener('click', function() {
    secaoAtual.style.position = 'fixed';
    secaoAtual.style.zIndex = -1;

    secaoPerformanceFinanceira.style.position = 'static';
    secaoPerformanceFinanceira.style.zIndex = 1;
    secaoAtual = secaoPerformanceFinanceira;

    botaoSelecionado.classList.add('button_disable');
    botaoPerformanceFinanceira.classList.remove('button_disable');
    botaoSelecionado = botaoPerformanceFinanceira;
});