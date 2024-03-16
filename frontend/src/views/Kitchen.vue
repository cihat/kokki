<script setup>
import { ref, computed } from 'vue'
import particlesConfig from '@/constants/particlesConfig.json'
import draggable from "vuedraggable";
import lockOpenSvg from '@/assets/icons/mynaui:lock-open.svg';
import lockSvg from '@/assets/icons/mynaui:lock-close.svg';
import { ingredients as ings } from '@/constants/ingredients.js'
import searchSvg from '@/assets/icons/mynaui:search.svg'

const dragging = ref(false);
const isDraggable = ref(true);
const ingredients = ref(ings)
const newIngredient = ref('');

const toggleEnabled = () => isDraggable.value = !isDraggable.value;
const iconSrc = computed(() => isDraggable.value ? lockOpenSvg : lockSvg);

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};

const addIngredient = () => {
  if (newIngredient.value === '') return;
  ingredients.value.push(newIngredient.value);
  newIngredient.value = '';
};

</script>

<template>
  <main class="kitchen">
    <div class="dining-table">
      <div class="control-panel">
        <img @click="toggleEnabled" class="icon" :src="iconSrc" alt="Lock Icon">
      </div>
      <vue-particles id="tsparticles" :options="particlesConfig" @particles-loaded="particlesLoaded"></vue-particles>
    </div>
    <div class="refrigerator">
      <div class="refrigerator-inner">
        <draggable class="ingredients" :list="ingredients" :disabled="!isDraggable" item-key="name" ghost-class="ghost"
          @start="dragging = true" @end="dragging = false">
          <template #item="{ element }">
            <div class="ingredient" :class="{ 'cursor-none': !isDraggable }">
              {{ element }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="refrigerator-panel">

        <div class="add-new-ingredient">
          <img class="icon" :src="searchSvg" alt="">
          <input v-model="newIngredient" type="text" placeholder="Add Ingredient" @keyup.enter="addIngredient">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.kitchen {
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  user-select: none;
}

#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.icon {
  cursor: pointer;

  &-active {
    animation: shake .5s linear infinite alternate-reverse;
  }
}

.dining-table {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px;

  .ingredients-on-table {
    height: 100%;
    width: calc(100% - 350px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;

    .ingredient {
      contain: layout style;
    }
  }

  .control-panel {
    position: absolute;
    bottom: 0;
    position: fixed;
    right: 360px;
    display: flex;
    justify-content: space-between;
    padding: 9px;
  }
}

.refrigerator-panel {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  height: 4.75rem;
  margin-bottom: auto;

  .add-new-ingredient {
    display: flex;
    margin-top: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--border-color);
    padding: 0 9px;

    input {
      width: 100%;
      font-size: 15px;
      border: none;
      outline: 0;
      padding: 0 8px;
      height: 44px;
      line-height: 18px;
      position: relative;
      background-size: 21px 21px;
      background-position: 10px 10px;
      color: var(--text-color);
    }
  }

}

.refrigerator {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
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

.cursor-none {
  cursor: not-allowed;
}

.remove-icon {
  z-index: 11;
  position: absolute;
  top: -15px;
  right: -15px;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  display: flex;
  cursor: pointer;
  background-color: var(--sidebar-bg);
}
</style>, watch, watch
