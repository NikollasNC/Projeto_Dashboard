google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficos);

async function desenharGraficos() {
    try {
        //const obj = await getApi('https://financialmodelingprep.com/stable/income-statement?symbol=AAPL&apikey=GrHZnBw9ov7ab0dirYxEq3BzA9hvgO5r');
        // let array = Object.values(obj);

        // let receita = array.map(obj => {
        //     return [
        //         obj.date,
        //         obj.revenue
        //     ];
        // });

        // let lucroLiquido = array.map(obj => {
        //     return [
        //         obj.date,
        //         obj.bottomLineNetIncome
        //     ];
        // });

        // let despesasOperacionais = array.map(obj => {
        //     return [
        //         obj.date,
        //         obj.operatingExpenses
        //     ];
        // });

        const matriz = [['1', 10], ['2', 20], ['3', 30], ['4', 40], ['5', 50]]

        graficoColuna(matriz, "grafico_receita");
        graficoColuna(matriz, "grafico_lucroLiquido");
        graficoColuna(matriz, "grafico_despesasOperacionais");
    } catch (erro) {
        console.log(erro.message);
    }
}

function desenharGrafico() {
    graficoColuna("", "grafico_receita");
    graficoColuna("", "grafico_lucroLiquido");
    graficoColuna("", "grafico_despesasOperacionais");
}

function graficoColuna(matriz, id) {
    var data = google.visualization.arrayToDataTable([
        ["Ano", "Valor"]
    ].concat(matriz));

    var options = {
        legend: { position: "none" },
        backgroundColor: 'transparent',
        colors: ['#49a45a']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById(id));
    chart.draw(data, options);
}

async function getApi(url) {
    try {
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        return result.json();
    } catch (error) {
        console.log(error.message);
    }
}
