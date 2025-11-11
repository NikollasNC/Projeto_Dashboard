google.charts.load('current', { 'packages': ['gauge'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', { 'packages':['geochart'],});
google.charts.setOnLoadCallback(drawMedidor);
google.charts.setOnLoadCallback(drawRetencao);
google.charts.setOnLoadCallback(drawRegionsMap);

function drawMedidor() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Satisfação', 83]
    ]);

    var options = {
        width: 220, height: 220,
        greenFrom: 80, greenTo: 100,
        yellowFrom: 59, yellowTo: 80,
        minorTicks: 2,
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.Gauge(document.getElementById('medidor_satisfacao'));

    chart.draw(data, options);
}

function drawRetencao() {
    var data = google.visualization.arrayToDataTable([
        ['Tempo(meses)', 'Receita'],
        ['10', 70000],
        ['20', 80000],
        ['30', 100000],
        ['40', 200000],
        ['50', 500000],
        ['60', 1000000]
    ]);

    var options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'transparent',
        colors: ['#49a45a']
    };

    var chart = new google.visualization.LineChart(document.getElementById('grafico_retencao'));

    chart.draw(data, options);
}

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

function graficoColuna() {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Topping');
    data.addColumn('number', 'vol');
    data.addRows([
        ['1', 10], ['2', 20], ['3', 30], ['4', 40], ['5', 50]]);

    var options = {
        backgroundColor: 'transparent',
        colors: ['#49a45a']
    }

    var chart = new google.visualization.ColumnChart(document.getElementById('grafico_despesasOperacionais'));
    chart.draw(data, options);
}
