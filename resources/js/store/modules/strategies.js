import axios from 'axios'

const state = {
    loadingStrategies: false,
    strategies: [],
    strategie: '',
};
const getters = {
    loadingStrategies: (state) => state.strategies,
    allStrategies: (state) => state.strategies,
    strategie: (state) => state.strategie,
};

const actions = {
    async fetchStrategies({commit}) {
        commit('setLoadingStrategies', true);
        const response = await axios.get('/strategies');
        commit('setStrategies', response.data);
        commit('setLoadingStrategies', false);
    },
    async fetchStrategie({commit}, id) {
        commit('setLoadingStrategies', true);
        const response = await axios.get('/strategies/'+id);
        commit('setStrategie', response.data);
        commit('setLoadingStrategies', false);
    },
    async createStrategie({commit}, payload) {
        commit('setLoadingStrategies', true);
        const response = await axios.post('/strategies', payload);
        commit('setLoadingStrategies', false);
    },

    async updateStrategie({commit, dispatch}, payload) {
        axios.post('/strategies/update/'+payload.id, payload).then(res => {
            dispatch('fetchStrategies')
        })
    },

};
const mutations = {
    setLoadingStrategies: (state, val) => (state.loadingStrategies = val),
    setStrategies: (state, val) => (state.strategies = val),
    setStrategie: (state, val) => (state.strategie = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
