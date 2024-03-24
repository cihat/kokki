import { defineStore } from "pinia";
import lockOpenSvg from '@/assets/icons/lets-icons:lock-open.svg';
import lockSvg from '@/assets/icons/lets-icons:lock-close.svg';
import { ings } from '@/constants/ingredients'
import { Ingredient } from "@/types/kitchen";

const useKitchenStore = defineStore('kitchen', () => {
  const dragging = ref(false);
  const isDraggable = ref(true);
  const missingIngredients = ref<String[]>(ings)
  const ingOnTable = ref<Array<String>>([]);
  const isDelete = ref(false);
  const isOpenSuggestions = ref(false);
  const availableIngredients = ref<Array<String>>([
    "🧅 Onion",
    "🍅 Tomato",
    "🍖 meat",
    "🥔 Potato",
  ]);

  const iconSrc = computed(() => isDraggable.value ? lockOpenSvg : lockSvg);
  const toggleIsDraggable = () => isDraggable.value = !isDraggable.value;

  const toggleIsDelete = () => isDelete.value = !isDelete.value

  const removeIngredient = (item: Ingredient) => {
    ingOnTable.value.splice(ingOnTable.value.indexOf(item), 1)
    availableIngredients.value.push(item);
  };

  const addToTable = (item: Ingredient) => {
    if (ingOnTable.value.includes(item)) return;

    ingOnTable.value.push(item);
    availableIngredients.value.splice(availableIngredients.value.indexOf(item), 1);
  };


  window.addEventListener('keydown', (e) => {
    if (ingOnTable.value.length === 0) return;
  });

  const toggleSuggestions = () => isOpenSuggestions.value = !isOpenSuggestions.value;
  const closeSuggestions = () => isOpenSuggestions.value = false;

  return {
    dragging,
    isDraggable,
    missingIngredients,
    ingOnTable,
    isDelete,
    iconSrc,
    availableIngredients,
    isOpenSuggestions,
    toggleSuggestions,
    closeSuggestions,
    toggleIsDelete,
    toggleIsDraggable,
    removeIngredient,
    addToTable,
  }
})

export default useKitchenStore;
