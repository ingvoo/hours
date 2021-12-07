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
  getEntries(): Promise<any> {
    return apiClient.get('/entries')
  },

  getEntry(id: string): Promise<any> {
    return apiClient.get('/entries/' + id)
  },

  postEntry(entry: object) {
    return apiClient.post('/entries', entry)
  },

  deleteEntry(id: string) {
    return apiClient.delete('/entries/' + id)
  },

  postClient(client: object) {
    return apiClient.post('/clients', client)
  },
}
