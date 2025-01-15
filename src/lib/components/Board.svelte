<script>
	import { gameState, gameStatus } from '@/stores/store';
	import Square from './Square.svelte';
	import { reset } from '@/utils';
</script>

<div>
	<div class="mx-auto grid w-full max-w-md grid-cols-4 gap-2 rounded-lg bg-gray-100 p-4 shadow-lg">
		{#each $gameState as row, rowIndex}
			{#each row as square, colIndex}
				<Square row={rowIndex} col={colIndex} isOdd={(rowIndex + colIndex) % 2 !== 0} />
			{/each}
		{/each}
	</div>

	<!-- {#if $gameStatus !== 'PLAYING'} -->
	<div class="mt-4 text-center text-xl font-bold text-white">
		{$gameStatus === 'PLAYING' ? 'Game going on....' : $gameStatus}
	</div>
	<!-- {/if} -->

	<button
		onclick={reset}
		class="text-dark mt-4 rounded-lg bg-primary-foreground px-6 py-2 font-semibold transition hover:border hover:bg-primary hover:text-white"
	>
		Reset Game
	</button>
</div>
