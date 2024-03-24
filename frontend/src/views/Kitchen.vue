<script setup lang="ts">
import draggable from "vuedraggable";
import particlesConfig from '@/constants/particlesConfig.json'
import trashSvg from '@/assets/icons/lets-icons:trash.svg';
import removeSvg from '@/assets/icons/lets-icons:remove.svg';
import searchSvg from '@/assets/icons/lets-icons:search.svg'
import useFoodStore from "@/stores/food";
import useKitchenStore from "@/stores/kitchen";

const {
  dragging,
  isDraggable,
  ingredients,
  newIngredient,
  ingOnTable,
  isDelete,
  iconSrc,
  isShowCooking,
  showCooking,
  addIngredientInput,
  toggleIsDraggable,
  toggleIsDelete,
  removeIngredient,
  addIngredient
} = useKitchenStore();

const { postSuggestion } = useFoodStore();
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
              <img v-if="isDelete" class="icon remove-icon" :src="removeSvg" alt="">
            </div>
          </div>
        </template>
      </draggable>
      <div class="control-panel">
        <img @click="toggleIsDelete" class="icon" :src="trashSvg" alt="" :class="{ 'icon-active': isDelete }">
        <img @click="toggleIsDraggable" class="icon" :src="iconSrc" alt="Lock Icon"
          :class="{ 'icon-active': !isDraggable }">
      </div>
      <vue-particles id="tsparticles" :options="particlesConfig" />
    </div>
    <div class="refrigerator">
      <h1>Popular Ingredients</h1>
      <div class="refrigerator-inner">
        <draggable class="ingredients" :list="ingredients" :disabled="!isDraggable" item-key="name"
          @start="dragging = true" @end="dragging = false" group="ingredient">
          <template #item="{ element }">
            <div class="ingredient" :class="{ 'icon-active': isDelete }" @click="addIngredient(element)">
              <div>
                {{ element }}
                <img v-if="isDelete" class="icon remove-icon" :src="removeSvg" alt="">
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="refrigerator-panel">
        <div class="add-new-ingredient">
          <img class="icon" :src="searchSvg" alt="">
          <input v-model="newIngredient" type="text" placeholder="Add Ingredient" @keyup.enter="addIngredientInput">
        </div>
      </div>
    </div>
    <button v-if="isShowCooking" class="cooking" @click="postSuggestion">
      <h1>🍽️ Cook</h1>
    </button>
  </main>
  <a-button class="suggestionDrawerButton" type="primary" @click="showCooking">Open Suggestion(s) (⌘ + E)</a-button>
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
  height: calc(100vh - 4.75rem - 18px);
  align-content: baseline;

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
  height: fit-content;
  width: fit-content;
  contain: layout style;

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

.cooking {
  position: fixed;
  right: 50%;
  left: 50%;
  // bottom: -64px;
  // bottom: -30px;
  bottom: 12px;
  text-align: center;
  // width: 300px;
  width: 162px;
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
</style>@/stores/food
