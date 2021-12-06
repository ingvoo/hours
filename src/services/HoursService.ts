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
  // eslint-disable-next-line
  getEntries(): Promise<any> {
    return apiClient.get('/entries')
  },

  getEntry(id: string): Promise<any> {
    return apiClient.get('/entries/' + id)
  },

  // eslint-disable-next-line
  postEntry(entry: object) {
    return apiClient.post('/entries', entry)
  },

  deleteEntry(id: string) {
    return apiClient.delete('/entries/' + id)
  },
}
