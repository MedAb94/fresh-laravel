<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
{{--    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">--}}
{{--    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">--}}
{{--    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">--}}
</head>

<style>
    body {
        font-family: Nunito;
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
        margin: 10px;
       /*/ border: 1px solid #f5f3f3;*/
        border-radius: 10px;
        /*box-shadow: 0px 0px 2px rgb(226, 216, 216);*/
    }


    .table {
        width: 100%;
    }

    .table th,
    td {
        padding: 10px;
    }

    .table thead th {
        border-bottom: 3px solid #F3F6FB;
        text-align: left;
    }

    .table tbody td {
        border-bottom: 2px solid #F3F6FB;
    }

    body {
        width: 100%;
        height: 100%;
    }


</style>

<body>
<div class="quittance">
    <div class="card">
        <table style="width:100%">
            <tr>
                <th></th>
            </tr>
            <tbody>
            <tr>
                <td>
                    <img src="logo.png" width="130" height="130" alt="logo"/>
                </td>
                <td class="uppercase center primary" style="text-align: right;">
                   QUITTANCE
                <p class="uppercase center secondary" style="text-align: right;">
                    quittance <span style="margin-left: 5px;">#{{$quittance->code}}</span>
                </p>
                </td>

            </tr>


            </tbody>
        </table>

        <table style="width:100%">
            <tr>
                <td>
                    <p class="uppercase" style="line-height: 25px;">
                        {{$quittance->transaction->payment->first()->vehicule->user->nomEntreprise}} <br>
                        <span class="info">
                            {{$quittance->transaction->payment->first()->vehicule->user->last_name}} <br>
                            {{$quittance->transaction->payment->first()->vehicule->user->name}} <br>
                            {{$quittance->transaction->payment->first()->vehicule->user->telephone}}
                        </span>
                    </p>
                    <p class="small uppercase primary">ifu:</p>
                    <p style="line-height: 5px;">{{$quittance->transaction->payment->first()->vehicule->user->numeroIfu}}</p>
                </td>
                <td  style="text-align: right;">
                    <img src="data:image/png;base64,
          {!! base64_encode(QrCode::format('png')->size(100)->generate(env('APP_URL').'/app/payment/quittance/'.$quittance->code)) !!}" alt="qr">
                    <p class="small uppercase primary">Date de quittance</p>
                    <p class="uppercase" style="line-height: 25px;">
                        {{\Carbon\Carbon::parse($quittance->created_at)->format('M d Y')}} <br>
                    </p>
                    <p class="small uppercase primary">id de la transaction</p>
                    <p>{{$quittance->transaction->code}}</p>
                </td>
            </tr>
        </table>


        <div class="row">
            <div class="col" style="width: 100%;">
                <table class="table" style="width: 100%;">
                    <thead>
                    <tr class="uppercase secondary space-between">
                        <td style="text-align: left">numero de chassis</td>
                        <td>impot</td>
                        <td>sanction</td>
                        <td>total</td>
                    </tr>
                    </thead>
                    <tbody>
                    @php
                        $sumSanction = 0;
                        $sum = 0;
                    @endphp
                    @foreach($quittance->transaction->payment as $vh)
                              @php $sumSanction+=$vh->vehicule->sanction_tax @endphp
                              @php $sum+=$vh->vehicule->price - $vh->vehicule->sanction_tax @endphp
                        <tr class="space-between">
                            <td>{{$vh->vehicule->vin}}</td>
                            <td>{{number_format($vh->vehicule->price - $vh->vehicule->sanction_tax,0,'.','.')}} CFA</td>
                            <td>{{number_format($vh->vehicule->sanction_tax,0,'.','.')}} CFA</td>
                            <td>{{number_format($vh->vehicule->price,0,'.','.')}} CFA</td>
                        </tr>
                    @endforeach
                    @if($quittance->transaction->total == 0)
                        <tr style="padding-top: 20px">
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                        </tr>
{{--                        <tr><td style="border:0 white "></td></tr>--}}
                    <tr class="total" style="font-weight: bolder;">
                        <td style="border:0 white">Impot</td>
                        <td style="border:0 white"></td>
                        <td style="border:0 white"></td>
                        <td style="border:0 white"> {{$vh->vehicule->price}} CFA</td>

                    </tr>
                        <tr style="font-weight: bolder;">
                            <td style="border: 0 solid #F3F7FB;">Exoneration</td>
                            <td style="border: 0 solid #F3F7FB;"></td>
                            <td style="border: 0 solid #F3F7FB;"></td>
                            <td style="border: 0 solid #F3F7FB;">
                                 -{{$vh->vehicule->price}} CFA
                            </td>
                        </tr>

                    <tr style="font-weight: bolder;">
                        <td style="border: 0 solid #F3F7FB;">Montant total</td>
                        <td style="border:0 white"></td>
                        <td style="border:0 white"></td>
                        <td style="border:0 white"><span>0 CFA <br></span></td>
                    </tr>


                    @else

                        <tr style="padding-top: 20px">
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                        </tr>
                        {{--                        <tr><td style="border:0 white "></td></tr>--}}
                        <tr class="total" style="font-weight: bolder;">
                            <td style="border:0 white">Impot</td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white">{{number_format($sum,0,'.','.')}} CFA</td>

                        </tr>
                        <tr style="font-weight: bolder;">
                            <td style="border: 0 white;">Sanction</td>
                            <td style="border: 0 white;"></td>
                            <td style="border: 0 white;"></td>
                            <td style="border: 0 white;">
                                {{number_format($sumSanction,0,'.','.')}} CFA
                            </td>
                        </tr>

                        <tr style="font-weight: bolder;">
                            <td style="border: 0 white !important;">Montant total</td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"></td>
                            <td style="border:0 white"><span>{{number_format($quittance->transaction->total,0,'.','.')}} CFA <br></span></td>
                        </tr>


                    @endif
                    </tbody>
                </table>
                <h4 style="color: #778290 ;margin-top: 25px; padding-left: 10px;">Notes</h4>
                <p style="padding-left: 10px;color: #BAC8DC">

                    Cette quittance est valable uniqueent pour les vehicules dont
                    les numeros de chassis sont inscrit.. Il prouve
                    le paiment des impots pour les vehicules.....
                </p>
            </div>
        </div>
    </div>
</div>
</body>

</html>
