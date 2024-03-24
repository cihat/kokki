<script setup lang="ts">
import draggable from "vuedraggable";
import particlesConfig from '@/constants/particlesConfig.json'
import useFoodStore from "@/stores/food";
import useKitchenStore from "@/stores/kitchen";

const {
  dragging,
  isDraggable,
  ingOnTable,
  iconSrc,
  isDelete,
  toggleIsDelete,
  toggleIsDraggable,
  removeIngredient,
  toggleSuggestions
} = useKitchenStore();
const { postSuggestion } = useFoodStore();

const canTakeSuggestion = ref<Boolean>(false);
const similarityValue = ref<number>(0.4);

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
      <draggable class="ingredients-on-table" :list="ingOnTable" :disabled="!isDraggable" item-key="name"
        @start="dragging = true" @end="dragging = false" group="ingredient">
        <template #item="{ element }">
          <div class="ingredient" :class="{ 'icon-active': isDelete }" @click="removeIngredient(element)">
            <div>
              {{ element }}
              <img v-if="isDelete" class="icon remove-icon" src="@/assets/icons/lets-icons:remove.svg" alt="">
            </div>
          </div>
        </template>
      </draggable>
      <div class="control-panel">
        <img @click="toggleIsDelete" class="icon" src="@/assets/icons/lets-icons:trash.svg" alt=""
          :class="{ 'icon-active': isDelete }">
        <img @click="toggleIsDraggable" class="icon" :src="iconSrc" alt="Lock Icon"
          :class="{ 'icon-active': !isDraggable }">
      </div>
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

  right: calc(350px + 10px);
  top: 10px;
}
</style>
