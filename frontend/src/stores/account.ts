import { defineStore } from 'pinia'
import axios from 'axios'

const useAccountStore = defineStore<any>('account', {
  state: () => ({
    user: null
  }),
  actions: {
    async registerUser(user) {
      return axios.post('/account/register', { user })
    },
    async login(credentials) {
      const user = await axios.post('/account/session', credentials)

      this.user = user.data
    },
  }
})

export default useAccountStore;
