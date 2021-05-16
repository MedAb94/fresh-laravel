<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link rel="stylesheet" media="print" type="text/css" href="/css/app.css" >

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"/>
    <link rel="shortcut icon" type="image/jpg" href="/logo.png"/>

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.8.55/css/materialdesignicons.min.css"
          integrity="sha512-x96qcyADhiw/CZY7QLOo7dB8i/REOEHZDhNfoDuJlyQ+yZzhdy91eAa4EkO7g3egt8obvLeJPoUKEKu5C5JYjA=="
          crossorigin="anonymous"/>
    <style>
        @font-face {
            font-family: "LouguiyaFR";
            src: url("../../js/assets/Louguiya_Fonts/LouguiyaFR.ttf");
        }

        @font-face {
            font-family: "Louguiya";
            src: url("../../js/assets/Louguiya_Fonts/Louguiya.ttf");
        }

        .v-card__text, .v-card__title {
            word-break: normal !important; /* maybe !important  */
        }

    </style>
    @yield('cs')
</head>
<body>
<div id="app">
    @yield('content')
</div>

</body>
</html>
