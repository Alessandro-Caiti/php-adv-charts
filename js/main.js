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
        url: 'server_database.php',
        method: 'GET',
        success: function (data) {

            var rawData = data;

            var lineData = getLineData(rawData);
            var pieData = getPieData(rawData);

            makeLineChart(lineData.data, months);
            makePieChart(pieData.data, pieData.labels);
        },
        error: function (error) {
            alert('Errore');
        }
    });


    function getLineData(data) {
        for (var key in data) {
            if (data[key]['type'] == 'line') {
                var lineData = data[key];
            }
        }
        return lineData;
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

    function makePieChart(data, labels) {
        var ctx = $('#pie-chart');
        var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            datasets: [{
                data: data,
                backgroundColor: [
                    'powderblue',
                    'lightcoral',
                    'limegreen',
                    'darkviolet'
                ]
            }],

            labels: labels
        },

        options: {}
    });
    }

});
