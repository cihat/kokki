<script lang="ts" setup>
import useAccountStore from '@/stores/account';
import type { Rule } from 'ant-design-vue/es/form';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface FormState {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const accountStore = useAccountStore() as any;

const formState = reactive<FormState>({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
});

const rules: Record<string, Rule[]> = {
  username: [{ required: true, message: 'Please input your username!' }],
  email: [
    { required: true, message: 'Please input your email!' },
    { type: 'email', message: 'Please input a valid email!' },
  ],
  password: [{ required: true, message: 'Please input your password!' }],
  passwordConfirmation: [{ required: true, message: 'Please input your password confirmation!' }],
};

const backendError = ref<string | null>(null);
const loading = ref(false);

const onFinish = async () => {
  backendError.value = null;
  loading.value = true;
  try {
    await accountStore.registerUser(formState);
    router.push('/login?registerSuccess=true');
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
  <a-card title="Sign up">
    <a-form :rules="rules" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
      autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="Username" name="username">
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item label="Email" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="Password" name="password">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item label="Confirm password" name="passwordConfirmation">
        <a-input-password v-model:value="formState.passwordConfirmation" />
      </a-form-item>


      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Register</a-button>
        <div style="padding: 10px 0;">
          Already have an account? <router-link to="/login">Log in</router-link>
        </div>
      </a-form-item>
    </a-form>
    <div v-if="backendError">
      <a-alert class="backend-errors" :message="backendError" type="error"></a-alert>
    </div>
  </a-card>

</template>

<style lang="scss" scoped></style>
