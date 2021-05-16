import axios from 'axios'

const state = {
    loadingObjectifs: false,
    objectifs: [],
    cibles: [],
    objectifCibles: [],
    objectif: '',
};
const getters = {
    loadingObjectifs: (state) => state.objectifs,
    allObjectifs: (state) => state.objectifs,
    objectif: (state) => state.objectif,
    allCibles: (state) => state.cibles,
    allObjectifCibles: (state) => state.objectifCibles,
};

const actions = {
    async fetchObjectifs({commit}) {
        commit('setLoadingObjectifs', true);
        const response = await axios.get('/objectifs');
        commit('setObjectifs', response.data);
        commit('setLoadingObjectifs', false);
    },
    async fetchObjectif({commit}, id) {
        commit('setLoadingObjectifs', true);
        const response = await axios.get('/objectifs/'+id);
        commit('setObjectif', response.data);
        commit('setLoadingObjectifs', false);
    },
    async fetchCibles({commit}) {
        commit('setLoadingObjectifs', true);
        const response = await axios.get('/objectifs/cibles');
        commit('setCibles', response.data);
        commit('setLoadingObjectifs', false);
    },
    async fetchObjectifCibles({commit}, id) {
        commit('setLoadingObjectifs', true);
        const response = await axios.get('/objectifs/cibles/'+id);
        commit('setCibles', response.data);
        commit('setLoadingObjectifs', false);
    },


};
const mutations = {
    setLoadingObjectifs: (state, val) => (state.loadingObjectifs = val),
    setObjectifs: (state, val) => (state.objectifs = val),
    setObjectif: (state, val) => (state.objectif = val),
    setCibles: (state, val) => (state.cibles = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
