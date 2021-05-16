@component('mail::message')
  <p class="d-inline">
      <span style="font-weight: bold;color: black">Bienvenue</span> <span style="color: black">{{$user->name}} {{$user->full_name}}</span>
  </p>

   <img style="text-align: center;width: 100px;height: 100px;display: block;margin: auto" src="https://sesur.herokuapp.com/images/verificaion.png" style="height:150px;width: 150px;" alt="email"  /> <br>
  <p style="text-align: center;color: black">
      Nous sommes ravis de vous accueillir à bord. <br>
      Pour activer votre compte, veuillez cliquer sur le bouton <br> ci-dessous pour vérifier votre adresse e-mail:
  </p>

@component('mail::button', ['url' => route('email_verification',$user->id)])
Verifier
@endcomponent

  <p style="margin-top: 5px; color: black;text-align: center">
      Avez-vous besoin d'aide ? Envoyez nous un message à <span style="font-weight: bold">support@sesur.com</span> <br>
  </p>

Merci,<br>
{{ config('app.name') }}
@endcomponent
