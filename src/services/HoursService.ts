import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://ingvoo-hours-api.herokuapp.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  // Entries
  getEntries(): Promise<any> {
    return apiClient.get('/entries')
  },
  getEntry(id: string): Promise<any> {
    return apiClient.get(`/entries/${id}`)
  },
  postEntry(entry: object) {
    return apiClient.post('/entries', entry)
  },
  updateEntry(id: string, entry: object) {
    return apiClient.put(`/entries/${id}`, entry)
  },
  deleteEntry(id: string) {
    return apiClient.delete(`/entries/${id}`)
  },

  // Clients
  getClients() {
    return apiClient.get('/clients')
  },
  postClient(client: object) {
    return apiClient.post('/clients', client)
  },
  putClient(client: object) {
    return apiClient.put('/clients', client)
  },

  // Projects
  getProjects() {
    return apiClient.get('/projects')
  },
}
