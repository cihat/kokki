import { defineStore } from "pinia";
import lockOpenSvg from '@/assets/icons/lets-icons:lock-open.svg';
import lockSvg from '@/assets/icons/lets-icons:lock-close.svg';
import { ings } from '@/constants/ingredients'
import { Ingredient } from "@/types/kitchen";

const useKitchenStore = defineStore('kitchen', () => {
  const dragging = ref(false);
  const isDraggable = ref(true);
  const ingredients = ref<String[]>(ings)
  const newIngredient = ref<String>('');
  const ingOnTable = ref<Array<String>>([]);
  const canTakeSuggestion = ref<Boolean>(false);
  const isDelete = ref(false);

  const addIngredientInput = () => {
    if (newIngredient.value === '') return;
    ingredients.value.push(newIngredient.value);
    newIngredient.value = '';
  };

  const iconSrc = computed(() => isDraggable.value ? lockOpenSvg : lockSvg);
  const toggleIsDraggable = () => isDraggable.value = !isDraggable.value;

  const toggleIsDelete = () => isDelete.value = !isDelete.value

  const removeIngredient = (item: Ingredient) => {
    ingOnTable.value.splice(ingOnTable.value.indexOf(item), 1)
    ingredients.value.push(item);
  };

  const addIngredient = (item: Ingredient) => {
    if (ingOnTable.value.includes(item)) return;

    ingOnTable.value.push(item);
    ingredients.value.splice(ingredients.value.indexOf(item), 1);
  };

  const showCooking = () => canTakeSuggestion.value = !canTakeSuggestion.value;

  window.addEventListener('keydown', (e) => {
    if (ingOnTable.value.length === 0) return;
  });

  watch(ingOnTable.value, (ing) => {
    if (ing.length === 0) canTakeSuggestion.value = false;
    else canTakeSuggestion.value = true;
  })

  return {
    dragging,
    isDraggable,
    ingredients,
    newIngredient,
    ingOnTable,
    canTakeSuggestion,
    isDelete,
    toggleIsDelete,
    showCooking,
    addIngredientInput,
    iconSrc,
    toggleIsDraggable,
    removeIngredient,
    addIngredient,
  }
})

export default useKitchenStore;
