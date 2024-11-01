<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LoginView from './views/LoginView.vue';

const isDarkMode = ref<boolean>(false);

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>

<template>
  <LoginView :class="{ dark: isDarkMode }">
    <template #themeToggle>
      <button @click="toggleTheme" class="px-4 py-2 rounded-md bg-transparent"
        :class="isDarkMode ? 'text-white hover:text-dark-secondary' : 'text-light-text hover:text-light-secondary'">
        <fa :icon="isDarkMode ? 'sun' : 'moon'" class="w-5 h-5" />
      </button>
    </template>
  </LoginView>
</template>