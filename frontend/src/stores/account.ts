import { defineStore } from 'pinia'
import axios from 'axios'

const useAccountStore = defineStore({
  id: 'account',
  state: () => ({
    user: null,
  }),
  actions: {
    async registerUser(user) {
      return axios.post('/account/register', { user })
    },
    async login(credentials) {
      const user = await axios.post('/account/session', credentials)

      this.user = user.data
    },
    async fetchUser() {
      try {
        const user = await axios.get('/account')
        this.user = user.data
      } catch (e) {
        this.user = null
      }
    },
    async doLogout() {
      await axios.delete('/account/session')
      this.user = null
    }
  },
  getters: {
    isLoggedIn: (state) => state.user !== null
  },
  persist: true
})

export default useAccountStore;
