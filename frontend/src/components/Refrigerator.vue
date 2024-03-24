<script setup lang="ts">
import draggable from "vuedraggable";
import useKitchenStore from "@/stores/kitchen";

const {
  dragging,
  isDraggable,
  missingIngredients,
  isDelete,
  availableIngredients,
  addToTable
} = useKitchenStore();
const newIngredient = ref<String>('');

const addIngredientFromBag = () => {
  if (newIngredient.value === '') return;

  availableIngredients.push(newIngredient.value);
  newIngredient.value = '';
};
</script>

<template>
  <div class="refrigerator">
    <div class="refrigerator-inner">
      <div class="popular-ingredients">
        <h1 class="refrigerator-title">Missing Ingredients</h1>
        <draggable class="ingredients" :list="missingIngredients" :disabled="!isDraggable" item-key="name"
          @start="dragging = true" @end="dragging = false" group="ingredient">
          <template #item="{ element }">
            <div class="ingredient" :class="{ 'icon-active': isDelete }" @click="addToTable(element)">
              <div>
                {{ element }}
                <img v-if="isDelete" class="icon remove-icon" src="@/assets/icons/lets-icons:remove.svg" alt="">
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="available-ingredients">
        <h1 class="refrigerator-title">Available Ingredients</h1>
        <draggable class="ingredients" :list="availableIngredients" :disabled="!isDraggable" item-key="name"
          @start="dragging = true" @end="dragging = false" group="ingredient">
          <template #item="{ element }">
            <div class="ingredient" :class="{ 'icon-active': isDelete }" @click="addToTable(element)">
              <div>
                {{ element }}
                <img v-if="isDelete" class="icon remove-icon" src="@/assets/icons/lets-icons:remove.svg" alt="">
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="refrigerator-panel">
      <div class="add-new-ingredient">
        <img class="icon" src="@/assets/icons/lets-icons:search.svg" alt="">
        <input v-model="newIngredient" type="text" placeholder="Add Ingredient" @keyup.enter="addIngredientFromBag">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
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

  &-inner {
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 118px);
  }

  &-title {
    font-size: 1.5rem;
    font-weight: 400;
    margin: .5rem 0;
  }


  &-panel {
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
}

.ingredients {
  height: max-content;
  height: 100%;

}
</style>
