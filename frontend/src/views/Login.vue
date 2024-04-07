<script lang="ts" setup>
import useAccountStore from '@/stores/account';
import type { Rule } from 'ant-design-vue/es/form';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface FormState {
  email: string;
  password: string;
  remember: boolean;
}

const accountStore = useAccountStore() as any;

const formState = reactive<FormState>({
  email: '',
  password: '',
  remember: true,
});

const rules: Record<string, Rule[]> = {
  email: [
    { required: true, message: 'Please input your email!' },
    { type: 'email', message: 'Please input a valid email!' },
  ],
  password: [{ required: true, message: 'Please input your password!' }],
};

const backendError = ref<string | null>(null);
const loading = ref(false);

const onFinish = async (credentials: any) => {
  backendError.value = null;
  loading.value = true;

  try {
    await accountStore.login(credentials);
    router.push('/kitchen');
  } catch (error: any) {
    backendError.value = error.response.data.message as string;
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<template>
  <a-card title="Login">
    <a-form :rules="rules" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
      autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="Email" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="Password" name="password">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Login</a-button>
        <div style="padding: 10px 0;">
          Don't have an account? <router-link to="/register">Sign up</router-link>
        </div>
      </a-form-item>
    </a-form>
    <a-divider>Or</a-divider>
    <a-row type="flex" justify="space-around">
      <a-col>
        <img src="@/assets/icons/logos:google.svg" alt="">
      </a-col>
      <a-col>
        <img src="@/assets/icons/logos:facebook.svg" alt="">
      </a-col>
    </a-row>
  </a-card>

</template>
