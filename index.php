<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PhP Charts</title>
        <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <?php

            include 'level.php'

         ?>

        <div class="container">
            <?php if ($access_level == 'guest') { ?>
                <?php
                    echo   '<div class="chart-container">
                                <canvas id="line-chart"></canvas>
                            </div>';
                ?>
            <?php } elseif ($access_level == 'employee') { ?>
                <?php echo '<div class="chart-container">
                                <canvas id="line-chart"></canvas>
                            </div>
                            <div class="chart-container">
                                <canvas id="pie-chart"></canvas>
                            </div>';
                ?>
            <?php } elseif ($access_level == 'clevel') { ?>
                <?php echo '<div class="chart-container">
                                <canvas id="line-chart"></canvas>
                            </div>
                            <div class="chart-container">
                                <canvas id="pie-chart"></canvas>
                            </div>
                            <div class="chart-container">
                                <canvas id="efficiency-chart"></canvas>
                            </div>';
                ?>
            <?php } else {
                echo "<h1>Livello di accesso non riconosciuto.<br>Inserisci un livello di accesso corretto.</h1>";
            } ?>
            <!-- <div class="chart-container">
                <canvas id="line-chart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="pie-chart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="efficiency-chart"></canvas>
            </div> -->
        </div>


        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
