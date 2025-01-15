<script lang="ts">
	import { gameState, gameStatus } from '@/stores/store';
	import { checkWin, makeMove } from '@/utils';
	import Icon from '@iconify/svelte';

	export let row;
	export let col;
	export let isOdd: boolean;

	$: value = $gameState[row][col];

	const handleClick = () => {
		if (!value) makeMove(row, col);
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<button
	class="flex h-16 w-16 cursor-pointer items-center justify-center border border-gray-300 bg-white text-xl font-bold text-gray-700 transition hover:bg-gray-200 md:h-20 md:w-20"
	class:bg-gray-200={isOdd}
	onclick={handleClick}
	class:bg-gray-100={!isOdd}
>
	{#if value === 'X'}
		<Icon icon="icomoon-free:cross" class="h-7 w-7 text-red-500" />
	{:else if value === 'O'}
		<Icon icon="codicon:circle-outline" class="h-14 w-14 text-blue-500" />
	{/if}
</button>
