import { Game } from "./Game";

export type Gender = {
	id?: string;
	name: string;
	games: Game[];
};
