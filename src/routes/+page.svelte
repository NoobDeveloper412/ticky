<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { currentPlayer } from '@/stores/store';
	import Icon from '@iconify/svelte';
	import Board from '@/components/Board.svelte';

	let showSplashScreen = true;

	const handlePlayerChoice = (player) => {
		currentPlayer.set(player);
		showSplashScreen = false;
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handlePlayerChoice('X');
		}
	};

	onMount(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			// Clean up the event listener on component destruction
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

{#if showSplashScreen}
	<div class="bg-primary-darker fixed inset-0 flex items-center justify-center">
		<div class="flex flex-col items-center space-y-4" transition:fly={{ y: 50, duration: 500 }}>
			<h1 class="text-4xl font-bold text-secondary">Choose Your Side</h1>
			<div class="flex space-x-8">
				<button
					class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
					onclick={() => handlePlayerChoice('X')}
				>
					<Icon icon="icomoon-free:cross" class="h-20 w-20 p-5 text-white" />
				</button>
				<button
					class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
					onclick={() => handlePlayerChoice('O')}
				>
					<Icon icon="codicon:circle-outline" class="h-[80px] w-[80px] text-white" />
				</button>
			</div>
		</div>
	</div>
{/if}

{#if !showSplashScreen}
	<main
		class="flex min-h-screen flex-col items-center bg-primary p-10"
		transition:fade={{ duration: 500 }}
	>
		<h1 class="mb-10 flex items-center justify-center text-4xl text-secondary">
			Tic Tac Toe
			<Icon icon="hugeicons:tic-tac-toe" class="h-10 w-10" />
		</h1>

		<div>
			<Board />
		</div>
	</main>
{/if}
