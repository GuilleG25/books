const actions = {
  async onAuthStateChangedAction(state, { authUser }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect from here
      this.$router.push({
        path: '/sign-in',
      })
    } else {
      const {
        uid,
        email,
        displayName,
        photoURL,
        emailVerified,
        phoneNumber,
        metadata,
      } = authUser
      state.commit('SET_USER', {
        uid,
        email,
        displayName,
        photoURL,
        phoneNumber,
        emailVerified,
        metadata,
      })
    }
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  CHANGE_LOADING(state, loading) {
    state.loadingFull = loading
  },
}

const state = () => ({
  user: null,
  loadingFull: true,
})

const getters = {
  getUser(state) {
    return state.user
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
