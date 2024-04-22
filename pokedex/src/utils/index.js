export const parsePokemonInfo = (info) => ({
  id: info.id,
  name: info.name,
  types: info.types ? info.types.map(({ type }) => (type ? type.name : '')) : [],
  sprite:
    info.sprites.front_default ||
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  moves: info.moves ? info.moves.map(({ move }) => (move ? move.name : '')) : [],
  games: info.game_indices
    ? info.game_indices.map(({ version }) => (version ? version.name : ''))
    : [],
  stats: info.stats
})
