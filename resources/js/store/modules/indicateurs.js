import axios from 'axios'

const state = {
    loadingIndicateurs: false,
    indicateurs: [],
    interventionIndicateurs: [],
    objectifIndicateurs: [],
    allIndicateurs: [],
    indicateur: '',
    dashboardResult: '',
    indicateursNonAssocie:[],
    indicateursOdd:[],
    wilayaInds:[],
    cdsIndicateurs:[],
    nonValidatedRenseignement:[],
    renseignement: ''
};
const getters = {
    loadingIndicateurs: (state) => state.indicateurs,
    allIndicateurs: (state) => state.indicateurs,
    ListOfAllIndicateurs: (state) => state.allIndicateurs,
    indicateur: (state) => state.indicateur,
    dashboardResult: (state) => state.dashboardResult,
    allInterventionIndicateurs: (state) => state.interventionIndicateurs,
    allObjectifIndicateurs: (state) => state.objectifIndicateurs,
    indicateursNonAssocie: (state) => state.indicateursNonAssocie,
    indicateursOdd: (state) => state.indicateursOdd,
    wilayaInds: (state) => state.wilayaInds,
    cdsIndicateurs: (state) => state.cdsIndicateurs,
    nonValidatedRenseignement: (state) => state.nonValidatedRenseignement,
    renseignement: (state) => state.renseignement,
};

const actions = {
    async fetchIndicateurs({commit}) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs');
        commit('setIndicateurs', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchIndicateursNonAssocie({commit}, niveau) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/non-associe/'+niveau);
        commit('setIndicateursNonAssocie', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchAllIndicateurs({commit}) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/all-indicateurs');
        commit('setAllIndicateurs', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchIndicateursOdd({commit}) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/odd');
        commit('setIndicateursOdd', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchCdsIndicateurs({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/cds/'+id);
        commit('setCdsInds', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchRenseignement({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/renseignement/'+id);
        commit('setRenseignement', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async renseignementAction({commit}, payload) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.post('/indicateurs/renseignements', payload);
        commit('setRenseignement', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchNonValidatedRenseignement({commit}) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/non-validated');
        commit('setNonValidatedRenseignement', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchWilayaInds({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/wilaya-indicateurs/'+id);
        commit('setWilayaInds', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchThemeIndicateurs({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/theme/' + id);
        commit('setIndicateurs', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchInterventionIndicateurs({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/intervention/' + id);
        commit('setInterventionIndicateurs', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchObjectifIndicateurs({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/objectif/' + id);
        commit('setObjectifIndicateurs', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async fetchIndicateur({commit}, id) {
        commit('setLoadingIndicateurs', true);
        const response = await axios.get('/indicateurs/' + id);
        commit('setIndicateur', response.data);
        commit('setLoadingIndicateurs', false);
    },
    async saveIndicateur({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs', payload).then(res => {
            commit('setLoadingIndicateurs', false);
            dispatch('fetchIndicateurs')
        })
    },
    async updateIndicateur({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs/update/'+payload.id, payload).then(res => {
            commit('setLoadingIndicateurs', false);
            dispatch('fetchIndicateurs')
        })
    },
    async updateRenseignement({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs/update-renseignement/'+payload.id, payload).then(res => {
            commit('setLoadingIndicateurs', false);
            dispatch('fetchIndicateurs')
        })
    },
    async fetchFilteredIndicateurs({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs/filter?page='+payload.page, payload.data).then(res => {
            commit('setLoadingIndicateurs', false);
            commit('setIndicateurs', res.data);
        })
    },
    async dashboardSearch({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs/dashboard-filter', payload).then(res => {
            commit('setLoadingIndicateurs', false);
            commit('setDashboardResult', res.data);
        })
    },
    async fetchCibleIndicateurs({commit}, id) {
        commit('setLoadingObjectifs', true);
        const response = await axios.get('/indicateurs/cible/'+id);
        commit('setAllIndicateurs', response.data);
        commit('setLoadingObjectifs', false);
    },
    async dissocierIndicateur({commit, dispatch}, payload) {
        commit('setLoadingIndicateurs', true);
        axios.post('/indicateurs/dissocier', payload).then(res => {
            commit('setLoadingIndicateurs', false);
            commit('setDashboardResult', res.data);
        })
    },

};
const mutations = {
    setLoadingIndicateurs: (state, val) => (state.loadingIndicateurs = val),
    setIndicateurs: (state, val) => (state.indicateurs = val),
    setIndicateur: (state, val) => (state.indicateur = val),
    setDashboardResult: (state, val) => (state.dashboardResult = val),
    setInterventionIndicateurs: (state, val) => (state.interventionIndicateurs = val),
    setObjectifIndicateurs: (state, val) => (state.objectifIndicateurs = val),
    setAllIndicateurs: (state, val) => (state.allIndicateurs = val),
    setIndicateursNonAssocie: (state, val) => (state.indicateursNonAssocie = val),
    setIndicateursOdd: (state, val) => (state.indicateursOdd = val),
    setWilayaInds: (state, val) => (state.wilayaInds = val),
    setCdsInds: (state, val) => (state.cdsIndicateurs = val),
    setNonValidatedRenseignement: (state, val) => (state.nonValidatedRenseignement = val),
    setRenseignement: (state, val) => (state.renseignement = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
