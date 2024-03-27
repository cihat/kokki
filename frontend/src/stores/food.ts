import { SuggestionResponse } from '../types/kitchen';
import axios from 'axios';
import { defineStore } from 'pinia';
import _ from 'lodash';

const useFoodStore = defineStore('food', () => {
  const suggestions = ref<SuggestionResponse[]>([]);
  const isLoading = ref(false);
  let oldIngredients: String[] = [];

  const postSuggestion = async (ingredientsOnTable: String[], similarity: Number) => {
    isLoading.value = true;

    if (_.isEqual(toRaw(ingredientsOnTable.sort()), oldIngredients.sort())) {
      isLoading.value = false;
      return;
    }

    try {
      //TODO: refactor to use the real chefId with session, auth or something
      const { data: { suggestions: fetchedSuggestions } } = await axios.post("/food/suggestion", {
        // "chefId": "65fae55f6e003ed87048c8d9",
        "ingredients": ingredientsOnTable,
        similarity
      });
      if (fetchedSuggestions.length === 0) {
        isLoading.value = false;
        return;
      }

      suggestions.value = fetchedSuggestions;
      oldIngredients = [...ingredientsOnTable];
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return { postSuggestion, suggestions, isLoading };
});

export default useFoodStore;
