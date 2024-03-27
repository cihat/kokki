import { SuggestionResponse } from '../types/kitchen';
import axios from 'axios';
import { defineStore } from 'pinia';

const useFoodStore = defineStore('food', () => {
  const suggestions = ref<SuggestionResponse[]>([]);
  const isLoading = ref(false);

  const postSuggestion = async (ingredientOnTable: String[], similarity: Number) => {
    isLoading.value = true;
    try {
      //TODO: refactor to use the real chefId with session, auth or something
      const { data: { suggestions: fetchedSuggestions } } = await axios.post("/food/suggestion", {
        // "chefId": "65fae55f6e003ed87048c8d9",
        "ingredients": ingredientOnTable,
        similarity
      });
      if (fetchedSuggestions.length === 0) {
        isLoading.value = false;
        return;
      }

      suggestions.value = fetchedSuggestions;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return { postSuggestion, suggestions, isLoading };
});

export default useFoodStore;
