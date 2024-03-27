<script setup lang="ts">
import draggable from "vuedraggable";
import useKitchenStore from "@/stores/kitchen";

const kitchenStore = useKitchenStore();
const newIngredient = ref<String>('');

const { dragging, missingIngredients, availableIngredients, toggleIsDelete, moveToTable, removeIngredient } = kitchenStore;

const addIngredientFromBag = () => {
  if (newIngredient.value === '') return;

  availableIngredients.push(newIngredient.value);
  newIngredient.value = '';
};

const isRemoveIngredient = computed(() => kitchenStore.isRemoveIngredient);
</script>

<template>
  <div class="refrigerator">
    <div class="refrigerator-inner">
      <div class="popular-ingredients">
        <h1 class="refrigerator-title">Missing Ingredients</h1>
        <draggable class="ingredients" :list="missingIngredients" item-key="name" @start="dragging = true"
          @end="dragging = false" :group="{ name: 'kitchen', pull: true, put: false }">
          <template #item="{ element }">
            <div class="ingredient">
              <div>
                {{ element }}
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="available-ingredients">
        <h1 class="refrigerator-title">Available Ingredients</h1>
        <draggable class="ingredients" :list="availableIngredients" item-key="name" @start="dragging = true"
          @end="dragging = false" :group="{ name: 'kitchen', pull: true }">
          <template #item="{ element }">
            <div class="ingredient" :class="{ 'icon-active': isRemoveIngredient }"
              @click="!isRemoveIngredient ? moveToTable(element) : removeIngredient(element)">
              <div>
                {{ element }}
                <img v-if="isRemoveIngredient" class="icon remove-icon" src="@/assets/icons/lets-icons:remove.svg"
                  alt="">
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="refrigerator-panel">
      <div class="control-panel">
        <img @click="toggleIsDelete" class="icon" :class="{ 'icon-active': isRemoveIngredient }"
          src="@/assets/icons/lets-icons:trash.svg" alt="">
      </div>
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
  width: var(--refrigerator-width);
  height: 100vh;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: visible;
  background: var(--sidebar-bg);
  border-left: 1px solid var(--border-color);
  contain: strict;
  padding: 9px;

  &-inner {
    display: flex;
    flex-direction: column;
    height: calc(100% - 118px);

    .available-ingredients {
      height: 100%;

    }
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
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid var(--border-color);
    height: 5.75rem;

    .control-panel {
      display: flex;
      flex-direction: column;

      .icon {
        width: 40px;
        height: 40px;
        cursor: pointer;

        &-active {
          animation: shake .5s linear infinite alternate-reverse;
        }
      }
    }

    .add-new-ingredient {
      display: flex;
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
}
</style>
