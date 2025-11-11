google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', { 'packages': ['bar'] });

google.charts.setOnLoadCallback(test2());
google.charts.setOnLoadCallback(test());

async function test() {
    try {
        const array = await getApi('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo');

        //console.log(array["Global Quote"]);

        document.getElementById("valor_acao").innerHTML += array["Global Quote"]["05. price"];
        document.getElementById("valor_alta").innerHTML += array["Global Quote"]["03. high"];
        document.getElementById("valor_baixa").innerHTML += array["Global Quote"]["04. low"];
        document.getElementById("valor_abertura").innerHTML += array["Global Quote"]["02. open"];

        document.getElementById("quantidade_negociacao").innerHTML += array["Global Quote"]["06. volume"];
        document.getElementById("variacao").innerHTML = array["Global Quote"]["10. change percent"];
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

async function test2() {
    try {
        const obj = await getApi('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo');
        const array = Object.values(obj["Monthly Time Series"]);

        const variacao = array.map(objetos => {
            return [
                "",
                parseInt(objetos["4. close"])
            ];
        });

        const volume = array.map(objetos => {
            return [
                "",
                parseInt(objetos["5. volume"])
            ];
        });

        let hoje = new Date();
        for (let i = 0; i < variacao.length; i++) {
            variacao[i][0] = hoje.getFullYear().toString();
            volume[i][0] = hoje.getFullYear().toString();
            hoje.setMonth(hoje.getMonth() - 1);
        }

        graficoLinha(variacao.reverse());
        graficoColuna(volume.reverse());
    } catch (erro) {
        console.error("Erro:", erro);
    }
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

//graficos
function drawChart(matriz) {
    var data = google.visualization.arrayToDataTable([
        ['Ano', 'Vol']
    ].concat(matriz));

    var options = {
        chart: {
            backgroundColor: 'transparent',
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            color: '#e0440e'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, options);
}

function graficoColuna(matriz) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'vol');
    data.addRows(matriz);

    var options = {
        backgroundColor: 'transparent',
        colors: ['#49a45a']
    }

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function graficoLinha(matriz) {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Preço']].concat(matriz));

    var options = {
        backgroundColor: 'transparent',
        colors: ['#49a45a']
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_acoes'));

    chart.draw(data, options);
}

//google.charts.setOnLoadCallback(consumirApi());
//google.charts.setOnLoadCallback(initialize);
// function initialize() {
//     var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1RPLqXRUsIu1RTwcs-cackBlg-tl1ukVvtO5-xFoDSrw/gviz/tq?usp=sharing&range=A1:B4');
//     query.setQuery('select A, sum(B) group by A');
//     query.send(handleQueryResponse);
// }

// function handleQueryResponse(response) {
//     if (response.isError()) {
//         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//         return;
//     }

//     var data = response.getDataTable();
//     var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

//     chart.draw(data, { width: 500, height: 500, is3D: false });
// }

// function drawChart(matriz) {

//     // Create the data table.
//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Topping');
//     data.addColumn('number', 'Slices');
//     data.addRows(matriz);

//     // Set chart options
//     var options = {
//         'title': 'How Much Pizza I Ate Last Night',
//         'width': 1500,
//         'height': 500
//     };

//     // Instantiate and draw our chart, passing in some options.
//     var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));
//     chart.draw(data, options);
// }