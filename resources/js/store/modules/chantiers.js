import axios from 'axios'

const state = {
    loadingChantiers: false,
    chantiers: [],
    chantierInterventions: [],
    chantierCdss: [],
    chantier: '',
};
const getters = {
    loadingChantiers: (state) => state.loadingChantiers,
    allChantiers: (state) => state.chantiers,
    chantier: (state) => state.chantier,
    chantierInterventions: (state) => state.chantierInterventions,
    chantierCdss: (state) => state.chantierCdss,
};

const actions = {
    async fetchChantiers({commit}) {
        commit('setLoadingChantiers', true);
        const response = await axios.get('/chantiers');
        commit('setChantiers', response.data);
        commit('setLoadingChantiers', false);
    },
    async fetchChantier({commit}, id) {
        commit('setLoadingChantiers', true);
        const response = await axios.get('/chantiers/'+id);
        commit('setChantier', response.data);
        commit('setLoadingChantiers', false);
    },
    async fetchChantierInterventions({commit}, id) {
        commit('setLoadingChantiers', true);
        const response = await axios.get('/chantiers/interventions/'+id);
        commit('setChantierInterventions', response.data);
        commit('setLoadingChantiers', false);
    },
    async fetchChantierCdss({commit}, id) {
        commit('setLoadingChantiers', true);
        const response = await axios.get('/chantiers/cds/'+id);
        commit('setChantierCdss', response.data);
        commit('setLoadingChantiers', false);
    },
};
const mutations = {
    setLoadingChantiers: (state, val) => (state.loadingChantiers = val),
    setChantiers: (state, val) => (state.chantiers = val),
    setChantier: (state, val) => (state.chantier = val),
    setChantierInterventions: (state, val) => (state.chantierInterventions = val),
    setChantierCdss: (state, val) => (state.chantierCdss = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
