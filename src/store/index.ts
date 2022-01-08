import { createStore } from 'vuex'
import { Entry } from '../types'
import HoursService from '@/services/HoursService'

export default createStore({
  state: {
    entries: [] as any,
    clients: [] as any,
    projects: [] as any,
    tasks: [] as any,
    entry: {},
    client: {},
  },

  mutations: {
    // Entries
    SET_ENTRIES(state, entries) {
      state.entries = entries
    },
    SET_ENTRY(state, entry) {
      state.entry = entry
    },
    ADD_ENTRIE(state, entry) {
      state.entries.push(entry)
    },

    // Clients
    SET_CLIENTS(state, clients) {
      state.clients = clients
    },
    SET_CLIENT(state, client) {
      state.client = client
    },
    ADD_CLIENT(state, client) {
      state.clients.push(client)
    },

    // Projects
    SET_PROJECTS(state, projects) {
      state.projects = projects
    },
  },

  actions: {
    getEntries({ commit }) {
      HoursService.getEntries()
        .then((response) => commit('SET_ENTRIES', response.data))
        .catch((error) => console.log(error))
    },

    getEntry({ commit, state }, id) {
      const existingEntry = state.entries.find((e: any) => e.id === id)

      if (!existingEntry) {
        HoursService.getEntry(id)
          .then((response) => commit('SET_ENTRY', response.data))
          .catch((error) => console.log(error))
      } else {
        state.entry = existingEntry
      }
    },

    createEntry({ commit }, entry) {
      HoursService.postEntry(entry)
        .then(() => commit('ADD_ENTRIE', entry))
        .catch((error) => console.log(error))
    },

    updateEntry({ commit }, payload) {
      HoursService.updateEntry(payload.id, payload.entry)
        .then(() =>
          HoursService.getEntries()
            .then((response) => commit('SET_ENTRIES', response.data))
            .catch((error) => console.log(error))
        )
        .catch((error) => console.log(error))
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

    // Clients
    getClients({ commit }) {
      HoursService.getClients()
        .then((response) => {
          commit('SET_CLIENTS', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getClient({ commit, state }, id) {
      console.log(id)
      const existingClient = state.clients.find((e: any) => e.id === id)

      if (!existingClient) {
        HoursService.getClient(id)
          .then((response) => commit('SET_CLIENT', response.data))
          .catch((error) => console.log(error))
      } else {
        state.entry = existingClient
      }
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

    updateClient({ commit }, client) {
      HoursService.putClient(client)
    },
  },

  modules: {},
})
