$(document).ready(function() {

    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    $.ajax( {
        url: 'server.php',
        method: 'GET',
        success: function (data) {
            var data = data;
            makeLineChart(data, months);
        },
        error: function (error) {
            alert('Errore');
        }
    });


function makeLineChart(data, labels) {
    var ctx = $('#line-chart');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data
        }]
    },

    // Configuration options go here
    options: {}
});
}


});
