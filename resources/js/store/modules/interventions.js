import axios from 'axios'

const state = {
    loadingInterventions: false,
    interventions: [],
    intervention: '',


};
const getters = {
    loadingInterventions: (state) => state.loadingInterventions,
    allInterventions: (state) => state.interventions,
    intervention: (state) => state.intervention,
};

const actions = {
    async fetchInterventions({commit}) {
        commit('setLoadingInterventions', true);
        const response = await axios.get('/interventions');
        commit('setInterventions', response.data);
        commit('setLoadingInterventions', false);
    },
    async fetchIntervention({commit}, id) {
        commit('setLoadingInterventions', true);
        const response = await axios.get('/interventions/'+id);
        commit('setIntervention', response.data);
        commit('setLoadingInterventions', false);
    },
};
const mutations = {
    setLoadingInterventions: (state, val) => (state.loadingInterventions = val),
    setInterventions: (state, val) => (state.interventions = val),
    setIntervention: (state, val) => (state.intervention = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
