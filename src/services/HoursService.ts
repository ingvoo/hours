import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
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
    return apiClient.get('/entries/' + id)
  },
  postEntry(entry: object) {
    return apiClient.post('/entries', entry)
  },
  updateEntry(id: string) {
    return apiClient.put('/entries/' + id)
  },
  deleteEntry(id: string) {
    return apiClient.delete('/entries/' + id)
  },

  // Clients
  getClients() {
    return apiClient.get('/clients')
  },
  postClient(client: object) {
    return apiClient.post('/clients', client)
  },

  // Projects
  getProjects() {
    return apiClient.get('/projects')
  },
}
