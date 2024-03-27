import { defineStore } from "pinia";
import { ings } from '@/constants/ingredients'
import { Ingredient } from "@/types/kitchen";

const useKitchenStore = defineStore('kitchen', () => {
  const dragging = ref(false);
  const missingIngredients = ref<String[]>(ings)
  const ingOnTable = ref<Array<String>>([]);
  const isRemoveIngredient = ref(false);
  const isOpenSuggestions = ref(false);
  const availableIngredients = ref<Array<String>>([
    "🧅 Onion",
    "🍅 Tomato",
    "🍖 meat",
    "🥔 Potato",
  ]);

  const toggleIsDelete = () => isRemoveIngredient.value = !isRemoveIngredient.value

  const moveToAvailableIngredients = (item: Ingredient) => {
    if (availableIngredients.value.includes(item)) return;

    ingOnTable.value.splice(ingOnTable.value.indexOf(item), 1)
    availableIngredients.value.push(item);
  };

  const moveToTable = (item: Ingredient) => {
    if (ingOnTable.value.includes(item)) return;

    availableIngredients.value.splice(availableIngredients.value.indexOf(item), 1);
    ingOnTable.value.push(item);
  };

  const removeIngredient = (item: Ingredient) => {
    if (isRemoveIngredient.value) {
      availableIngredients.value.splice(availableIngredients.value.indexOf(item), 1);
    }
  }

  window.addEventListener('keydown', (e) => {
    if (ingOnTable.value.length === 0) return;
  });

  const toggleSuggestions = () => isOpenSuggestions.value = !isOpenSuggestions.value;
  const closeSuggestions = () => isOpenSuggestions.value = false;

  return {
    dragging,
    missingIngredients,
    ingOnTable,
    isRemoveIngredient,
    availableIngredients,
    isOpenSuggestions,
    toggleSuggestions,
    closeSuggestions,
    toggleIsDelete,
    moveToAvailableIngredients,
    moveToTable,
    removeIngredient
  }
})

export default useKitchenStore;
