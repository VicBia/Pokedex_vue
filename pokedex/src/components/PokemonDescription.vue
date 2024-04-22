<script setup>
import ListItem from '@/components/ListItem.vue'
import { state, getters, actions } from '@/store'
import { parsePokemonInfo } from '@/utils'
</script>

<script>
const statsNames = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  speed: 'Velocidade',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defesa Especial'
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
      stats: [],
      moves: [], 
      games: [],
    }
  },
  created() {
    const pokemonInfo = state.list.find((pokemon) => pokemon.id === this.id)

    if (pokemonInfo) {
      const infoParsed = parsePokemonInfo(pokemonInfo)

      const { stats, moves, games, ...rest } = infoParsed

      this.mainInfo = rest
      this.stats = stats
      this.moves = moves
      this.games = games
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
    <div class="mainPokemonInfo">
      <ListItem v-bind="mainInfo" />
      <ul class="list-group">
        <li v-for="(stat, index) in stats" :key="index" class="list-group-item">
          {{ parseStatName(stat.stat.name) }}: {{ stat.base_stat }}
        </li>
      </ul>
    </div>

    <ul class="list-group">
      <h4>Movimentos de ataque</h4>
      <li v-for="(move, index) in moves" :key="index" class="list-group-item">
        {{ move }}
      </li>
    </ul>
    <ul class="list-group">
      <h4>Games (game_indices)</h4>
      <li v-for="(game, index) in games" :key="index" class="list-group-item">
        {{ game }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mainPokemonInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.list-group {
  justify-content: space-between;
  text-align: center;
}
</style>
