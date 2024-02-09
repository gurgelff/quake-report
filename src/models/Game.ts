import { GameProps, KillsScoreList } from "@src/types/Game";
import Player from "./Player";

/**
 * @description Game class to handle game stats of a match
 * @property {number} id - Game id that will compose the Game Name
 * @property {number} total_kills - Total game kills in a given match
 * @property {string[]} players - Players usernames
 */
class Game {
    private id: number;
    private total_kills: number;
    private players: string[];

    constructor({ id, total_kills, players }: GameProps) {
        this.id = id;
        this.total_kills = total_kills;
        this.players = players;
    }

    getGameName() {
        return `game_${this.id}`;
    }

    getTotalKills() {
        return this.total_kills;
    }

    incrementTotalKills() {
        this.total_kills++;
    }

    /**
     * @description Get players usernames excluding "\<world\>"
     * @memberof Game
     * @returns {string[]} - Valid Players usernames
     */
    getPlayersUsernames() {
        return this.players.filter((player) => player !== "<world>");
    }

    /**
     * Get the game kills score list and sort it by player's score
     * @param {Player} players The players list
     * @returns {KillsScoreList} - Kills score list sorted by player's score
     */
    getKillsScoreList(players: Player[]): KillsScoreList {
        const kills: KillsScoreList = [];

        for (const player of players) {
            if (player.getUsername() === "<world>") continue;
            kills.push({ [player.getUsername()]: player.getScore() });
        }

        return kills.sort((scorePlayer1, scorePlayer2) => {
            const score1 = Object.values(scorePlayer1)[0];
            const score2 = Object.values(scorePlayer2)[0];
            return score2 - score1;
        });
    }
}

export default Game;
