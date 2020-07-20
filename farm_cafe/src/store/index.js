import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:false,
    Name:'로그인해주세요'
  },
  mutations: {
    loginFn (state,data) {
      state.login = data.login
      state.Name = data.Name
  }
  },
  actions: {
  },
  modules: {
  }
})
