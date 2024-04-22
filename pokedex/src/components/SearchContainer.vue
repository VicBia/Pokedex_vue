<script setup>
import { actions, mutations } from '@/store'
</script>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    clear() {
      this.name = ''
      mutations.resetList()
    },
    async searchPokemon() {
      await actions.searchPokemon(this.name)
    }
  }
}
</script>

<template>
  <!-- search dos cards -->
  <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
  <form class="d-flex" role="search">
    <input
      class="form-control me-2"
      placeholder="Pesquisar pelo ID..."
      aria-label="Search"
      id="search"
      v-model.trim="name"
      type="text"
      @keyup.enter="searchPokemon"
    />
    <button class="btn btn--clear" @click.prevent="clear">Limpar</button>
    <button class="btn btn--search bg--gray text--yellow" @click.prevent="searchPokemon">
      Pesquisar
    </button>
  </form>
  <!-- </div> -->
</template>

<style scoped>
.navbar-collapse {
  justify-content: end;
}
</style>
