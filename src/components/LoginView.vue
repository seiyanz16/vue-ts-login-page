<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div class="min-h-screen flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      <div class="mb-4 w-full max-w-md">
        <slot name="themeToggle"></slot>
      </div>
      <div class="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6 text-light-text dark:text-dark-text">Login</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-light-text dark:text-dark-text">Email</label>
            <input v-model="form.email" type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-primary dark:bg-gray-700 dark:border-dark-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm" required placeholder="Enter your email" z/>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-light-text dark:text-dark-text">Password</label>
            <input v-model="form.password" type="password" id="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-primary dark:bg-gray-700 dark:border-dark-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-primary dark:focus:border-dark-primary sm:text-sm" required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" class="w-full bg-light-primary text-white py-2 px-4 rounded-md hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:focus:ring-dark-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const form = ref({
      email: '',
      password: ''
    });

    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    const handleSubmit = () => {
      if (form.value.email && form.value.password) {
        console.log('Email:', form.value.email);
        console.log('Password:', form.value.password);
      }
    };

    return { form, isDarkMode, toggleDarkMode, handleSubmit };
  }
});
</script>

<style>
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.bg-light-background,
.bg-dark-background,
.bg-light-card,
.bg-dark-card,
.text-light-text,
.text-dark-text,
.border-gray-300,
.border-dark-secondary {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

input,
button {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
</style>