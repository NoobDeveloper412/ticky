<script lang="ts">
	import { gameStatus } from '@/stores/store';
	import { supabase } from '@/supabase/supabaseClient';
	import { onMount, onDestroy } from 'svelte';
	import { format } from 'date-fns';

	let leaderboardData = [];
	let recentMatches = [];

	async function loadLeaderboard() {
		try {
			const { data, error } = await supabase.from('game_results').select('winner');

			console.log(data);

			if (error) {
				console.error('Error fetching win data:', error);
				return;
			}

			if (data) {
				const winCounts = data.reduce(
					(acc, curr) => {
						if (curr.winner === 'X') acc.x += 1;
						else if (curr.winner === 'O') acc.o += 1;
						return acc;
					},
					{ x: 0, o: 0 }
				);

				leaderboardData = winCounts;
			}
		} catch (error) {
			console.error('Error fetching leaderboard:', error);
		}
	}

	async function loadRecentMatches() {
		try {
			const { data, error } = await supabase
				.from('game_results')
				.select('id, winner, created_at')
				.order('created_at', { ascending: false })
				.limit(20);

			if (error) {
				console.error('Error fetching recent matches:', error);
				return;
			}

			recentMatches = data;
		} catch (error) {
			console.error('Error fetching recent matches:', error);
		}
	}

	onMount(async () => {
		await loadLeaderboard();
		await loadRecentMatches();

		gameStatus.subscribe(async () => {
			await loadLeaderboard();
		});
	});

	$: if ($gameStatus) {
        console.log($gameStatus)
		loadLeaderboard();
		loadRecentMatches();

	}
</script>

<div class="rounded-lg bg-gray-800 p-4 text-white shadow-md">
	<h1 class="mb-4 text-2xl font-bold">Leaderboard</h1>
	<table class="w-full border-collapse border border-gray-700">
		<tbody>
			<tr>
				<td class="border border-gray-700 p-2">X won {leaderboardData.x} times!</td>
				<td class="border border-gray-700 p-2">O won {leaderboardData.o} times!</td>
			</tr>
		</tbody>
	</table>

	<h1 class="mb-4 mt-8 text-2xl font-bold">Recent Matches</h1>
	<ul class="list-disc">
		{#each recentMatches as match}
			<p class="mb-2">
				Match#: {match.id}, Winner: {match.winner}, Created At: {format(
					new Date(match.created_at),
					'dd-MM-yyyy'
				)}
			</p>
		{/each}
	</ul>
</div>
