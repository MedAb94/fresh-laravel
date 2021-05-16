<template>
    <div>
        <div class="bg-light text-right px-5">
            <v-btn text class="black--text font-weight-bold" v-if="$i18n.locale==='fr'" >
                العربية
            </v-btn>
            <v-btn text class="black--text font-weight-bold" v-if="$i18n.locale==='ar'" >
                Français
            </v-btn>
        </div>
        <v-navigation-drawer absolute temporary v-model="drawer">
            <v-list class="pl-4">
            </v-list>
        </v-navigation-drawer>
     </div>
 </template>

 <script>
     import {mapGetters, mapActions} from 'vuex'

     export default {
         name: "Navbar",
         data() {
             return {
                 drawer: false,
             };
         },
         methods: {
             ar() {
                 this.$i18n.locale = 'ar';
                 this.$vuetify.rtl = true
             },
             fr() {
                 this.$i18n.locale = 'fr';
                 this.$vuetify.rtl = false
             }
         },
         computed: {
             ...mapGetters(["isLoggedIn"])
         }
     }
 </script>

 <style lang="scss">
     a:hover {
         text-decoration: none;
     }

     .link-item {
         font-weight: bold !important;
         transition: all 0.5s ease-in-out;
     }

     .headerMr {

         min-height: 100px;
     }

     .router-link-exact-active {
         border-bottom: 5px solid red;
         font-weight: bolder !important;

     }
 </style>
