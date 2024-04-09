import { defineStore } from "pinia";
import { ings } from '@/constants/ingredients'
import { Ingredient } from "@/types/kitchen";
import { useStorage } from '@vueuse/core';

const useKitchenStore = defineStore('kitchen', () => {
  const dragging = ref(false);

  const missingIngredients = useStorage('missingIngredients', ref<String[]>(ings))
  const ingOnTable = useStorage('ingOnTable', ref<Array<String>>([]))
  const availableIngredients = useStorage('availableIngredients', ref<Array<String>>([
    "🧅 Onion",
    "🍅 Tomato",
    "🍖 meat",
    "🥔 Potato",
  ]));

  const isRemoveIngredient = ref(false);
  const isOpenSuggestions = ref(false);

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

  const removeIngredientFromAvailable = (item: Ingredient) => {
    if (isRemoveIngredient.value)
      availableIngredients.value.splice(availableIngredients.value.indexOf(item), 1);
  }

  const removeIngredientFromTable = (item: Ingredient) => {
    if (isRemoveIngredient.value)
      ingOnTable.value.splice(ingOnTable.value.indexOf(item), 1);
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
    removeIngredientFromAvailable,
    removeIngredientFromTable
  }
})

export default useKitchenStore;
