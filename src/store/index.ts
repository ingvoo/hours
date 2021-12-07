import { createStore } from 'vuex'
import HoursService from '@/services/HoursService'

export default createStore({
  state: {
    user: 'ingvoo',
    entries: [] as any,
    clients: [] as any,
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

    ADD_CLIENT(state, client) {
      state.clients.push(client)
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

    getEntry({ commit, state }, id) {
      const existingEntry = state.entries.find((e: any) => e.id === id)

      if (!existingEntry) {
        HoursService.getEntry(id)
          .then((response) => {
            commit('SET_ENTRY', response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        state.entry = existingEntry
      }
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

    deleteEntry({ commit }, id) {
      HoursService.deleteEntry(id).then(() => {
        // TODO we can also delete that specific entry from the store
        HoursService.getEntries()
          .then((response) => {
            commit('SET_ENTRIES', response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },

    createClient({ commit }, client) {
      HoursService.postClient(client)
        .then(() => {
          commit('ADD_CLIENT', client)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  modules: {},
})
