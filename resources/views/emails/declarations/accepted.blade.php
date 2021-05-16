@component('mail::message')
<p class="d-inline">
<span style="font-weight: bold;color: black">Salut</span> <span style="color: black">{{$user->name}} {{$user->full_name}}</span>
</p>
<img style="text-align: center;width: 100px;height: 100px;display: block;margin: auto" src="https://sesur.herokuapp.com/images/sucess.png" style="height:150px;width: 150px;" alt="email"  /> <br>
<h4 style="text-align: center">Votre déclaration de vente est terminée avec succès.</h4>
@component('mail::button', ['url' => route('fa.download',$declaration->code)])
    Télécharger votre facture
@endcomponent
<p style="margin-top: 5px; color: black;text-align: center">
Avez-vous besoin d'aide ? Envoyez nous un message à <span style="font-weight: bold">support@sesur.com</span> <br>
</p>
Merci,<br>
    {{ config('app.name') }}
@endcomponent
