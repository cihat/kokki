<script setup lang="ts">
import useKitchenStore from '@/stores/kitchen';
import { Ingredient } from '@/types/kitchen';
import { search as emojiSearch } from 'node-emoji';

const { suggestions } = defineProps<{
  suggestions: {
    _id: string;
    name: string;
    ingredients: Ingredient[]
  }[]
}>()
const kitchenStore = useKitchenStore();

const { ingOnTable } = kitchenStore;

const getEmoji = (name: string) => {
  const emoji = emojiSearch(name.toLowerCase())[0]?.emoji;

  return emoji ? `${emoji} ${name}` : name;
}

const getMissingIngredients = (suggestionIngredients: Ingredient[]) => {
  const suggestionIngredientsValues = Object.values(suggestionIngredients);
  const ingOnTableValues = Object.values(ingOnTable);

  return suggestionIngredientsValues.filter(ing => !ingOnTableValues.includes(getEmoji(ing)));
}
</script>

<template>
  <a-card class="a-card-wrapper" v-for="suggestion in suggestions" :key="suggestion._id">
    <p>{{ suggestion.name.toUpperCase() }}</p>
    <a-typography-title :level="5">Ingredients of the Dish</a-typography-title>
    <div class="ingredients">
      <div class="ingredient" v-for="ing in suggestion.ingredients ">
        {{ getEmoji(ing) }}
      </div>
    </div>
    <div class="missing-ingredients">
      <a-typography-title :level="5">Missing Ingredients</a-typography-title>
      <div class="ingredients">
        <div class="ingredient" v-for="ing in getMissingIngredients(suggestion.ingredients) ">
          {{ getEmoji(ing) }}
        </div>
      </div>
    </div>
  </a-card>
</template>

<style lang="scss" scoped>
.a-card-wrapper {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 8px 0;
  }

  p:first-child {
    font-weight: bold;
    font-size: 18px;
  }

  p:last-child {
    color: #666;
  }
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;

  .ingredient {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}
</style>
