<script setup></script>

<script>
import { mutations } from '@/store'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    sprite: {
      type: String,
      required: true
    },
    types: {
      type: Array,
      required: true,
      validator(values) {
        return Array.isArray(values) && values.every((value) => typeof value === 'string')
      }
    }
  },
  methods: {
    selectPokemon() {
      mutations.setPokemonId(this.id)
    }
  }
}
</script>

<template>
  <li class="list-group-item" @click="selectPokemon">
    <div class="card" style="width: 18rem">
      <img :src="sprite" :alt="name" class="sprite" />
      <div class="card-body">
        <div class="informations">
          <h3 class="identification">
            <span class="id">#{{ id }}</span>
            <span class="name">{{ name }}</span>
          </h3>
          <div class="types">
            <span v-for="type in types" :key="type" :class="`bg--${type}`" class="type text--black">
              {{ type }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
