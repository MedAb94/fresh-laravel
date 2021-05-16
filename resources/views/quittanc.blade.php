<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<style>
    .float-right{
        float: right;
    }
    .primary {
        color: rgb(6, 77, 143);
    }

    .secondary {
        color: #666;
    }

    .info {
        color: rgb(96, 127, 156);
    }

    .uppercase {
        text-transform: uppercase;
    }

    .small {
        font-size: 12px;
        text-transform: uppercase;
    }

    .center {
        text-align: center;
    }

    .quittance {
        margin: 40px;
        border: 1px solid #f5f3f3;
        border-radius: 10px;
        padding: 30px;
    }


    table {
        width: 100%;
    }

    .card th,
    .card td {
        padding: 16px;
    }

    .card thead tr {
        border-bottom: 1px solid gainsboro;
    }

    .card tr:nth-child(even) {
        background-color: #f2f2f2;
    }

</style>

<body>
    <div class="quittance">

        <div class="row">
            <div class="col">
                <img src="logo.png" width="100" height="100px" />
            </div>
            <div class="col">
                <h2 class="uppercase center secondary">quittance</h2>
                <h3 class="uppercase center primary">quittance #sdf9823kd</h3>
            </div>
        </div>




        <div class="card">
            <div class="col" style="width: 100%;" >
                <table>
                        <tr class="uppercase secondary">
                            <td style="text-align: left;">numero de chassis</td>
                            <td style="text-align: right;">impot</td>
                        </tr>

                        <tr>
                            <td>4870987707777</td>
                            <td style="text-align: right;">30.000 CFA</td>
                        </tr>
                        <tr>
                            <td>4870987707777</td>
                            <td style="text-align: right;">30.000 CFA</td>
                        </tr>
                        <tr class="total" style="text-align: right; font-weight: bolder; background-color: #fff; font-size: 20px;">
                            <td colspan="2">34.300 CFA</td>
                        </tr>

                </table>
            </div>
        </div>
    </div>
</body>

</html>
