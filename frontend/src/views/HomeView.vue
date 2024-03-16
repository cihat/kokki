<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import particlesConfig from '../constants/particlesConfig'

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <main>
    <TheWelcome />
      <vue-particles id="tsparticles" :options="particlesConfig" @particles-loaded="particlesLoaded"></vue-particles>
  </main>
</template>
