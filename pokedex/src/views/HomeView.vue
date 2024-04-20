<script setup>
import PokedexCards from '../components/PokedexCards.vue'
</script>

<template>
  <main>
    <PokedexCards />
  </main>
</template>

<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
</style>