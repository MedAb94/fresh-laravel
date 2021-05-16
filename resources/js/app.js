require('./bootstrap');

window.Vue = require('vue');
window.Vuetify = require('vuetify');
import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueApexCharts from "vue-apexcharts";
import 'leaflet/dist/leaflet.css';

Vue.use(VueApexCharts)
Vue.use(VueSweetalert2);

Vue.component('apexchart', VueApexCharts);
Vue.component('base-item-group', require('./components/base/itemGroup').default);
Vue.component('base-item', require('./components/base/item').default);
Vue.component('base-item-sub-group', require('./components/base/itemSubGroup').default);
Vue.component('appnav', require('./components/Navbar.vue').default);
Vue.component('adminNav', require('./components/admin/Navbar.vue').default);
Vue.component('appfooter', require('./components/Footer.vue').default);

import router from './router'
import store from './store'
import i18n from "./src/i18n";

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        rtl: false,
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: "#00A95C",
                    green: "#00A95C",
                    red: "#D01C1F",
                    yellow: "#FFD700",
                },
                dark: {
                    green: "#00A95C",
                    red: "#D01C1F",
                    yellow: "#FFD700",
                },
            },
        },
    }),
    router,
    store,
    i18n,
});
