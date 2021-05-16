import axios from 'axios'

const state = {
    loadingCdss: false,
    cdss: [],
    cdsInterventions: [],
    cds: '',
};
const getters = {
    loadingCdss: (state) => state.cdss,
    allCdss: (state) => state.cdss,
    cds: (state) => state.cds,
    cdsInterventions: (state) => state.cdsInterventions,
};

const actions = {
    async fetchCdss({commit}) {
        commit('setLoadingCdss', true);
        const response = await axios.get('/cdss');
        commit('setCdss', response.data);
        commit('setLoadingCdss', false);
    },
    async fetchCds({commit}, id) {
        commit('setLoadingCdss', true);
        const response = await axios.get('/cdss/'+id);
        commit('setCds', response.data);
        commit('setLoadingCdss', false);
    },
    async fetchCdssInterventions({commit}, id) {
        commit('setLoadingCdss', true);
        const response = await axios.get('/cdss/interventions/'+id);
        commit('setCdsInterventions', response.data);
        commit('setLoadingCdss', false);
    },
    async saveCds({commit, dispatch}, payload) {
        commit('setLoadingCdss', true);
        axios.post('/cdss', payload).then(res=>{
        commit('setLoadingCdss', false);
        dispatch('fetchCdss')
        })
    },

};
const mutations = {
    setLoadingCdss: (state, val) => (state.loadingCdss = val),
    setCdss: (state, val) => (state.cdss = val),
    setCds: (state, val) => (state.cds = val),
    setCdsInterventions: (state, val) => (state.cdsInterventions = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
