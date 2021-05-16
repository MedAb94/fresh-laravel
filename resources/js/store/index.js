import Vue from 'vue';
import Vuex from 'vuex';
import i18n from "../src/i18n";

Vue.use(Vuex);

import auth from "./modules/auth";
import users from "./modules/users";
import indicateurs from "./modules/indicateurs";
import leviers from "./modules/leviers";
import strategies from "./modules/strategies";
import themes from "./modules/themes";
import chantiers from "./modules/chantiers";
import interventions from "./modules/interventions";
import cdss from "./modules/cdss";
import dashboard from "./modules/dashboard";
import objectifs from "./modules/objectifs";
import zones from "./modules/zones";
export default new Vuex.Store({
    state: {},
    getters: {
        lang: () => i18n.locale,
    },
    mutations: {},
    actions: {
       async deleteRecord({commit}, payload){
          await axios.delete('/'+payload.type+'/'+payload.id)
        }
    },
    modules: {
        auth,
        users,
        indicateurs,
        leviers,
        strategies,
        themes,
        chantiers,
        interventions,
        cdss,
        dashboard,
        objectifs,
        zones
    }
})
