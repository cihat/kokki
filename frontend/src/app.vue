<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
const user = ref(
  false
  //true
)
const route = useRoute();

const doLogout = () => {
  user.value = false
}

const selectedKeys = computed(() => [route.name])
</script>

<template>
  <a-layout theme="light">
    <a-layout-header v-if="!user">
      <a-row type="flex" justify="space-between">
        <a-col>
          <router-link to="/">Kokki</router-link>
        </a-col>
        <a-col>
          <a-menu theme="light" :selectedKeys="selectedKeys" mode="horizontal" :style="{ lineHeight: '64px' }">
            <a-menu-item key="kitchen" v-if="user">
              <router-link class="test" to="/kitchen">Kitchen</router-link>
            </a-menu-item>
            <a-menu-item key="login" v-if="!user">
              <router-link to="/login">Log in</router-link>
            </a-menu-item>
            <a-menu-item key="register" v-if="!user">
              <router-link to="/register">Sign up</router-link>
            </a-menu-item>
            <a-menu-item key="logout" v-if="user" @click="doLogout">Log out</a-menu-item>
          </a-menu>
        </a-col>
      </a-row>

    </a-layout-header>
    <a-layout-content class="layout">
      <RouterView />
    </a-layout-content>
    <a-layout-footer v-if="!user">
      Kokki Beta ©2024 Created by Cihat Salik
    </a-layout-footer>
  </a-layout>
</template>

<style lang="scss">
.ant-layout {
  min-height: 100vh;
}

.ant-layout-header {
  background: white !important;
  padding: 0 calc(calc(100% - 760px) / 2);
  border-bottom: 1px solid #f0f2f5;
}

.ant-layout-content {
  max-width: 760px;
  align-self: center;
  padding: 4em;
  width: 100%;

  @media (max-width: 576px) {
    padding: 1em;
  }
}

.ant-menu {
  line-height: 64px;
}

.ant-menu-item a {
  display: block;
}

.ant-layout-footer {
  text-align: center;
}
</style>
