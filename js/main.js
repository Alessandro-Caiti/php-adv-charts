$(document).ready(function() {

    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    // Chiamata AJAX prima milestone

    // $.ajax( {
    //     url: 'server.php',
    //     method: 'GET',
    //     success: function (data) {
    //         var data = data;
    //         makeLineChart(data, months);
    //     },
    //     error: function (error) {
    //         alert('Errore');
    //     }
    // });

    //Chiamata AJAX seconda milestone

    $.ajax( {
        url: 'server3.php',
        method: 'GET',
        success: function (data) {

            var rawData = data;

            var lineData = getLineData(rawData);
            var pieData = getPieData(rawData);
            var efficiencyData = getEfficiencyData(rawData);

            makeLineChart(lineData.data, months);
            makePieChart(pieData.data, pieData.labels);
            makeEfficiencyChart(efficiencyData.data.Team1, efficiencyData.data.Team2, efficiencyData.data.Team3, months);
        },
        error: function (error) {
            alert('Errore');
        }
    });


    function getLineData(data) {
        for (var key in data) {
            if (key == 'fatturato') {
                if (data[key]['type'] == 'line') {
                    var lineData = data[key];
                }
            }
        }
        return lineData;
    }

    function getEfficiencyData(data) {
        for (var key in data) {
            if (key == 'team_efficiency') {
                if (data[key]['type'] == 'line') {
                    var efficiencyData = data[key];
                }
            }
        }
        return efficiencyData;
    }

    function getPieData(data) {
        for (var key in data) {
            if (data[key]['type'] == 'pie') {
                var rawPieData = data[key];
            }
        }
        var pieData = rawPieData.data;

        var data = [];
        var labels = [];

        for (var key in pieData) {
            data.push(pieData[key])
            labels.push(key)
        }
        return {
            data: data,
            labels: labels
        }
    }

    function makeLineChart(data, labels) {
        var ctx = $('#line-chart');
        var chart = new Chart(ctx, {

        type: 'line',

        data: {
            labels: labels,
            datasets: [{
                label: 'Vendite mensili',
                backgroundColor: 'darkblue',
                borderColor: 'darkblue',
                data: data
            }]
        },

        options: {}
    });
    }

    function makeEfficiencyChart(data1, data2, data3, labels) {
        var ctx = $('#efficiency-chart');
        var chart = new Chart(ctx, {

        type: 'line',

        data: {
            labels: labels,
            datasets: [{
                    label: 'Team 1',
                    backgroundColor: 'rgba(232,232,232,0.3)',
                    borderColor: 'darkblue',
                    data: data1
                },
                {
                    label: 'Team 2',
                    backgroundColor: 'rgba(232,232,232,0.5)',
                    borderColor: 'powderblue',
                    data: data2
                },
                {
                    label: 'Team 3',
                    backgroundColor: 'rgba(232,232,232,0.9)',
                    borderColor: 'blue',
                    data: data3
                }
            ]
        },

        options: {}
    });
    }

    function makePieChart(data, labels) {
        var ctx = $('#pie-chart');
        var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            datasets: [{
                data: data,
                backgroundColor: [
                    'powderblue',
                    'darkblue',
                    'blue',
                    'aqua'
                ]
            }],

            labels: labels
        },

        options: {}
    });
    }

});
