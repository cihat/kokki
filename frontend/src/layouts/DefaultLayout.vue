<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import useAccountStore from '@/stores/account';

const accountStore = useAccountStore() as any;
const isLoggedIn = computed(() => accountStore.isLoggedIn);
const route = useRoute();
const selectedKeys = computed(() => [route.name])
</script>

<template>
  <a-layout-header>
    <a-row type="flex" justify="space-between">
      <a-col>
        <router-link to="/">Kokki</router-link>
      </a-col>
      <a-col>
        <a-menu v-if="!isLoggedIn" theme="light" :selectedKeys="selectedKeys" mode="horizontal"
          :style="{ lineHeight: '64px' }">
          <a-menu-item key="login">
            <router-link to="/login">Log in</router-link>
          </a-menu-item>
          <a-menu-item key="register">
            <router-link to="/register">Sign up</router-link>
          </a-menu-item>
        </a-menu>
        <a-menu v-else theme="light" :selectedKeys="selectedKeys" mode="horizontal" :style="{ lineHeight: '64px' }">
          <a-menu-item key="logout" @click="accountStore.doLogout">
            <h4> Log out</h4>
            <lets-icons:sign-out-squre-light />
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>

  </a-layout-header>
  <a-layout-content class="layout">
    <RouterView />
  </a-layout-content>
  <a-layout-footer>
    Kokki Beta ©2024 Created by Cihat Salik
  </a-layout-footer>
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
  background-color: white !important;
}

.ant-menu-title-content {
  display: flex;
  justify-content: center;
  align-items: center;

  &>* {
    margin-left: 8px;
  }

  &>*:first-child {
    margin-left: 0;
  }
}
</style>
