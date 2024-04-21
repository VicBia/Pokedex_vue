<script setup>
import ListItem from '@/components/ListItem.vue'
import { state } from '@/store'
import { parsePokemonInfo } from '@/utils'
</script>

<script>
const statsNames = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  speed: 'Speed',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def'
}

export default {
  name: 'PokemonDescription',
  components: {
    ListItem
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      mainInfo: null,
      stats: []
    }
  },
  created() {
    const pokemonInfo = state.list.find((pokemon) => pokemon.id === this.id)

    if (pokemonInfo) {
      const infoParsed = parsePokemonInfo(pokemonInfo)

      const { stats, ...rest } = infoParsed

      this.mainInfo = rest
      this.stats = stats
    }
  },
  methods: {
    parseStatName(name) {
      return statsNames[name] || name
    }
  }
}
</script>

<template>
  <div class="pokemon">
    <ListItem v-bind="mainInfo" />
    <ul class="stats">
      <li v-for="(stat, index) in stats" :key="index">
        {{ parseStatName(stat.stat.name) }}: {{ stat.base_stat }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
