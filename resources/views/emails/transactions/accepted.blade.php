@component('mail::message')
    <p class="d-inline">
        <span style="font-weight: bold;color: black">Salut</span> <span
            style="color: black">{{$user->name}} {{$user->full_name}}</span>
    </p>
    <img style="text-align: center;width: 100px;height: 100px;display: block;margin: auto"
         src="https://sesur2.herokuapp.com/images/sucess.png" style="height:150px;width: 150px;" alt="email"/> <br>
    <h4 style="text-align: center">Votre transaction {{$transaction->code}} est en cours</h4>
    <div class="row" style="text-align: center">
        <div>
            Montant : <span style="font-weight: bolder;color: black">{{number_format($transaction->total,0,'.','.')}} CFA</span>
        </div>
        <div style="padding-top: 3px;margin-bottom: 10px;">
            Methode de paiement : <span style="font-weight: bolder;color: black">{{$transaction->type->name}}</span>
        </div>
    </div>

@component('mail::button', ['url' => route('transaction.quitance',$transaction->id)])
Télécharger votre quittance
@endcomponent

<p style="margin-top: 5px; color: black;text-align: center">
Avez-vous besoin d'aide ? Envoyez nous un message à <span style="font-weight: bold">support@sesur.com</span>
<br>
 </p>
    Merci,<br>
    {{ config('app.name') }}
@endcomponent
