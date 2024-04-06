import useAccountStore from './account'

export default function initStore() {
  const accountStore = useAccountStore()

  try {
    accountStore.fetchUser()
  } catch (e) {
    console.error(e)
  }
}
