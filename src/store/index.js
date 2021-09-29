import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  menu: JSON.stringify(''),
  username: ''
}
const store = new Vuex.Store({
  state,
  mutations: {
    setToken: (state, data) => {
      state.token = data
      localStorage.setItem('token', data)
    },
    removeStorage: (state, value) => {
      localStorage.removeItem('token')
    },
    setMenu: (state, data) => {
      state.menu = JSON.stringify(data)
      localStorage.setItem('menu', JSON.stringify(data))
    },
    removeMenu: (state, value) => {
      localStorage.removeItem('menu')
    },
    setUsername: (state, value) => {
      state.username = value
      localStorage.setItem('username', value)
    }
  }}
)
export default store
