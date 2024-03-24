<script setup lang="ts">
import { computed } from 'vue';
import useFoodStore from '@/stores/food';
import useKitchenStore from '@/stores/kitchen';

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
  <a-drawer width="600" height="800" title="Suggestion(s)" placement="top" :open="isOpenSuggestions"
    @close="closeSuggestions">
    <template v-if="!isLoading">
      <template v-if="suggestions && suggestions.length > 0">
        <a-card v-for="suggestion in suggestions" :key="suggestion._id">
          <p>{{ suggestion.name }}</p>
          <p>{{ suggestion.ingredients }}</p>
        </a-card>
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
