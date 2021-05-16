<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title></title>
{{--        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">--}}
{{--        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">--}}
{{--        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">--}}
    <style>
        body {
            font-family: Nunito;
        }

        .primary {
            color: rgb(6, 77, 143);
        }

        .secondary {
            color: #445468;
        }

        .info {
            color: rgb(96, 127, 156);
            font-weight: 700;

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

        .facture {
            /*margin: 10px;*/
            border: 1px solid #f5f3f3;
            border-radius: 10px;
            /*box-shadow: 0px 0px 2px rgb(226, 216, 216);*/

        }


        .table {
            width: 100%;
        }


        .table th,
        td {
            padding: 16px;
        }

        /*.table tbody tr{*/
        /*    border-bottom: 1px solid #E0E0E0;*/
        /*}*/


    </style>
</head>

<body>
<div class="facture">
    <div class="card">
        <table width="100%">
            <tr>
                <th></th>
                <th></th>
            </tr>
            <tbody>
            <tr>
                <td><img src="logo.png" width="100" height="100" style="margin-left: 20px; margin-top: 30px;"
                         alt="logo"/></td>
                <td style="text-align: right">
                    <img src="data:image/png;base64,
          {!! base64_encode(QrCode::format('png')->size(100)->generate(env('APP_URL').'/app/payment/facture/'.$facture->code)) !!}"
                         alt="qr">
                </td>
            </tr>
            </tbody>
        </table>

        <h4 class="uppercase center secondary">facture</h4>
        <h5 class="uppercase center primary">facture num: {{$facture->code}}</h5>
        <table style="width: 100%">
            <tr>
                <td>
                    <p class="small uppercase primary">importe par</p>
                    <p class="uppercase" style="line-height: 25px;">
                        {{$facture->declaration->first()->vehicule->user->nomEntreprise}} <br>
                        <span class="info">
                                 {{$facture->declaration->first()->vehicule->user->last_name}} <br>
                                 {{$facture->declaration->first()->vehicule->user->name}} <br>
                                 {{$facture->declaration->first()->vehicule->user->telephone}}
                            </span>
                    </p>
                    <p class="small uppercase primary">ifu:</p>
                    <p style="line-height: 5px;">{{$facture->declaration->first()->vehicule->user->numeroIfu}}</p>
                </td>
                <td style="text-align: right;">
                    <p class="small uppercase primary">vendu a par</p>
                    <p class="uppercase" style="line-height: 25px;">
                        {{$facture->declaration->first()->nom_client}} {{$facture->declaration->first()->prenom_client}}
                        <br>
                        <span class="info">
                                {{$facture->declaration->first()->nationalite}} <br>

                                {{$facture->declaration->first()->telephone}}
                            </span>
                    </p>
                    <p class="small uppercase primary">Date de facturation</p>
                    <p style="line-height: 5px;">{{\Carbon\Carbon::parse($facture->declaration->first()->created_at)->format('M d Y')}}</p>
                </td>
            </tr>
        </table>

        <div class="row">
            <div class="col" style="width: 100%">
                <table style="width: 100%;text-align: center" class="table">

                    <tr class="uppercase secondary">
                        <td style="border-bottom: 2px solid #E4ECF6;">numero de chassis</td>
                        <td style="border-bottom: 2px solid #E4ECF6;">marque</td>
                        <td style="border-bottom: 2px solid #E4ECF6;">annee</td>
                        <td style="border-bottom: 2px solid #E4ECF6;">prix de vente</td>
                    </tr>

                    <tr class="space-between">
                        <td>{{$facture->declaration->first()->vehicule->vin}}</td>
                        <td>{{$facture->declaration->first()->vehicule->make}}</td>
                        <td>{{$facture->declaration->first()->vehicule->year}}</td>
                        <td>{{number_format($facture->montant,2,'.','.')}} CFA</td>
                    </tr>
                    <tr class="total" style="font-weight: bolder; color: black">
                        <td style="border-bottom: 2px solid #E4ECF6 ;"></td>
                        <td style="border-bottom: 2px solid #E4ECF6 ;"></td>
                        <td style="border-bottom: 2px solid #E4ECF6 ;"></td>
                        style="border-bottom: 2px solid ;"
                        <td style="text-align: center;border-bottom: 2px solid #E4ECF6">
                            {{number_format($facture->montant,2,'.','.')}} CFA
                        </td>
                    </tr>

                </table>
                <h4 style="padding-left: 10px;color: #778290">NOTE</h4>
                <p style="padding-left: 10px;color: #BAC8DC">Cette facture prouve la declaration de vente...</p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
