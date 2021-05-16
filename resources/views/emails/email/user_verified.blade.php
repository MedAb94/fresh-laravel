@component('mail::message')
    <p class="d-inline">
        <span style="font-weight: bold;color: black">Bienvenue</span> <span style="color: black">{{$user->name}} {{$user->full_name}}</span>
    </p>
<img style="text-align: center;width: 100px;height: 100px;display: block;margin: auto" src="https://sesur.herokuapp.com/images/verified.png" style="height:150px;width: 150px;" alt="email"  /> <br>
 <p style="text-align: center;color: black">
Vos informations ont été vérifiées et acceptées. <br>
Vous pouvez à présent accéder à la liste de vos véhicules importés et payer leurs impôts.

</p>

@component('mail::button', ['url' => 'https://sesur.herokuapp.com/app'])
Accéder maintenant
@endcomponent
<p style="margin-top: 5px; color: black;text-align: center">
 Avez-vous besoin d'aide ? Envoyez nous un message à <span style="font-weight: bold">support@sesur.com</span> <br>
</p>

Merci,<br>
{{ config('app.name') }}
@endcomponent
