<script setup lang="ts">
import LoginView from './views/LoginView.vue';
import TheToggleTheme from './components/MyToggleTheme.vue';
</script>

<template>
  <LoginView>
    <template #themeToggle>
      <TheToggleTheme/>
    </template>
  </LoginView>
</template>