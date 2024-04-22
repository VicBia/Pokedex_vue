<script setup>
import { RouterLink } from 'vue-router'
import SearchContainer from '../components/SearchContainer.vue'
</script>

<template>
  <nav
    class="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Pokedex</RouterLink>
      <SearchContainer />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin-top: 0 !important;
  margin-left: 0 !important;
}
</style>
