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
      <img class="image" src="/public/landing/landing-image.jpeg" />
    </template>
    <template #extra>
      <h1 class="big-title" @click="infoMessage">👉🏻 Kitchen 🍽️</h1>
    </template>
  </a-result>
</template>

<style scoped lang="scss">
.ant-result {
  padding: 0;
}

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

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 2em;
}
</style>
