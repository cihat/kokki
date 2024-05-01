<script setup lang="ts">
import { computed } from 'vue';
import useFoodStore from '@/stores/food';
import useKitchenStore from '@/stores/kitchen';
import SuggestionCard from './SuggestionCard.vue';

const foodStore = useFoodStore();
const kitchenStore = useKitchenStore();

const suggestions = computed(() => foodStore.suggestions);
const isLoading = computed(() => foodStore.isLoading);

const isOpenSuggestions = computed(() => kitchenStore.isOpenSuggestions);
const toggleSuggestions = () => kitchenStore.toggleSuggestions();
const closeSuggestions = () => kitchenStore.closeSuggestions();

// Keyboard event listener
window.addEventListener('keydown', (e) => {
  if (e.key === 'e' && e.metaKey) {
    toggleSuggestions();
  }
});
</script>

<template>
  <a-drawer width="50vw" title="Suggestion(s)" placement="left" :open="isOpenSuggestions" @close="closeSuggestions">
    <template v-if="!isLoading">
      <template v-if="suggestions && suggestions.length > 0">
        <SuggestionCard :suggestions="suggestions" />
      </template>
      <template v-else>
        <p>No suggestions available</p>
      </template>
    </template>
    <template v-else-if="isLoading">
      <a-spin />
    </template>
  </a-drawer>
</template>
