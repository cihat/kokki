<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute();
const layout = computed(() => `${route.meta.layout}-layout` || 'default-layout')
</script>

<template>
  <a-layout theme="light">
    <component :is="layout" />
  </a-layout>
</template>
