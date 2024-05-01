<script setup lang="ts">
import draggable from "vuedraggable";
import particlesConfig from '@/constants/particlesConfig.json'
import useFoodStore from "@/stores/food";
import useKitchenStore from "@/stores/kitchen";

const foodStore = useFoodStore();
const kitchenStore = useKitchenStore();

const { postSuggestion } = foodStore;
const { dragging, ingOnTable, moveToAvailableIngredients, toggleSuggestions, removeIngredientFromTable } = kitchenStore;

const suggestions = computed(() => foodStore.suggestions);

const canTakeSuggestion = ref<Boolean>(ingOnTable.length > 2);
const similarityValue = ref<number>(0.4);
const isRemoveIngredient = computed(() => kitchenStore.isRemoveIngredient);

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
          <div class="ingredient" :class="{ 'icon-active': isRemoveIngredient }"
            @click="!isRemoveIngredient ? moveToAvailableIngredients(element) : removeIngredientFromTable(element)">
            <div>
              {{ element }}
              <lets-icons:remove-duotone v-if="isRemoveIngredient" class="icon remove-icon" />
            </div>
          </div>
        </template>
      </draggable>
      <vue-particles id="tsparticles" :options="particlesConfig" />
    </div>
    <refrigerator />
    <div v-if="canTakeSuggestion" class="cooking">
      <a-slider v-model:value="similarityValue" :min="0" :max="1" :step="0.01"
        :tip-formatter="(v: String) => `Similarity: ${v}`" />
      <a-button @click="getSuggestions" :loading="foodStore.isLoading">
        🍽️ Cook
      </a-button>
    </div>
  </main>
  <a-float-button v-if="suggestions.length > 0" class="suggestionDrawerButton" @click="getSuggestions"
    :badge="{ count: suggestions.length, color: 'red' }" description="🥘">
    <template #tooltip>
      Open Suggestion(s) (⌘ + E)
    </template>
  </a-float-button>
  <RouterLink to="/">
    <a-float-button class="backDrawerButton" icon="false">
      <template #icon>
        <lets-icons-back width="20px" height="20px" />
      </template>
      <template #tooltip>Back</template>
    </a-float-button>
  </RouterLink>
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

    .icon {
      cursor: pointer;

      &-active {
        animation: shake .5s linear infinite alternate-reverse;
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

    .ingredient {
      contain: layout style;

    }
  }
}


.cooking {
  max-width: 130px;
  max-height: 80px;
  position: fixed;
  right: 50%;
  left: 50%;
  bottom: 12px;
  text-align: center;
  width: 200px;
  height: 150px;
  transform: translateX(calc(50% - 162px));
  background: var(--sidebar-bg);
  z-index: 100;
  padding: .4rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  cursor: pointer;

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

.backDrawerButton {
  position: fixed;
  z-index: 100;
  left: 20px;
  top: 20px;
  cursor: pointer;
  width: 40px !important;
  height: 40px !important;
}
</style>
