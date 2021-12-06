import { createStore } from 'vuex'
import HoursService from '@/services/HoursService'

export default createStore({
  state: {
    user: 'ingvoo',
    entries: [] as any,
    entry: {},
  },

  mutations: {
    SET_ENTRIES(state, entries) {
      state.entries = entries
    },

    SET_ENTRY(state, entry) {
      state.entry = entry
    },

    ADD_ENTRIE(state, entry) {
      state.entries.push(entry)
    },
  },

  actions: {
    getEntries({ commit }) {
      HoursService.getEntries()
        .then((response) => {
          commit('SET_ENTRIES', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getEntry({ commit }, id) {
      HoursService.getEntry(id)
        .then((response) => {
          commit('SET_ENTRY', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    createEntry({ commit }, entry) {
      HoursService.postEntry(entry)
        .then(() => {
          commit('ADD_ENTRIE', entry)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  modules: {},
})
