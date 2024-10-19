<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-800">
    <div class="bg-white dark:bg-slate-400 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const form = ref({
      email: '',
      password: ''
    });

    const handleSubmit = () => {
      // Logic sederhana untuk menangani login
      if (form.value.email && form.value.password) {
        console.log('Email:', form.value.email);
        console.log('Password:', form.value.password);
        // Anda dapat menambahkan validasi atau request API di sini
      } else {
        alert('Email dan password harus diisi!');
      }
    };

    return { form, handleSubmit };
  }
});
</script>

<style scoped>
</style>
