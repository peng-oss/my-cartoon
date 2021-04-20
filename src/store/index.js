import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//types

const types = {
  IS_LOGIN: 'IS_LOGIN',
  CURRENT_ID: 'CURRENT_ID',
  NAME: "NAME",
}

//state

const state = {
  appear: true,
  currentId: 1,
  name: "游客",
}

//getters

const getters = {
  appear: state => state.appear,
  currentId: state => state.currentId,
  name: state => state.name,
}

// mutations

const mutations = {
  [types.IS_LOGIN](state, appear) {
    state.appear = appear
  },
  [types.CURRENT_ID](state, currentId) {
    if (currentId) {
      state.currentId = currentId
    } else {
      state.currentId = 1
    }
  },
  [types.NAME](state, name) {
    if (name) {
      state.name = name
    } else {
      state.name = 1
    }
  },
}
// actions

const actions = {
  changeAppear: ({ commit }, appear) => {
    commit(types.IS_LOGIN, appear)
  },
  changeCurrentId: ({ commit }, currentId) => {
    commit(types.CURRENT_ID, currentId)
  },
  changeName: ({ commit }, name) => {
    commit(types.NAME, name)
  },

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
