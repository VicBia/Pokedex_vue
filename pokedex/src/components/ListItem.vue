<script setup></script>

<script>
import { mutations } from '@/store'
import { useRouter } from 'vue-router'

const router = useRouter()

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
      router.push({ name: 'PokemonDetails', params: { id: this.id } })
    }
  }
}
</script>

<template>
  <div class="card" style="width: 18rem">
    <li class="list-group-item" @click="selectPokemon">
      <img :src="sprite" :alt="name" class="card-img-top" />
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
    </li>
  </div>
</template>

<style scoped>
.types {
  display: flex;
  font-size: 12px;
  gap: 5px;
}
.type {
  padding: 3px 8px;
  font-weight: bold;
}
.bg--bug {
  background-color: #009c19;
}
.bg--dark {
  background-color: #707070;
}
.bg--dragon {
  background-color: #4693bd;
}
.bg--electric {
  background-color: #eed535;
}
.bg--fairy {
  background-color: #fdb9e9;
}
.bg--fighting {
  background-color: #c75c1a;
}
.bg--fire {
  background-color: #fd5724;
}
.bg--flying {
  background-color: #52d2f5;
}
.bg--ghost {
  background-color: #7b62a3;
}
.bg--grass {
  background-color: #9bcc50;
}
.bg--ground {
  background-color: #c5b759;
}
.bg--ice {
  background-color: #5ad2f6;
}
.bg--normal {
  background-color: #a4acaf;
}
.bg--poison {
  background-color: #b97fc9;
}
.bg--psychic {
  background-color: #f366b9;
}
.bg--rock {
  background-color: #807940;
}
.bg--steel {
  background-color: #a5b2b3;
}
.bg--water {
  background-color: #2780d4;
}
</style>
