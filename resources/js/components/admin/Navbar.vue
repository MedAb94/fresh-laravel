<template>
    <div class="d-print-none">
        <v-app-bar flat app dense class="white">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-capitalize grey--text">
            </v-toolbar-title>
            <v-spacer/>
            <!--Notification icon-->
            <div class="text-center" v-if="$store.getters.role === 'admin'">
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
                >
                    <template v-slot:activator="{ on, attrs }">

                        <v-btn text
                               v-bind="attrs"
                               v-on="on"
                        >
                            <v-badge
                                :content="1"
                                color="red"
                                overlap
                                class="mr-5 mt-3"
                            >
                                <v-icon large>
                                    mdi-bell-outline
                                </v-icon>
                            </v-badge>
                        </v-btn>


                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Liste de renseignements non validés</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list three-line>
                            <v-list-item >

                                <v-list-item-content>
                                    <v-list-item-title> Rien à afficher pour le moment

                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                text
                                @click="menu = false"
                            >
                                Fermer
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </div>
            <!--User icon-->
            <v-menu
                bottom
                min-width="200px"
                rounded
                offset-y
                class="mr-md-5"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        icon
                        x-large
                        v-on="on"
                    >
                        <v-avatar size="48"
                        >
                            <img v-if="user" :src="user.user.avatar" alt="Avatar">
                            <!--<span class="white&#45;&#45;text headline">AB</span>-->
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar>
                                <img v-if="user" :src="user.user.avatar" alt="Avatar">
                            </v-avatar>
                            <h3 v-if="user">{{ user.user.name }}</h3>
                            <p v-if="user" class="caption mt-1">
                                {{ user.user.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <!--                            <router-link tag="button" class="btn btn-white"-->
                            <!--                                         small-->
                            <!--                                         depressed-->
                            <!--                                         :to="{name: 'Reglage'}"-->
                            <!--                            >-->
                            <!--                                Compte-->
                            <!--                            </router-link>-->
                            <!--                            <v-divider class="my-3"></v-divider>-->
                            <button class="btn btn-white"
                                    small
                                    depressed
                                    @click="logout"
                            >
                                Se deconnecter
                            </button>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
            <!--end User icon menu-->
        </v-app-bar>

        <!-- Side bar -->
        <v-navigation-drawer app v-model="drawer" color="#242644" style="border: none !important">
            <div class="pa-8 white">
                <div class="text-center">
                   Logo
                </div>
                <div class="caption text-center">
                   Nom
                </div>
            </div>
            <v-list>
                <template v-for="(item, i) in links">
                    <base-item-group
                        v-if="item.children"
                        :key="`group-${i}`"
                        :item="item"
                    >
                        <!--  -->
                    </base-item-group>
                    <base-item v-else :key="`item-${i}`" :item="item"/>
                </template>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
// import Snackbar from './Snackbar.vue';
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Navbar",
    data() {
        return {
            drawer: true,
            menu: false,

            links: [
                {
                    icon: "mdi-apps", text: "Tableau de bord", route: {name: 'Dashboard'},
                    children: [
                        {icon: "mdi-circle-medium", text: "Test 1", route: {name: 'Ramo'}},
                        {icon: "mdi-circle-medium", text: "Test 2", route: {name: 'Nasmo'}},
                    ]
                },
            ],

        };
    },
    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => location.reload())
        },

    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.$store.dispatch('fetchUser').then(res => {
            console.log(res)
            if (res.status == 401) {
                this.$store.dispatch('logout').then(() => location.reload())
            }
        })
    }

};
</script>

<style scoped>
.router-link-exact-active {
    color: #fff !important;
    font-weight: bold;
}

.icon-radius {
    border-radius: 15px 5px ! important;
}

.notification {
    position: relative;
}

.notification::after,
.notification::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #42427d;
    top: 0;
    right: 0;
}

h4.primary--text.d-block {
    font-size: 30px;
    font-weight: 500;
    font-style: normal;
}

p.sm-text.primary--text.pa-0.ma-0 {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
}

a.router-link-exact-active.router-link-active {
    font-size: 18px;
    color: #9CDAEC;
}

a div a {
    font-size: 19px;
    color: #FFFFFF;
}

div.v-card__title {
    color: #18237D;
    font-weight: 400;
    font-style: normal;
}

th.text-left {
    color: #1E248C;
}

div.dashboard.pa-5 {
    background-color: #F2F3F8;
}

div.v-toolbar__content {
    background-color: #F2F3F8;
}

div.v-main__wrap {
    background-color: #F2F3F8;
}

div.pa-8.v-list-item.theme--light {
    background-color: #F2F3F8;
}

a.primary--text.light.mr-3.v-btn.v-btn--flat.v-btn--router.v-btn--text.theme--light.v-size--default {
    background-color: #FFFFFF;
}

div.col-md-2.col-12 {
    margin-right: -78px;
}

h5.primary--text.mx-0 {
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    text-decoration: none;
    text-transform: none;
}

th.text-start.sortable {
    color: #354184;
    text-transform: none;
}

tr td h5 {
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    color: #252F80;
}

th.text-center {
    font-size: 18px;
}

button.primary.my-5.v-btn.v-btn--block.v-btn--contained.theme--light.v-size--default {
    font-size: 18px;
    background-color: #EF4646;
}

div.row.mt-12.justify-center {
    background-color: #EFF9FF;
}

div.v-navigation-drawer__content {
    background-color: #242644;
}

a.font-weight-bold.router-link-exact-active.router-link-active {
    display: none;
}

div a img {
    margin-left: 66px;
}

div.mt-4.mx-3.rounded-tl.rounded-br.rounded-lg.yellow.col {
    border-style: solid;

}

div.mt-4.mx-3.rounded-tl.rounded-br.rounded-lg.info.col {
    border-radius: 50px;
}

thead tr th {
    color: #1E248C;
}
</style>
