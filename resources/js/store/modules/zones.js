import axios from 'axios'

const state = {
    loadingZones: false,
    zones: [],
    wilayas: [],
    wilayaMoughataas: [],
    moughataasCommunes: [],
    wilaya: '',
};
const getters = {
    loadingZones: (state) => state.zones,
    allZones: (state) => state.zones,
    wilaya: (state) => state.wilaya,
    allWilayas: (state) => state.wilayas,
    wilayaMoughataas: (state) => state.wilayaMoughataas,
    moughataasCommunes: (state) => state.moughataasCommunes,
};

const actions = {
    async fetchZones({commit}) {
        commit('setLoadingZones', true);
        const response = await axios.get('/zones');
        commit('setZones', response.data);
        commit('setLoadingZones', false);
    },
    async fetchWilaya({commit}, id) {
        commit('setLoadingZones', true);
        const response = await axios.get('/zones/wilayas/'+id);
        commit('setWilaya', response.data);
        commit('setLoadingZones', false);
    },
    async fetchWilayas({commit}) {
        commit('setLoadingZones', true);
        const response = await axios.get('/zones/wilayas');
        commit('setWilayas', response.data);
        commit('setLoadingZones', false);
    },
    async fetchWilayaMoughataas({commit}, id) {
        commit('setLoadingZones', true);
        const response = await axios.get('/zones/wilaya/'+id+'/moughataas');
        commit('setWilayaMoughataas', response.data);
        commit('setLoadingZones', false);
    },
    async fetchMoughataaCommunes({commit}, id) {
        commit('setLoadingZones', true);
        const response = await axios.get('/zones/moughataa/'+id+'/communes');
        commit('setMoughataasCommunes', response.data);
        commit('setLoadingZones', false);
    },
    async saveZone({commit, dispatch}, payload) {
        commit('setLoadingZones', true);
        axios.post('/zones', payload).then(res=>{
        commit('setLoadingZones', false);
        dispatch('fetchZones')
        })
    },

};
const mutations = {
    setLoadingZones: (state, val) => (state.loadingZones = val),
    setZones: (state, val) => (state.zones = val),
    setWilayaMoughataas: (state, val) => (state.wilayaMoughataas = val),
    setMoughataasCommunes: (state, val) => (state.moughataasCommunes = val),
    setWilaya: (state, val) => (state.wilaya = val),
    setWilayas: (state, val) => (state.wilayas = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
