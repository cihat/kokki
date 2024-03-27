<script setup lang="ts">
import draggable from "vuedraggable";
import particlesConfig from '@/constants/particlesConfig.json'
import useFoodStore from "@/stores/food";
import useKitchenStore from "@/stores/kitchen";

const canTakeSuggestion = ref<Boolean>(false);
const similarityValue = ref<number>(0.4);

const { postSuggestion } = useFoodStore();
const kitchenStore = useKitchenStore();
const { dragging, ingOnTable, moveToAvailableIngredients, toggleSuggestions } = kitchenStore;

watch(ingOnTable, (ing) => {
  if (ing.length > 2) canTakeSuggestion.value = true;
  else canTakeSuggestion.value = false;
})

const getSuggestions = () => {
  postSuggestion(ingOnTable, similarityValue.value);
  toggleSuggestions();
}
</script>

<template>
  <main class="kitchen">
    <div class="dining-table">
      <draggable class="ingredients-on-table" :list="ingOnTable" item-key="name" @start="dragging = true"
        @end="dragging = false" group="kitchen">
        <template #item="{ element }">
          <div class="ingredient" @click="moveToAvailableIngredients(element)">
            <div>
              {{ element }}
            </div>
          </div>
        </template>
      </draggable>
      <vue-particles id="tsparticles" :options="particlesConfig" />
    </div>
    <refrigerator />
    <button v-if="canTakeSuggestion" class="cooking" @click="getSuggestions">
      <a-slider v-model:value="similarityValue" :min="0" :max="1" :step="0.01"
        :tip-formatter="(v: String) => `Similarity: ${v}`" />
      <h1>🍽️ Cook</h1>
    </button>
  </main>
  <a-button class="suggestionDrawerButton" type="primary" @click="getSuggestions">Open Suggestion(s) (⌘ + E)</a-button>
  <food-suggestion />
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

.dining-table {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px;

  .ingredients-on-table {
    height: 100%;
    width: calc(100% - var(--refrigerator-width));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;

    .ingredient {
      contain: layout style;
    }
  }
}


.cooking {
  position: fixed;
  right: 50%;
  left: 50%;
  // bottom: -64px;
  // bottom: -30px;
  bottom: 12px;
  text-align: center;
  // width: 300px;
  width: 200px;
  height: 150px;
  transform: translateX(calc(50% - 162px));
  background: var(--sidebar-bg);
  z-index: 100;
  padding: .4rem;
  border-radius: 52px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  // animation: bottomToTop 1s linear alternate-reverse;

  h1 {
    font-size: 2rem;
    padding: 9px;
  }
}

.suggestionDrawerButton {
  position: fixed;
  z-index: 100;

  right: calc(var(--refrigerator-width) + 10px);
  top: 10px;
}
</style>
