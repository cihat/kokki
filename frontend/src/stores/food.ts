import { SuggestionResponse } from '../types/kitchen';
import axios from 'axios';
import { defineStore } from 'pinia';
import _ from 'lodash';

const useFoodStore = defineStore('food', () => {
  const suggestions = ref<SuggestionResponse[]>([]);
  const isLoading = ref(false);
  let oldIngredients: String[] = [];
  let oldSimilarity: Number = 0;

  const postSuggestion = async (ingredientsOnTable: String[], similarity: Number) => {
    isLoading.value = true;

    if (_.isEqual(ingredientsOnTable.sort(), oldIngredients.sort()) && (similarity == oldSimilarity)) {
      isLoading.value = false;
      return;
    } else {
      suggestions.value = [];
    }

    try {
      //TODO: refactor to use the real chefId with session, auth or something
      const { data: { suggestions: fetchedSuggestions } } = await axios.post("/suggestion", {
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
      oldSimilarity = similarity;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return { postSuggestion, suggestions, isLoading };
});

export default useFoodStore;
