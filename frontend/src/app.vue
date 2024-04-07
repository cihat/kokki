<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute();
const selectedKeys = computed(() => [route.name])
const layout = computed(() => `${route.meta.layout}-layout` || 'default-layout')
</script>

<template>
  <a-layout theme="light">
    <component :is="layout" :selectedKeys="selectedKeys" />
  </a-layout>
</template>
