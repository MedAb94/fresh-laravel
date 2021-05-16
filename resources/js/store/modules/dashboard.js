import axios from 'axios'

const state = {
    counts: '',
    dashboardIndicateurs: [],

};
const getters = {
    allCounts: (state) => state.counts,
    dashboardIndicateurs: (state) => state.dashboardIndicateurs,

};

const actions = {
    async fetchCounts({commit}) {
        const response = await axios.get('/counts');
        commit('setCounts', response.data);
    },
    async fetchDashboardIndicateurs({commit}) {
        const response = await axios.get('/dashboard-inds');
        commit('setInds', response.data);
    },
};
const mutations = {
    setCounts: (state, val) => (state.counts = val),
    setInds: (state, val) => (state.dashboardIndicateurs = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
