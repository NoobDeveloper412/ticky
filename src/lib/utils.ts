import { gameState, currentPlayer, gameStatus } from '@/stores/store';
import { get } from 'svelte/store';
import { supabase } from './supabase/supabaseClient';

export function checkWin(state) {
	const player = get(currentPlayer);

	// Check rows
	for (let row = 0; row < 4; row++) {
		if (state[row].every((cell) => cell === player)) {
			storeGameResult(player);
			gameStatus.set(`${player} wins!`);
			return true;
		}
	}

	// Check columns
	for (let col = 0; col < 4; col++) {
		if (state.every((row) => row[col] === player)) {
			storeGameResult(player);
			gameStatus.set(`${player} wins!`);
			return true;
		}
	}

	// Check diagonals
	if (
		(state[0][0] === player &&
			state[1][1] === player &&
			state[2][2] === player &&
			state[3][3] === player) ||
		(state[0][3] === player &&
			state[1][2] === player &&
			state[2][1] === player &&
			state[3][0] === player)
	) {
		storeGameResult(player);
		gameStatus.set(`${player} wins!`);
		return true;
	}

	// Check for draw
	if (!state.flat().includes('')) {
		storeGameResult('Draw');
		gameStatus.set('Draw!');
		return true;
	}

	return false;
}

async function storeGameResult(winner) {
	try {
		const { data, error } = await supabase
			.from('game_results') 
			.insert({
				winner: winner
			});

		if (error) {
			console.error('Error storing game result:', error);
		}
	} catch (error) {
		console.error('Error storing game result:', error);
	}
}
export function makeMove(row, col) {
	gameState.update((state) => {
		if (!state[row][col] && get(gameStatus) === 'PLAYING') {
			const player = get(currentPlayer);

			const updatedState = state.map((rowArr, rowIndex) =>
				rowIndex === row
					? rowArr.map((cell, colIndex) => (colIndex === col ? player : cell))
					: rowArr
			);

			// Call checkWin only once after state update
			if (checkWin(updatedState)) {
				// Pass updated state to checkWin
				return updatedState;
			}

			currentPlayer.set(player === 'X' ? 'O' : 'X');
			return updatedState;
		}

		return state;
	});
}
export function reset() {
	gameState.set([
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', '']
	]);
	currentPlayer.set('X');
	gameStatus.set('PLAYING');
}
