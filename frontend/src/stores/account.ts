import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const useChefStore = defineStore('chef', () => {
  const state = reactive({
    chef: {}
  })

  const fetchChef = async () => {
    try {
      const { data: { chef: fetchedChef } } = await axios.post("/suggestion", {
        "chefId": "65fae55f6e003ed87048c8d9",
        "similarity": 0.4
      });

      Object.assign(state.chef, fetchedChef)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  onMounted(async () => {
    await fetchChef()
  })

  return {
    state,
    fetchChef
  }
})

export default useChefStore;
