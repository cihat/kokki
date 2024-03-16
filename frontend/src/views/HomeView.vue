<script setup lang="ts">
import { ref } from 'vue'
import particlesConfig from '../constants/particlesConfig'
import draggable from "vuedraggable";

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};

const enabled = ref(true);
const dragging = ref(false);

const ingredients = ref([
  "🍼Milk",
  "🥚Eggs",
  "🧈Butter",
  "🍫Sugar",
  "🧂Salt",
  "🌶️Pepper",
  "🍞Bread",
  "🍗Chicken",
  "🥩Beef",
  "🍤Shrimp",
  "🍣Salmon",
  "🍅Tomato",
  "🥒Cucumber",
  "🥦Broccoli",
  "🥕Carrot",
  "🥔Potato",
  "🍠Sweet Potato",
  "🍆Eggplant",
  "🌽Corn",
  "🍋Lemon",
])
</script>

<template>
  <main class="kitchen">
    <div class="dining-table dragArea">
      <vue-particles id="tsparticles" :options="particlesConfig" @particles-loaded="particlesLoaded"></vue-particles>
    </div>
    <div class="refrigerator">
      <draggable class="ingredients" :list="ingredients" :disabled="!enabled" item-key="name" ghost-class="ghost"
        :move="checkMove" @start="dragging = true" @end="dragging = false">
        <template #item="{ element }">
          <div class="ingredient" :class="{ 'not-draggable': enabled }">
            {{ element }}
          </div>
        </template>
      </draggable>
    </div>
  </main>
</template>

<style scoped lang="scss">
.kitchen {
  height: 100vh;
}

.dining-table {}

.refrigerator {
  position: fixed;
  top: 0;
  right: 0;
  width: 305px;
  height: 100vh;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: visible;
  background: var(--sidebar-bg);
  border-left: 1px solid var(--border-color);
  contain: strict;
  padding: 9px;
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredient {
  margin: 4px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  padding: 8px 8px 7px;
  border-radius: 5px;
  transition: background .15s linear;
  background: var(--item-bg);
  line-height: 1em;
  contain: layout style paint;
  width: fit-content;

  h3 {
    font-weight: 400;
  }
}
</style>
