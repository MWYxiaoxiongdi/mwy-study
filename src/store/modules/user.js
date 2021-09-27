import { getToken, setToken, removeToken } from '@/utils/user'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
