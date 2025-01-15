import { writable } from 'svelte/store';

export const gameState = writable([
	['', '', '', ''],
	['', '', '', ''],
	['', '', '', ''],
	['', '', '', '']
]);

export const currentPlayer = writable('X'); // There are two: p1 and p2

export const gameStatus = writable('PLAYING');
