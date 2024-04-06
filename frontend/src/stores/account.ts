import { defineStore } from 'pinia'
import axios from 'axios'

const useAccountStore = defineStore('account', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)

  const setUser = (u) => user.value = u;
  const registerUser = async (user) => axios.post('/account/register', { user })

  const login = async (credentials) => {
    const user = await axios.post('/account/session', credentials)

    setUser(user.data)
  }
  const fetchUser = async () => {
    const user = await axios.get('/account')

    setUser(user.data)
  }
  const doLogout = () => user.value = null;

  // fetchUser()

  return {
    user,
    isLoggedIn,
    registerUser,
    login,
    fetchUser,
    doLogout
  }
})

export default useAccountStore;
