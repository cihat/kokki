import { defineStore } from 'pinia';
import axios from 'axios';

export const useKitchenStore = defineStore('kitchen', () => {
  const ingredients = ["onion", "tomato", "meat", "potato"];
  const suggestions = ref([]);

  const postSuggestion = async () => {
    try {
      const response = await axios.post("/food/suggestion", {
        "chefId": "65fae55f6e003ed87048c8d9",
        "similarity": 0.4
      });

      suggestions.value = response.data.suggestions;
      console.log('Suggestions fetched: ', suggestions.value);
      return suggestions.value;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return { postSuggestion, suggestions };
});
