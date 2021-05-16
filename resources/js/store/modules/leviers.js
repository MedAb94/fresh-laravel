import axios from 'axios'

const state = {
    loadingLeviers: false,
    leviers: [],
    leviersStrategique: [],
    levier: '',
    levierChantiers: '',
};
const getters = {
    loadingLeviers: (state) => state.loadingLeviers,
    allLeviers: (state) => state.leviers,
    allLeviersStrategique: (state) => state.leviersStrategique,
    levier: (state) => state.levier,
    levierChantiers: (state) => state.levierChantiers,
};

const actions = {
    async fetchLeviers({commit}) {
        commit('setLoadingLeviers', true);
        const response = await axios.get('/leviers');
        commit('setLeviers', response.data);
        commit('setLoadingLeviers', false);
    },
    async fetchStrategieLeviers({commit}, id) {
        commit('setLoadingLeviers', true);
        const response = await axios.get('/leviers/strategie/'+id);
        commit('setLeviersStr', response.data);
        commit('setLoadingLeviers', false);
    },
    async fetchLevier({commit}, id) {
        commit('setLoadingLeviers', true);
        const response = await axios.get('/leviers/'+id);
        commit('setLevier', response.data);
        commit('setLoadingLeviers', false);
    },
    async fetchLevierChantiers({commit}, id) {
        commit('setLoadingLeviers', true);
        const response = await axios.get('/leviers/chantiers/'+id);
        commit('setLevierChantiers', response.data);
        commit('setLoadingLeviers', false);
    },
};
const mutations = {
    setLoadingLeviers: (state, val) => (state.loadingLeviers = val),
    setLeviers: (state, val) => (state.leviers = val),
    setLeviersStr: (state, val) => (state.leviersStrategique = val),
    setLevier: (state, val) => (state.levier = val),
    setLevierChantiers: (state, val) => (state.levierChantiers = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
