@extends('layouts.app')

@section('content')
    <div id="app">
        <v-app :style="{ fontFamily: $store.getters.lang==='ar'?'Louguiya !important':'LouguiyaFR !important'}">
            <admin-nav v-if="$route.meta.admin"></admin-nav>
            <appnav v-if="!$route.meta.admin && !$route.matched.some(({ name }) => name === 'Connexion')"></appnav>
            <v-main class="mt-5">
               <router-view></router-view>
            </v-main>
            <appfooter v-if="!$route.meta.admin"></appfooter>
        </v-app>
    </div>
@endsection

