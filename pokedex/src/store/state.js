import { reactive } from "vue";

const LIMIT = 20;
const OFFSET = 0;

export default reactive({
	list: [],
	tmpList: [],
	listHasNext: false,
	listHasCompleted: false,
	listHasError: false,

	isSearching: false,
	isPokemonSearch: false,
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,

	pokemonId: null,
});
