<script setup lang="ts">
import useAccountStore from '@/stores/account';
import { useRouter } from 'vue-router';

const router = useRouter();
const { isLoggedIn } = useAccountStore();

const infoMessage = () => {
  if (!isLoggedIn) {
    router.push('/login');
  } else {
    router.push('/kitchen');
  }
}
</script>

<template>
  <a-result title="Kitchen Dilemmas: A Culinary Crossroads" sub-title="Navigating Indecision with Ingredients at Hand">
    <template #icon>
      <a-image :preview="false" previewMask="false" src="../../public/landing/landing-image.jpeg" />
    </template>
    <template #extra>
      <h1 class="big-title" @click="infoMessage">👉🏻 Kitchen 🍽️</h1>
    </template>
  </a-result>
</template>

<style scoped lang="scss">
.big-title {
  font-size: 3em;
  margin-top: 2em;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  color: #333333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
