<script setup>
import { state, getters, actions } from '@/store'
import ListItem from './ListItem.vue'
import PokemonDescription from './PokemonDescription.vue'
</script>

<script>
export default {
  computed: {
    pokemonsList() {
      return getters.pokemonsInfo
    },
    isSearching() {
      return state.isSearching
    },
    isPokemonSearch() {
      return state.isPokemonSearch
    },
    hasSearchError() {
      return state.searchHasError
    },
    pokemonId() {
      return state.pokemonId
    }
  },
  methods: {
    async infiniteHandler($state) {
      await actions.getPokemons()

      if (state.listHasNext) {
        $state.loaded()
        return
      }

      if (state.listHasCompleted) {
        $state.complete()
        return
      }

      if (state.listHasError) {
        $state.error()
      }
    }
  }
}
</script>

<template>
  <!-- conteudo dos cards -->
  <div>
    <ul class="list-group">
      <p v-if="isSearching" class="list--message">Looking for the pokemon</p>
      <p v-else-if="hasSearchError" class="list--message">We couldn't find this pokemon</p>
      <ListItem v-else-if="isPokemonSearch" v-bind="pokemonsList[0]" />
      <PokemonDescription v-else-if="pokemonId" :id="pokemonId" />
      <template v-else>
        <ListItem v-for="pokemon in pokemonsList" :key="pokemon.id" v-bind="pokemon" />
        <infinite-loading @infinite="infiniteHandler" />
      </template>
    </ul>
  </div>
</template>

<style scoped>
.list-group {
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
