<script setup lang="ts">
import useFoodStore from '@/stores/food'

const foodStore = useFoodStore();
const suggestions = computed(() => foodStore.suggestions);
const isLoading = computed(() => foodStore.isLoading);

const open = ref<boolean>(true);
const toggleDrawer = () => open.value = !open.value;
const onClose = () => open.value = false;
window.addEventListener('keydown', (e) => { e.key === 'e' && e.metaKey && toggleDrawer() })
</script>

<template>
  <a-drawer width="600" height="800" title="Suggestion(s)" placement="bottom" :open="open" @close="onClose">
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
