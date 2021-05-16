import axios from 'axios'

const state = {
    users: [],
    user: '',
    userInfo: '',
    loadingUsers: false,
};
const getters = {
    allUsers: (state) => state.users,
    user: (state) => state.user,
    userInfo: (state) => state.userInfo,
    loadingUsers: (state) => state.loadingUsers,
};

const actions = {
    async fetchUsers({commit}) {
        commit('loadingUsers', true);
        const response = await axios.get('/users');
        commit('setUsers', response.data);
        commit('loadingUsers', false);
    },
    async fetchUser({commit, dispatch}) {
        axios.get('auth/user-profile').then(response=>{
            console.log(response)
            commit('setUser', response.data);
            commit('loadingUsers', false);
            return response
        }).catch(err=>{
            console.log(err.response)
            err.response.status===401?dispatch('logout').then(()=>location.reload()):'';
        })

    },
    async createUser({commit, dispatch}, payload) {
        axios.post('users', payload).then(response=>{
            console.log(response)
            dispatch("fetchUsers")
            commit('loadingUsers', false);
            return response
        }).catch(err=>{
            console.log(err.response)
            err.response.status===401?dispatch('logout').then(()=>location.reload()):'';
        })

    },
    async updateUser({commit, dispatch}, payload) {
        axios.post('users/update/'+payload.id, payload).then(response=>{
            console.log(response)
            commit('loadingUsers', false);
            dispatch("fetchUsers")
            return response
        }).catch(err=>{
            console.log(err.response)
            err.response.status===401?dispatch('logout').then(()=>location.reload()):'';
        })

    },
    async fetchUserById({commit}, id) {
        const response = await axios.get('/users/user-info/' + id);
        commit('setUser', response.data);
        commit('loadingUsers', false);
    },
    async resendVerificationEmail({commit}, email) {
        commit('loadingUsers', true);
        const response = await axios.get('/email/resend/' + email);
        commit('loadingUsers', false);
    },

};
const mutations = {
    loadingUsers: (state, val) => (state.loadingUsers = val),
    setUsers: (state, val) => (state.users = val),
    setUser: (state, val) => (state.user = val),
    setUserInfo: (state, val) => (state.userInfo = val),
};
export default {
    state,
    getters,
    actions,
    mutations
}
