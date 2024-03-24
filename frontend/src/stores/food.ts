import { SuggestionResponse } from '../types/kitchen';
import axios from 'axios';
import { defineStore } from 'pinia';


const useFoodStore = defineStore('food', () => {
  const suggestions = ref<SuggestionResponse[]>([]);
  const isLoading = ref(false);

  const postSuggestion = async () => {
    isLoading.value = true;
    try {
      const { data: { suggestions: fetchedSuggestions } } = await axios.post("/food/suggestion", {
        "chefId": "65fae55f6e003ed87048c8d9",
        "similarity": 0.3
      });
      suggestions.value = fetchedSuggestions;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      isLoading.value = false;
      if (suggestions.value.length != 0) {

      }
    }
  };

  onMounted(async () => {
    await postSuggestion();
  });

  return { postSuggestion, suggestions, isLoading };
});

export default useFoodStore;
